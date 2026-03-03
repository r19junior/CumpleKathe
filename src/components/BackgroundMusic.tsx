import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BackgroundMusicProps {
    isAuthenticated: boolean;
}

export default function BackgroundMusic({ isAuthenticated }: BackgroundMusicProps) {
    const loginAudioRef = useRef<HTMLAudioElement | null>(null);
    const dedicationAudioRef = useRef<HTMLAudioElement | null>(null);
    const [isMuted, setIsMuted] = useState(false);

    const playCurrent = () => {
        if (!isMuted) {
            if (!isAuthenticated) {
                const audio = loginAudioRef.current;
                if (audio) {
                    if (audio.paused) {
                        audio.play().catch(e => console.log("Still blocked:", e));
                    }
                }
            } else {
                const audio = dedicationAudioRef.current;
                if (audio) {
                    if (audio.paused) {
                        audio.play().catch(e => console.log("Still blocked:", e));
                    }
                }
            }
        }
    };

    const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLAudioElement>) => {
        // Music now starts from the beginning as requested
    };

    useEffect(() => {
        if (loginAudioRef.current) loginAudioRef.current.volume = 0.8;
        if (dedicationAudioRef.current) dedicationAudioRef.current.volume = 0.8;

        const handleInteraction = () => {
            playCurrent();
            // Remove listeners once audio starts successfully
            const currentAudio = isAuthenticated ? dedicationAudioRef.current : loginAudioRef.current;
            if (currentAudio && !currentAudio.paused) {
                window.removeEventListener('click', handleInteraction);
                window.removeEventListener('touchstart', handleInteraction);
                window.removeEventListener('scroll', handleInteraction);
            }
        };

        window.addEventListener('click', handleInteraction);
        window.addEventListener('touchstart', handleInteraction);
        window.addEventListener('scroll', handleInteraction);
        window.addEventListener('keydown', handleInteraction);

        playCurrent();

        if (isAuthenticated) {
            if (loginAudioRef.current) {
                loginAudioRef.current.pause();
            }
            if (dedicationAudioRef.current) {
                dedicationAudioRef.current.play().catch(() => { });
            }
        } else {
            if (dedicationAudioRef.current) {
                dedicationAudioRef.current.pause();
                dedicationAudioRef.current.currentTime = 0;
            }
            if (loginAudioRef.current) {
                loginAudioRef.current.play().catch(() => { });
            }
        }

        return () => {
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
            window.removeEventListener('scroll', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
        };
    }, [isAuthenticated, isMuted]);

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsMuted(!isMuted);
    };

    return (
        <>
            <audio
                ref={loginAudioRef}
                src="/music/enigmatica.mp3"
                loop
                preload="auto"
                onLoadedMetadata={handleLoadedMetadata}
            />
            <audio
                ref={dedicationAudioRef}
                src="/music/yellow.mp3"
                loop
                preload="auto"
            />

            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMute}
                className="fixed bottom-6 right-6 z-[100] p-4 bg-neon-red/10 border border-neon-red/30 rounded-full text-neon-red shadow-neon backdrop-blur-md"
            >
                {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6 animate-pulse" />}
            </motion.button>
        </>
    );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Heart, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Login({ onLogin }: { onLogin: () => void }) {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [isLocked, setIsLocked] = useState(true);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === '040307') {
            setIsLocked(false);
            setTimeout(onLogin, 1200);
        } else {
            setError(true);
            setTimeout(() => setError(false), 500);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black px-6 overflow-hidden relative selection:bg-neon-red selection:text-black">
            {/* High-End Background Lighting */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] bg-neon-red rounded-full blur-[200px]"
                />
            </div>

            <AnimatePresence>
                {isLocked && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, scale: 1.05, filter: 'blur(30px)' }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full max-w-lg relative z-10"
                    >
                        <div className="bg-glass-neon p-8 md:p-16 rounded-[2.5rem] md:rounded-[3rem] border border-white/10 shadow-neon-strong backdrop-blur-3xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="flex justify-center mb-8 md:mb-10"
                            >
                                <div className="p-4 md:p-6 bg-neon-red/5 rounded-2xl md:rounded-3xl border border-neon-red/20 relative group overflow-hidden">
                                    <div className="absolute inset-0 bg-neon-red/10 blur-xl group-hover:bg-neon-red/20 transition-colors" />
                                    <Heart className="w-12 h-12 md:w-16 md:h-16 text-neon-red relative z-10 animate-neon-pulse" />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="text-center mb-10 md:mb-12"
                            >
                                <h1 className="text-4xl md:text-7xl font-black mb-2 md:mb-3 tracking-tighter text-neon bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                                    KATHE
                                </h1>
                                <p className="text-[10px] md:text-sm font-mono tracking-[0.4em] uppercase text-neon-red/60 font-semibold">
                                    Acceso Requerido
                                </p>
                            </motion.div>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="relative group">
                                    <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-neon-red transition-all duration-500" />
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="CONTRASEÑA"
                                        className={cn(
                                            "w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-4 text-white placeholder:text-white/10 focus:outline-none focus:border-neon-red/50 focus:bg-white/10 transition-all duration-500 font-mono tracking-[0.3em] uppercase text-xs md:text-sm",
                                            error && "border-red-500 animate-shake"
                                        )}
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.01, backgroundColor: "rgba(255, 0, 60, 1)", color: "#000" }}
                                    whileTap={{ scale: 0.99 }}
                                    type="submit"
                                    className="w-full bg-neon-red/90 text-black font-black text-sm md:text-base py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-500 group shadow-neon uppercase tracking-[0.2em]"
                                >
                                    AUTENTICAR <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
                                </motion.button>
                            </form>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.3 }}
                                transition={{ delay: 1 }}
                                className="mt-12 text-center text-white text-[9px] font-mono tracking-[0.3em] uppercase leading-loose border-t border-white/5 pt-8"
                            >
                                Talvez no pude ser la fuente que te de vida, <br />
                                pero si quiero ser la resistencia que te permita estar viva
                            </motion.p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-6px); }
          75% { transform: translateX(6px); }
        }
        .animate-shake {
          animation: shake 0.25s cubic-bezier(.36,.07,.19,.97) both;
        }
      `}} />
        </div>
    );
}


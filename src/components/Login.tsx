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
            setTimeout(onLogin, 1000);
        } else {
            setError(true);
            setTimeout(() => setError(false), 500);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black px-4 overflow-hidden relative">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-red/10 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-red/5 rounded-full blur-[120px] animate-pulse delay-1000" />

            <AnimatePresence>
                {isLocked && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full max-w-md relative z-10"
                    >
                        <div className="bg-glass-neon p-8 rounded-3xl border-2 border-neon-red/20 shadow-neon">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="flex justify-center mb-6"
                            >
                                <div className="p-4 bg-neon-red/10 rounded-2xl border border-neon-red/30 shadow-neon">
                                    <Heart className="w-12 h-12 text-neon-red animate-pulse" />
                                </div>
                            </motion.div>

                            <h1 className="text-4xl md:text-5xl font-black text-center mb-2 tracking-tighter text-neon">
                                KATHE
                            </h1>
                            <p className="text-xl text-center text-neon-red/80 font-medium mb-10">
                                ¡Feliz Cumpleaños!
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neon-red/50 group-focus-within:text-neon-red transition-colors" />
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Ingresa la clave..."
                                        className={cn(
                                            "w-full bg-black/50 border-2 border-neon-red/20 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-neon-red/50 focus:shadow-neon transition-all duration-300",
                                            error && "border-red-500 animate-shake"
                                        )}
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px #ff003c" }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full bg-neon-red text-black font-black text-lg py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-white transition-all duration-300 group shadow-neon-strong"
                                >
                                    ENTRAR <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </form>

                            <p className="mt-8 text-center text-white/30 text-xs font-mono tracking-widest uppercase">
                                Talvez no pude ser la fuente que te de vida, pero si quiero ser la resistencia que te permita estar viva
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.2s ease-in-out infinite;
        }
      `}} />
        </div>
    );
}

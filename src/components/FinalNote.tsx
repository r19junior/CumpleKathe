import React from 'react';
import { motion } from 'framer-motion';

export default function FinalNote() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="mt-60 text-center border-t border-white/5 pt-32 pb-20 relative overflow-hidden"
        >
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neon-red rounded-full blur-[180px]" />
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-neon-red/40 font-mono tracking-[0.5em] text-[10px] md:text-xs mb-8 uppercase px-4"
            >
                Por más días de alegría junto a ti
            </motion.p>

            <motion.h3
                initial={{ letterSpacing: "0.1em", opacity: 0 }}
                whileInView={{ letterSpacing: "0.3em", opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="text-4xl md:text-7xl font-black text-neon mb-16 italic px-4 leading-tight"
            >
                FELIZ CUMPLEAÑOS KATHE
            </motion.h3>

            <div className="max-w-3xl mx-auto mb-20 px-6">
                <p className="text-white/60 text-base md:text-xl font-light leading-relaxed italic mb-12">
                    "Que este nuevo año sea tan brillante y extraordinario como lo es tu luz. Gracias por el regalo de dejarme caminar a tu lado y compartir tus días. Mi mayor proyecto eres tú: me dedicaré a inventar mil formas de verte sonreír. Si decides ser feliz conmigo, te prometo que cuidaré tu corazón como el tesoro más grande, sin fallarte nunca."
                </p>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="space-y-4"
                >
                    <p className="text-neon-red text-xl md:text-3xl font-black italic tracking-tight uppercase">
                        FELICES 19 AÑOS
                    </p>
                    <p className="text-white/40 text-[10px] md:text-xs font-mono tracking-widest uppercase mb-4">
                        TE COMENTO QUE ES MI NÚMERO FAVORITO
                    </p>
                    <p className="text-white/60 text-sm md:text-base font-medium italic leading-relaxed max-w-lg mx-auto">
                        atte Juan Rodrigo tu enamorado que te ama demasiado cada día más
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex flex-col items-center gap-4 px-4"
            >
                <div className="w-[1px] h-20 bg-gradient-to-b from-neon-red/50 to-transparent" />
                <p className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-mono text-center">
                    eres muy importante para mi,  te amo demasiado
                </p>
            </motion.div>

        </motion.footer>
    );
}

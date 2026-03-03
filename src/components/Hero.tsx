import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-center mb-32 relative pt-20"
        >
            <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-neon-red font-mono tracking-[0.3em] text-xs md:text-sm uppercase mb-6 block"
            >
                Nuestros Momentos Especiales
            </motion.span>

            <motion.h2
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-5xl sm:text-7xl md:text-[10rem] lg:text-[12rem] font-black mb-8 tracking-tighter leading-[0.85]"
            >
                HISTORIAS <br />
                <span className="text-neon italic bg-clip-text">CON KATHE</span>
            </motion.h2>

            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "120px" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-1 bg-neon-red mx-auto rounded-full shadow-neon"
            />

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full pointer-events-none opacity-20">
                <div className="absolute top-1/4 left-0 w-64 h-64 bg-neon-red rounded-full blur-[120px] animate-pulse" />
                <div className="absolute top-1/2 right-0 w-72 h-72 bg-neon-red rounded-full blur-[150px] animate-pulse delay-1000" />
            </div>
        </motion.div>
    );
}

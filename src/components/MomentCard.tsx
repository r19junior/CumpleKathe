import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface MomentCardProps {
    title: string;
    text: string;
    img: string;
    index: number;
}

export default function MomentCard({ title, text, img, index }: MomentCardProps) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
            className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-32 mb-32 md:mb-52 px-4 md:px-0`}
        >
            <div className="flex-1 w-full order-2 md:order-none">
                <motion.div
                    initial={{ x: isEven ? -50 : 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="bg-glass-neon p-8 md:p-20 rounded-[2.5rem] md:rounded-[3rem] border border-white/5 relative group hover:border-neon-red/20 transition-colors duration-700"
                >
                    <Quote className="absolute -top-6 -left-6 md:-top-8 md:-left-8 w-12 h-12 md:w-16 md:h-16 text-neon-red/20 group-hover:text-neon-red/40 transition-colors duration-700" />
                    <p className="text-xl md:text-4xl font-light leading-[1.5] text-white/90 italic tracking-tight mb-8 md:mb-12">
                        "{text}"
                    </p>
                    <div className="flex items-center gap-6">
                        <div className="h-[1px] w-12 md:w-16 bg-neon-red/30 shadow-neon" />
                        <span className="text-neon-red font-black text-[10px] md:text-sm tracking-[0.2em] uppercase italic">{title}</span>
                    </div>
                </motion.div>
            </div>

            <div className="flex-[0.8] w-full relative order-1 md:order-none">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, rotate: isEven ? -2 : 2 }}
                    whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ duration: 1.2 }}
                    className="relative aspect-square md:aspect-[4/5] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-neon-strong group"
                >
                    <img
                        src={img}
                        alt={`Momento ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-neon-red/5 group-hover:bg-transparent transition-colors duration-700" />

                    {/* Corner accents */}
                    <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-neon-red/20 rounded-tr-3xl group-hover:border-neon-red/50 transition-colors duration-700" />
                    <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-neon-red/20 rounded-bl-3xl group-hover:border-neon-red/50 transition-colors duration-700" />
                </motion.div>
            </div>
        </motion.div>
    );
}

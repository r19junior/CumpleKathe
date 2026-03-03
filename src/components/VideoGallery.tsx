import React from 'react';
import { motion } from 'framer-motion';

const videos = [
    {
        src: "/videos/carnaval.mp4",
        title: "Presentación Cultural",
        description: "La primera grabación que tengo de ti"
    },
    {
        src: "/videos/pergola1.mp4",
        title: "Pérgola",
        description: "Donde el tiempo se detiene y solo importamos nosotros."
    },
    {
        src: "/videos/navidad.mp4",
        title: "Navidad",
        description: "La magia de compartir y celebrar la vida juntos."
    }
];

export default function VideoGallery() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-32 md:mb-52 px-4 md:px-0">
            {videos.map((video, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, delay: index * 0.15 }}
                    className="relative group flex flex-col"
                >
                    <div className="relative aspect-[9/16] md:aspect-[10/16] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-black transform-gpu transition-all duration-700 md:group-hover:scale-[1.02] group-hover:border-neon-red/30">
                        <video
                            src={video.src}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />

                        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 z-10 bg-gradient-to-t from-black via-black/80 to-transparent md:bg-none backdrop-blur-[2px] md:backdrop-blur-none">
                            <h3 className="text-neon-red font-black text-xl md:text-2xl uppercase tracking-widest mb-1 md:mb-2 drop-shadow-[0_2px_10px_rgba(255,0,60,0.5)]">
                                {video.title}
                            </h3>
                            <p className="text-white/90 text-xs md:text-sm font-medium italic leading-relaxed">
                                {video.description}
                            </p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

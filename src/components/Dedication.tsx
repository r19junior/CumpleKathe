import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Play } from 'lucide-react';

const videos = [
    {
        src: "/videos/carnaval.mp4",
        title: "Carnaval",
        description: "La alegría y el color de momentos inolvidables."
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

const dedication = [
    {
        text: "Hoy no es un día común, es el día en que el mundo se volvió un lugar increíblemente mejor gracias a tu llegada. Feliz cumpleaños, Kathe.",
        img: "/img/noche.jpeg"
    },
    {
        text: "Quiero que sepas que eres una persona de luz, alguien que con su simple presencia ilumina cualquier habitación. He creado este rincón digital para que nunca olvides lo especial que eres.",
        img: "/img/polleria.jpeg"
    },
    {
        text: "Tu fuerza, tu sonrisa y la forma en que ves la vida son cosas que admiro profundamente. Mereces un año lleno de magia, de sueños cumplidos y de momentos que te dejen sin aliento.",
        img: "/img/parque.jpeg"
    },
    {
        text: "Esta página es solo un pequeño tributo a la gran mujer que eres. Gracias por ser tú, por tu autenticidad y por dejarme ser parte de tu historia.",
        img: "/img/yanahuara.jpeg"
    },
    {
        text: "Disfruta tu día al máximo, rodeada de amor y de todas esas cosas que te hacen feliz. ¡Te deseo lo mejor hoy y siempre!",
        img: "/img/univerisdad.jpeg"
    },
    {
        text: "Que cada pétalo de estas flores represente un deseo cumplido y un motivo para sonreír. Eres hermosa por dentro y por fuera.",
        img: "/img/flores.jpeg"
    }
];

export default function Dedication() {
    return (
        <div className="min-h-screen bg-black text-white py-20 px-6 relative overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-red/5 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-red/5 rounded-full blur-[150px] animate-pulse delay-700" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-24"
                >
                    <span className="text-neon-red font-mono tracking-widest text-sm uppercase mb-4 block">
                        Nuestros Momentos
                    </span>
                    <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-shadow-glow">
                        HISTORIAS CON <span className="text-neon">KATHE</span>
                    </h2>
                    <div className="w-24 h-1 bg-neon-red mx-auto rounded-full shadow-neon" />
                </motion.div>

                {/* Video Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
                    {videos.map((video, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="relative group flex flex-col"
                        >
                            <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden border-2 border-neon-red/20 shadow-neon-strong bg-black">
                                <video
                                    src={video.src}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <div className="mt-8 px-4 text-center">
                                <h3 className="text-neon-red font-black text-xl uppercase tracking-widest mb-2">
                                    {video.title}
                                </h3>
                                <p className="text-white/60 text-sm font-light italic leading-relaxed">
                                    {video.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-32"
                >
                    <span className="text-neon-red font-mono tracking-widest text-sm uppercase mb-4 block">
                        Una dedicatoria especial
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
                        MI MENSAJE <span className="text-neon-red italic">PARA TI</span>
                    </h2>
                    <div className="w-24 h-1 bg-neon-red mx-auto rounded-full shadow-neon" />
                </motion.div>

                <div className="space-y-40">
                    {dedication.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20`}
                        >
                            <div className="flex-1 w-full">
                                <div className="bg-glass-neon p-10 md:p-14 rounded-[2rem] border border-neon-red/20 shadow-neon-strong relative">
                                    <Quote className="absolute -top-6 -left-6 w-12 h-12 text-neon-red opacity-50" />
                                    <p className="text-2xl md:text-3xl font-light leading-relaxed text-white/90 italic">
                                        "{item.text}"
                                    </p>
                                    <div className="mt-8 flex items-center gap-4">
                                        <div className="h-0.5 w-12 bg-neon-red shadow-neon" />
                                        <span className="text-neon-red font-mono text-sm tracking-wider uppercase">Sección {index + 1}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 w-full relative group">
                                <div className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden border-2 border-neon-red/20 shadow-neon-strong h-full">
                                    <img
                                        src={item.img}
                                        alt={`Momento ${index + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-neon-red/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                                {/* Decorative Elements */}
                                <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-neon-red/40 rounded-tr-3xl" />
                                <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-neon-red/40 rounded-bl-3xl" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.footer
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-40 text-center border-t border-neon-red/20 pt-20"
                >
                    <p className="text-neon-red/50 font-mono tracking-widest text-sm mb-4">
                        CELEBRANDO TU EXISTENCIA
                    </p>
                    <h3 className="text-4xl font-black text-neon mb-12 italic">
                        FELIZ CUMPLEAÑOS
                    </h3>
                    <p className="text-white/20 text-xs uppercase tracking-widest">
                        Design & Code with Love // 2026
                    </p>
                </motion.footer>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .text-shadow-glow {
          text-shadow: 0 0 20px rgba(255, 0, 60, 0.3);
        }
      `}} />
        </div>
    );
}

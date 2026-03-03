import React, { useEffect } from 'react';
import Hero from './Hero';
import VideoGallery from './VideoGallery';
import MomentCard from './MomentCard';
import FinalNote from './FinalNote';

const dedicationData = [
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
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white py-12 px-6 relative overflow-hidden selection:bg-neon-red selection:text-black">
            {/* Ambient Background Glows */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-neon-red/5 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-neon-red/5 rounded-full blur-[150px] animate-pulse delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <Hero />
                <VideoGallery />

                <div className="space-y-20">
                    {dedicationData.map((item, index) => (
                        <MomentCard
                            key={index}
                            text={item.text}
                            img={item.img}
                            index={index}
                        />
                    ))}
                </div>

                <FinalNote />
            </div>
        </div>
    );
}


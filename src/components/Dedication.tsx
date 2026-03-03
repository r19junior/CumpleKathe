import React, { useEffect } from 'react';
import Hero from './Hero';
import VideoGallery from './VideoGallery';
import MomentCard from './MomentCard';
import FinalNote from './FinalNote';

const dedicationData = [
    {
        title: "El Amanecer",
        text: "Hoy no es solo una fecha en el calendario, es el aniversario del instante en que el mundo decidió hacerse más bello. Kathe, me iluminas cada día; eres esa luz suave que entra por la ventana y me recuerda que, mientras estés tú, no existe la oscuridad. Eres el centro de mi propia gravedad.",
        img: "/img/noche.jpeg"
    },
    {
        title: "El Pensamiento",
        text: "He creado este rincón porque el silencio no me basta para decirte lo que siento. Kathe, eres lo que pienso cada día; habitas mi mente como una canción que no quiero que termine nunca. Cada píxel y cada palabra aquí son solo un intento de capturar la maravilla que es tenerte en mis pensamientos.",
        img: "/img/polleria.jpeg"
    },
    {
        title: "El Tiempo",
        text: "El tiempo es el regalo más valioso que poseemos, y el mío solo cobra sentido cuando lo gasto a tu lado. Kathe, me gusta pasar tiempo contigo, porque en tu compañía los minutos dejan de correr y se convierten en recuerdos. Admiro tu fuerza y esa forma tan tuya de abrazar la vida; mereces un año donde cada sueño te alcance.",
        img: "/img/parque.jpeg"
    },
    {
        title: "La Confesión",
        text: "Hay verdades que el corazón ya no puede guardar bajo llave. Kathe, me enamoré de ti, de tu autenticidad, de tus silencios y de tu risa. Este tributo es pequeño comparado con la mujer gigante que eres. Gracias por dejarme ser una nota al pie en tu historia, o mejor aún, un verso en tu poema.",
        img: "/img/yanahuara.jpeg"
    },
    {
        title: "La Promesa",
        text: "Mi compromiso no es de un momento, es de una vida entera. Kathe, te acompañaré hasta que deje de existir, caminando a tu paso, celebrando tus triunfos y sosteniéndote en las tormentas. Disfruta tu día rodeada de todo el amor que has sembrado, que es infinito.",
        img: "/img/univerisdad.jpeg"
    },
    {
        title: "La Belleza",
        text: "Dicen que la belleza es pasajera, pero la tuya —la que llevas por dentro y por fuera— es eterna. Que este nuevo ciclo sea un jardín de deseos cumplidos. Eres mi motivo para sonreír y la razón por la que hoy el universo se siente en perfecta armonía.",
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
                            title={item.title}
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


import { useEffect } from 'react';
import Lenis from 'lenis';

const useLenis = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2, // Duración de la animación de scroll
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
            direction: 'vertical', // Dirección del scroll ('vertical', 'horizontal')
            gestureDirection: 'vertical', // Dirección del gesto ('vertical', 'horizontal')
            smooth: true, // Habilita el scroll suave
            mouseMultiplier: 1, // Multiplicador de la velocidad del mouse
            smoothTouch: false, // Habilita el scroll suave en touch
            touchMultiplier: 2, // Multiplicador de la velocidad en touch
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy(); // Limpia Lenis al desmontar el componente
        };
    }, []);

    return null;
};

export default useLenis;
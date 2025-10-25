export const contenedorVariantes = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.8,
        },
    },
};

export const varianteImagen = {
    hidden: { x: -200, opacity: 0 },
    visible: { x: 0, opacity: 1 },
};

export const varianteTexto = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1 },
};
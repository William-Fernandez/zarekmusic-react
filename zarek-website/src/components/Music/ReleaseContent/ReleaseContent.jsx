import React from "react";
import { motion } from "framer-motion";
import {
    contenedorVariantes,
    varianteImagen,
    varianteTexto,
} from "../../../assets/Utils/animation.js";
import ReleaseText from "../ReleaseText/ReleaseText.jsx";
import ImageComponent from "../../ImageComponent/ImageComponent.jsx";
import nuloudCover from '../../../assets/img/Catalogo/nuloud-cover-art.jpg';

export default function ReleaseContent() {
    return (
        <motion.div
            className="flex flex-col md:flex-row justify-evenly items-center md:justify-center w-full min-h-dvh pt-16 md:pt-0 md:mt-20 lg:mb-7"
            variants={contenedorVariantes}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                variants={varianteImagen}
                className="w-full md:w-2/4 min-h-full overflow-hidden"
            >
                <ReleaseText />
            </motion.div>
            <motion.div
                variants={varianteTexto}
                className="hidden w-full md:w-1/2 min-h-full mb-24 md:mb-0 md:flex justify-center items-center"
            >
                <ImageComponent
                    src={nuloudCover}
                    alt="Gang-EP CoverArt"
                    className="w-80 rounded-3xl shadow-2xl shadow-gray-400/60"
                />
            </motion.div>
        </motion.div>
    );
}

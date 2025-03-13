import React from "react";
import { motion } from "framer-motion";
import { contenedorVariantes, varianteImagen, varianteTexto } from "../../../assets/Utils/animation.js";
import ImageComponent from "../../ImageComponent/ImageComponent.jsx";
import bioImage from "../../../assets/img/BACK-SPOTIFY-SQ.webp";
import BiographySection from "../../../components/Biography/BiographySection/BiographySection.jsx";
import PageTitle from "../../../components/PageTitle/PageTitle.jsx";

export default function BioContent() {
    return (
        <>
            <main className="flex-grow flex items-center justify-center pt-16">
                <motion.div
                    className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center w-full min-h-dvh"
                    variants={contenedorVariantes}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        variants={varianteImagen}
                        className="w-2/4 h-full overflow-hidden hidden lg:block"
                    >
                        <ImageComponent
                            src={bioImage}
                            alt="Zarek Bio Image"
                            className="w-full object-cover object-bottom min-h-dvh pt-4  rounded-[0_50px_50px_0]"
                        />
                    </motion.div>
                    <motion.div
                        variants={varianteTexto}
                        className="w-11/12 lg:w-1/2 min-h-dvh mt-5 px-2 pb-5 flex flex-col justify-center overflow-hidden"
                    >
                        <PageTitle title='BIOGRAPHY' textPosition='center' decoration={"decoration-cyan-700"}/>
                        <BiographySection />
                    </motion.div>
                </motion.div>
            </main>
        </>
    );
}

import React from "react";
import PageTitle from "../../PageTitle/PageTitle.jsx";
import DigitalStores from "../DigitalStores/DigitalStores.jsx";
import imgRelease from "../../../assets/img/Catalogo/voyageCover.webp";

export default function ReleaseText() {
    return (
        <div className="flex flex-col items-center md:items-start md:justify-center mt-5 md:my-0 h-max lg:h-2/4 lg:py-7 px-4 md:px-12 bg-black/70 backdrop-blur-sm md:rounded-[0_50px_50px_0] md:border-r-2">
            <PageTitle
                title="New release"
                textPosition="start"
                decoration={"decoration-[#9DE0B2]"}
            />
            <h3 className="text-2xl text-white mt-3 mb-6 font-bold">Out Now !</h3>
            <div className="h-56 w-56 md:hidden">
                <img src={imgRelease} alt="Voyage Cover Art" className="w-full h-full" />
            </div>
            <p className="text-white mt-5 text-center text-sm md:text-base md:text-start">
            <strong className="text-[#9DE0B2]">Voyage</strong> is a track from Sebastian Montoya's latest EP, out now on <strong className="text-[#9DE0B2]">Concept Groove Records</strong>. This one's a proper banger – the vocals are inspired by those classic Dub echoes, blending perfectly with a solid base and <strong className="text-[#9DE0B2]">Zarek</strong>'s signature tech house style. It's all about infectious rhythm, deep groove, vibrant sounds and high-energy for the dancefloor!<br></br>
            Grab your copy on Beatport, Spotify, Apple Music, Deezer, and all the usual spots.
            </p>
            <div className="md:mt-2 pt-3 pb-7 md:pt-3 flex flex-col md:flex-row items-center">
                <p className="md:mr-10 text-lg mb-3 md:text-xl text-white font-bold">Listen Here:</p>
                <DigitalStores />
            </div>
        </div>
    );
}

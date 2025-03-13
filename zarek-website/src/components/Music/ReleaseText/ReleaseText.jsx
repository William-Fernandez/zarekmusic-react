import React from "react";
import PageTitle from "../../PageTitle/PageTitle.jsx";
import DigitalStores from "../DigitalStores/DigitalStores.jsx";
import imgRelease from "../../../assets/img/Catalogo/shortyCover.webp";

export default function ReleaseText() {
    return (
        <div className="flex flex-col items-center md:items-start md:justify-center mt-5 md:my-0 h-max lg:h-2/4 lg:py-7 px-4 md:px-12 bg-black/70 backdrop-blur-sm md:rounded-[0_50px_50px_0] md:border-r-2">
            <PageTitle
                title="New release"
                textPosition="start"
            />
            <h3 className="text-2xl text-white mt-3 mb-6 font-bold">Out Now !</h3>
            <div className="h-56 w-56 md:hidden">
                <img src={imgRelease} alt="Shorty Remix Cover Art" className="w-full h-full" />
            </div>
            <p className="text-white mt-5 text-center text-sm md:text-base md:text-start">
            <strong>"Shorty"</strong> is a remix from a remix album of a version by <strong>Nico Ramirez</strong>, released under his own label, <strong>Arcila Records</strong>, a UK-based imprint. It features the vocals of a classic reggaeton track, blended with a tech house beat in <strong>Zarek</strong>’s signature style—full of rhythm, groove, and vibrant sounds. A perfect mix of rumba and energy for the dancefloor!
                Available now on Spotify, Apple Music, Deezer, SoundCloud and more.
            </p>
            <div className="md:mt-2 pt-3 pb-7 md:pt-3 flex flex-col md:flex-row items-center">
                <p className="md:mr-10 text-lg mb-3 md:text-xl text-white font-bold">Listen Here:</p>
                <DigitalStores />
            </div>
        </div>
    );
}

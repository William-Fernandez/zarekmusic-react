import React from "react";
import PageTitle from "../../PageTitle/PageTitle.jsx";
import DigitalStores from "../DigitalStores/DigitalStores.jsx";
import imgRelease from "../../../assets/img/Catalogo/JiggleCoverArt.webp";

export default function ReleaseText() {
    return (
        <div className="flex flex-col items-center md:items-start md:justify-center mt-5 md:my-0 h-max lg:h-2/4 lg:py-6 px-4 md:px-12 bg-black/70 backdrop-blur-sm md:rounded-[0_50px_50px_0] md:border-r-2">
            <PageTitle
                title="New release"
                textPosition="start"
                decoration={"decoration-[#ece81f]"}
            />
            <h3 className="text-2xl text-white mt-3 mb-6 font-bold">Out Now !</h3>
            <div className="h-56 w-56 md:hidden">
                <img src={imgRelease} alt="Jiggle Cover Art" className="w-full h-full" />
            </div>
            <p className="text-white mt-3 text-center text-sm md:text-base md:text-start">
            <strong className="text-[#ece81f]"><em>Jiggle</em></strong> is the second release by <strong className="text-[#ece81f]">Zarek</strong> on <strong className="text-[#ece81f]">MNTRV Records</strong>. The track brings rolling percussion, a funky electric guitar with attitude, and a groovy bassline that locks you in from the very first beat. Inspired by the spirit of constant movement, <em>Jiggle</em> blends playfulness with irresistible rhythm to deliver pure energy for the dancefloor. From intimate club nights to open-air festivals, it’s crafted to spark smiles, move bodies, and keep the vibe alive.<br /> <br />
            Now available on Beatport, Spotify, Apple Music, Deezer, and all major platforms.
            </p>
            <div className="md:mt-2 pt-3 pb-7 md:pt-3 flex flex-col md:flex-row items-center">
                <p className="md:mr-10 text-lg md:text-xl text-white font-bold">Listen Here:</p>
                <DigitalStores />
            </div>
        </div>
    );
}

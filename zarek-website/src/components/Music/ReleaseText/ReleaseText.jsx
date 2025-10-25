import React from "react";
import PageTitle from "../../PageTitle/PageTitle.jsx";
import DigitalStores from "../DigitalStores/DigitalStores.jsx";
import imgRelease from "../../../assets/img/Catalogo/jazzeadoCoverArtOficial.webp";

export default function ReleaseText() {
    return (
        <div className="flex flex-col items-center md:items-start md:justify-center mt-5 md:my-0 h-max lg:h-2/4 lg:py-6 px-4 md:px-12 bg-black/70 backdrop-blur-sm md:rounded-[0_50px_50px_0] md:border-r-2">
            <PageTitle
                title="New release"
                textPosition="start"
                decoration={"decoration-[#C2632A]"}
            />
            <h3 className="text-2xl text-white mt-3 mb-6 font-bold">Out Now !</h3>
            <div className="h-56 w-56 md:hidden">
                <img src={imgRelease} alt="Jazzeado Cover Art" className="w-full h-full" />
            </div>
            <p className="text-white mt-3 text-center text-sm md:text-base md:text-start">
            <strong className="text-[#C2632A]"><em>Jazzeado</em></strong> by <strong className="text-[#C2632A]">Sebastian Montoya</strong> with <strong className="text-[#C2632A]">Zarek (COL)</strong> is the third release on <strong className="text-[#C2632A]">MNTRV Records</strong> and the label's first exciting collaboration. This track blends the driving percussion of tech house with the soulful warmth of house, delivering an uplifting, irresistible vibe.
            
            It features groovy basslines, vibrant saxophone and organ melodies, and a pure disco-inspired energy that locks you in from the very first beat. Crafted with Sebastian’s minimal touch and Zarek’s signature flow, <em>Jazzeado</em> is made to light up the dancefloor with movement, joy, and connection.<br /> <br />
            Now available on Beatport, Spotify, Apple Music, Deezer, and all major platforms.
            </p>
            <div className="md:mt-2 pt-3 pb-7 md:pt-3 flex flex-col md:flex-row items-center">
                <p className="md:mr-10 text-lg md:text-xl text-white font-bold">Listen Here:</p>
                <DigitalStores />
            </div>
        </div>
    );
}

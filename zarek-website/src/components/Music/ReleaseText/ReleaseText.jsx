import React from "react";
import PageTitle from "../../PageTitle/PageTitle.jsx";
import DigitalStores from "../DigitalStores/DigitalStores.jsx";
import imgRelease from "../../../assets/img/Catalogo/voyageCover.webp";

export default function ReleaseText() {
    return (
        <div className="flex flex-col items-center md:items-start md:justify-center mt-5 md:my-0 h-max lg:h-2/4 lg:py-6 px-4 md:px-12 bg-black/70 backdrop-blur-sm md:rounded-[0_50px_50px_0] md:border-r-2">
            <PageTitle
                title="New release"
                textPosition="start"
                decoration={"decoration-[#D02E03]"}
            />
            <h3 className="text-2xl text-white mt-3 mb-6 font-bold">Out Now !</h3>
            <div className="h-56 w-56 md:hidden">
                <img src={imgRelease} alt="Voyage Cover Art" className="w-full h-full" />
            </div>
            <p className="text-white mt-3 text-center text-sm md:text-base md:text-start">
            <strong className="text-[#D02E03]">The Vox</strong> is a fresh collaboration between <strong className="text-[#D02E03]">Zarek</strong> and <strong className="text-[#D02E03]">Felipe M</strong>. Released by <strong className="text-[#D02E03]">Sojos</strong> as part of the "<strong className="text-[#D02E03]">Chapter Three VA 2025</strong>" compilation. The track blends crisp percussion and rolling grooves with subtle vocal chops that give it its name, offering a clean and energetic sound built for the dancefloor.<br />
            Now available on Beatport, Spotify, Apple Music, Deezer, and all major platforms.
            </p>
            <div className="md:mt-2 pt-3 pb-7 md:pt-3 flex flex-col md:flex-row items-center">
                <p className="md:mr-10 text-lg md:text-xl text-white font-bold">Listen Here:</p>
                <DigitalStores />
            </div>
        </div>
    );
}

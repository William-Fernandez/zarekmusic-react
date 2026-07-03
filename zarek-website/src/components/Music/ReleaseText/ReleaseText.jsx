import React from "react";
import PageTitle from "../../PageTitle/PageTitle.jsx";
import DigitalStores from "../DigitalStores/DigitalStores.jsx";
import imgRelease from "../../../assets/img/Catalogo/grooveIsTheSauceCover.webp";

export default function ReleaseText() {
    return (
        <div className="flex flex-col items-center md:items-start md:justify-center mt-5 md:my-0 h-max lg:h-2/4 lg:py-6 px-4 md:px-12 bg-black/70 backdrop-blur-sm md:rounded-[0_50px_50px_0] md:border-r-2">
            <PageTitle
                title="New release"
                textPosition="start"
                decoration={"decoration-[#FC90AD]"}
            />
            <h3 className="text-2xl text-white mt-3 mb-6 font-bold">
                Out Now !
            </h3>
            <div className="h-56 w-56 md:hidden">
                <img
                    src={imgRelease}
                    alt="Groove Is The Sauce Cover Art"
                    className="w-full h-full"
                />
            </div>
            <p className="text-white mt-3 text-center text-sm md:text-base md:text-start">
                <strong className="text-[#FC90AD]">
                    {" "}
                    <em>Groove Is The Sauce</em>
                </strong>{" "}
                is the fifth release on{" "}
                <strong className="text-[#FC90AD]">MNTRV Records</strong> and
                marks a new chapter in my journey as a producer. Created with a
                more instinctive and playful approach, the track reflects my
                desire to focus on what feels natural in the studio and create
                music that connects through groove rather than complexity. I'm
                excited to finally share it and hope you enjoy listening to it
                as much as I enjoyed making it.
                <br /> <br />
                Now available on Beatport, Spotify, Apple Music, Deezer, and all
                major streaming platforms.
            </p>
            <div className="md:mt-2 pt-3 pb-7 md:pt-3 flex flex-col md:flex-row items-center">
                <p className="md:mr-10 text-lg md:text-xl text-white font-bold">
                    Listen Here:
                </p>
                <DigitalStores />
            </div>
        </div>
    );
}

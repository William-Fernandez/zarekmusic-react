import React from "react";
import PageTitle from "../../PageTitle/PageTitle.jsx";
import DigitalStores from "../DigitalStores/DigitalStores.jsx";
import imgRelease from "../../../assets/img/Catalogo/goodTimeArtwork-web.webp";

export default function ReleaseText() {
    return (
        <div className="flex flex-col items-center md:items-start md:justify-center mt-5 md:my-0 h-max lg:h-2/4 lg:py-6 px-4 md:px-12 bg-black/70 backdrop-blur-sm md:rounded-[0_50px_50px_0] md:border-r-2">
            <PageTitle
                title="New release"
                textPosition="start"
                decoration={"decoration-[#B4D5FD]"}
            />
            <h3 className="text-2xl text-white mt-3 mb-6 font-bold">
                Out Now !
            </h3>
            <div className="h-56 w-56 md:hidden">
                <img
                    src={imgRelease}
                    alt="Good Time Cover Art"
                    className="w-full h-full"
                />
            </div>
            <p className="text-white mt-3 text-center text-sm md:text-base md:text-start">
                <strong className="text-[#976ED4]">
                    <em>Good Time</em>
                </strong>{" "}
                by <strong className="text-[#976ED4]">Zarek (COL)</strong> is
                the fourth release on{" "}
                <strong className="text-[#976ED4]">MNTRV Records</strong>,
                presenting a more stripped-back and club-focused direction for
                the label. Built around tight drums, a rolling bassline, and
                subtle vocal elements, <em>Good Time</em> delivers a clean,
                groove-driven tech house energy designed for the dancefloor.
                Functional and direct, the track works effortlessly in both
                peak-time and late-night DJ sets.
                <br /> <br />
                Now available on Beatport, Spotify, Apple Music, Deezer, and all
                major platforms.
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

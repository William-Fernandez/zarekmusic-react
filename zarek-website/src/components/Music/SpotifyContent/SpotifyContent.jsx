import React, { useState } from "react";
import ImageComponent from "../../ImageComponent/ImageComponent";
import zarekPhoto from "../../../assets/img/zarek-studio-dg.png";

export default function SpotifyContent() {
    const [playing, setPlaying] = useState(false);

    const handlePlay = () => {
        setPlaying(true);
    };

    return (
        <div className="flex max-w-full h-dvh bg-music-page-color">
            <div className="flex justify-center items-center w-full md:w-3/5 min-h-full overflow-hidden">
                {!playing && (
                    <button onClick={handlePlay} className="w-48 h-12 font-bold text-white rounded-2xl bg-cyan-600">Reproducir Spotify</button>
                )}
                {playing && (
                    <iframe
                        src="https://open.spotify.com/embed/artist/6cgXehGf1YZxl0Tv4ZOZXD?utm_source=generator&theme=0"
                        width="80%"
                        height="420"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                )}
            </div>
            <div className="hidden md:block w-2/5 min-h-full overflow-hidden">
                <ImageComponent
                    src={zarekPhoto}
                    alt="Zarek"
                    className="object-cover object-center w-full h-full"
                />
            </div>
        </div>
    );
}

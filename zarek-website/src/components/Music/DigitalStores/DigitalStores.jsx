import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSpotify,
    faApple,
    faYoutube,
    faDeezer,
    faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function DigitalStores() {
    return (
        <div className="z-20 flex justify-center items-center gap-3 mx-2 text-zinc-300">
            <a
                href="https://www.beatport.com/es/release/jazzeado/5427162"
                target="_blank"
                title="Beatport"
            >
                <FontAwesomeIcon icon={faCartShopping} className="hover:scale-125 transition duration-300 hover:text-[#C2632A]" size="xl"/>
            </a>
            <a
                href="https://open.spotify.com/intl-es/album/7gdFEpWCiIjLuYwnuGXG7s?si=LVwSTEY-Tl6gymoi-B4Q5Q"
                target="_blank"
                title="Spotify"
            >
                <FontAwesomeIcon icon={faSpotify} className="hover:scale-125 transition duration-300 hover:text-[#C2632A]" size="xl"/>
            </a>
            <a
                href="https://music.apple.com/gb/album/jazzeado-single/1842188046"
                target="_blank"
                title="Apple Music"
            >
                <FontAwesomeIcon icon={faApple} className="hover:scale-125 transition duration-300 hover:text-[#C2632A]" size="xl"/>
            </a>
            <a
                href="https://www.youtube.com/watch?v=gaEMLljzAg8"
                target="_blank"
                title="Youtube"
            >
                <FontAwesomeIcon icon={faYoutube} className="hover:scale-125 transition duration-300 hover:text-[#C2632A]" size="xl"/>
            </a>
            <a
                href="https://www.deezer.com/es/album/827625531"
                target="_blank"
                title="Deezer"
            >
                <FontAwesomeIcon icon={faDeezer} className="hover:scale-125 transition duration-300 hover:text-[#C2632A]" size="xl"/>
            </a>
            <a
                href="https://soundcloud.com/sebastian_montoya-34677/jazzeado"
                target="_blank"
                title="SoundCloud"
            >
                <FontAwesomeIcon icon={faSoundcloud} className="hover:scale-125 transition duration-300 hover:text-[#C2632A]" size="xl"/>
            </a>
        </div>
    );
}

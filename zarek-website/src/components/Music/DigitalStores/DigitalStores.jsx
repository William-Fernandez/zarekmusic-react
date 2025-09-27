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
                href="https://www.beatport.com/es/release/jiggle/5280531"
                target="_blank"
                title="Beatport"
            >
                <FontAwesomeIcon icon={faCartShopping} className="hover:scale-125 transition duration-300 hover:text-[#ECE81F]" size="xl"/>
            </a>
            <a
                href="https://open.spotify.com/intl-es/track/2xsPkfq14w74AFi3ncBm44?si=119b76ce592a43fb"
                target="_blank"
                title="Spotify"
            >
                <FontAwesomeIcon icon={faSpotify} className="hover:scale-125 transition duration-300 hover:text-[#ECE81F]" size="xl"/>
            </a>
            <a
                href="https://music.apple.com/gb/song/jiggle/1833666094"
                target="_blank"
                title="Apple Music"
            >
                <FontAwesomeIcon icon={faApple} className="hover:scale-125 transition duration-300 hover:text-[#ECE81F]" size="xl"/>
            </a>
            <a
                href="https://www.youtube.com/watch?v=kOaPcIKeYbg"
                target="_blank"
                title="Youtube"
            >
                <FontAwesomeIcon icon={faYoutube} className="hover:scale-125 transition duration-300 hover:text-[#ECE81F]" size="xl"/>
            </a>
            <a
                href="https://www.deezer.com/es/track/3511506071"
                target="_blank"
                title="Deezer"
            >
                <FontAwesomeIcon icon={faDeezer} className="hover:scale-125 transition duration-300 hover:text-[#ECE81F]" size="xl"/>
            </a>
            <a
                href="https://on.soundcloud.com/E9aSDRd2VOvFz8EX6T"
                target="_blank"
                title="SoundCloud"
            >
                <FontAwesomeIcon icon={faSoundcloud} className="hover:scale-125 transition duration-300 hover:text-[#ECE81F]" size="xl"/>
            </a>
        </div>
    );
}

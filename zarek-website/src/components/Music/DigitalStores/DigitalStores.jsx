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
                href="https://www.beatport.com/es/release/mamboleando/5178931"
                target="_blank"
                title="Beatport"
            >
                <FontAwesomeIcon icon={faCartShopping} className="hover:scale-125 transition duration-300 hover:text-[#D02E03]" size="xl"/>
            </a>
            <a
                href="https://open.spotify.com/intl-es/track/29E7VAdqCTRRL8OtUFI38P?si=13a29925aa85486a"
                target="_blank"
                title="Spotify"
            >
                <FontAwesomeIcon icon={faSpotify} className="hover:scale-125 transition duration-300 hover:text-[#D02E03]" size="xl"/>
            </a>
            <a
                href="https://music.apple.com/us/song/mamboleando/1826573556"
                target="_blank"
                title="Apple Music"
            >
                <FontAwesomeIcon icon={faApple} className="hover:scale-125 transition duration-300 hover:text-[#D02E03]" size="xl"/>
            </a>
            <a
                href="https://youtu.be/f2rUuIzBnLs?si=8vVJ89gLVwPcPuPe"
                target="_blank"
                title="Youtube"
            >
                <FontAwesomeIcon icon={faYoutube} className="hover:scale-125 transition duration-300 hover:text-[#D02E03]" size="xl"/>
            </a>
            <a
                href="https://link.deezer.com/s/30DwHFicxy7Jcg1LyKS8E"
                target="_blank"
                title="Deezer"
            >
                <FontAwesomeIcon icon={faDeezer} className="hover:scale-125 transition duration-300 hover:text-[#D02E03]" size="xl"/>
            </a>
            <a
                href="https://soundcloud.com/zarek-dj/mamboleando-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                target="_blank"
                title="SoundCloud"
            >
                <FontAwesomeIcon icon={faSoundcloud} className="hover:scale-125 transition duration-300 hover:text-[#D02E03]" size="xl"/>
            </a>
        </div>
    );
}

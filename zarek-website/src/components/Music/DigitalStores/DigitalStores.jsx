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
                href="https://www.beatport.com/es/release/good-time/5900614"
                target="_blank"
                title="Beatport"
            >
                <FontAwesomeIcon
                    icon={faCartShopping}
                    className="hover:scale-125 transition duration-300 hover:text-[#B4D5FD]"
                    size="xl"
                />
            </a>
            <a
                href="https://open.spotify.com/intl-es/track/1xfpwlJ4jP4TkZuPE6iizB?si=52b06515e95e4cb8"
                target="_blank"
                title="Spotify"
            >
                <FontAwesomeIcon
                    icon={faSpotify}
                    className="hover:scale-125 transition duration-300 hover:text-[#B4D5FD]"
                    size="xl"
                />
            </a>
            <a
                href="https://music.apple.com/gb/album/good-time-single/1876030106"
                target="_blank"
                title="Apple Music"
            >
                <FontAwesomeIcon
                    icon={faApple}
                    className="hover:scale-125 transition duration-300 hover:text-[#B4D5FD]"
                    size="xl"
                />
            </a>
            <a
                href="https://www.youtube.com/watch?v=hw2K7xUB6CA"
                target="_blank"
                title="Youtube"
            >
                <FontAwesomeIcon
                    icon={faYoutube}
                    className="hover:scale-125 transition duration-300 hover:text-[#B4D5FD]"
                    size="xl"
                />
            </a>
            <a
                href="https://www.deezer.com/es/track/3833790441"
                target="_blank"
                title="Deezer"
            >
                <FontAwesomeIcon
                    icon={faDeezer}
                    className="hover:scale-125 transition duration-300 hover:text-[#B4D5FD]"
                    size="xl"
                />
            </a>
            <a
                href="https://soundcloud.com/zarek-dj/good-time"
                target="_blank"
                title="SoundCloud"
            >
                <FontAwesomeIcon
                    icon={faSoundcloud}
                    className="hover:scale-125 transition duration-300 hover:text-[#B4D5FD]"
                    size="xl"
                />
            </a>
        </div>
    );
}

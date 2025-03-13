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
                href="https://www.beatport.com/track/shorty/20051595"
                target="_blank"
                title="Beatport"
            >
                <FontAwesomeIcon icon={faCartShopping} className="hover:scale-125 transition duration-300 hover:text-cyan-700" size="xl"/>
            </a>
            <a
                href="https://open.spotify.com/intl-es/track/5KDlM0RayJIBb2GkyVoTLN?si=ad0b70a504054e9b"
                target="_blank"
                title="Spotify"
            >
                <FontAwesomeIcon icon={faSpotify} className="hover:scale-125 transition duration-300 hover:text-cyan-700" size="xl"/>
            </a>
            <a
                href="https://music.apple.com/co/album/shorty-zarek-col-remix/1792532719?i=1792532734"
                target="_blank"
                title="Apple Music"
            >
                <FontAwesomeIcon icon={faApple} className="hover:scale-125 transition duration-300 hover:text-cyan-700" size="xl"/>
            </a>
            <a
                href="https://youtu.be/P3u6-Y3kLRE?si=ukv4GnV-K7WkNGKD"
                target="_blank"
                title="Youtube"
            >
                <FontAwesomeIcon icon={faYoutube} className="hover:scale-125 transition duration-300 hover:text-cyan-700" size="xl"/>
            </a>
            <a
                href="https://dzr.page.link/AmzoR9zK7CZFaAAz7"
                target="_blank"
                title="Deezer"
            >
                <FontAwesomeIcon icon={faDeezer} className="hover:scale-125 transition duration-300 hover:text-cyan-700" size="xl"/>
            </a>
            <a
                href="https://soundcloud.com/arcila-records-494898887/nico-rami-rez-shorty-zarek-col?si=b5672015ea2f4eb680d8bde766cd72b0&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                target="_blank"
                title="SoundCloud"
            >
                <FontAwesomeIcon icon={faSoundcloud} className="hover:scale-125 transition duration-300 hover:text-cyan-700" size="xl"/>
            </a>
        </div>
    );
}

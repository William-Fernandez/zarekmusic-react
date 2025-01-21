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
                href="https://www.beatport.com/release/gang-ep/4750538"
                target="_blank"
                title="Beatport"
            >
                <FontAwesomeIcon icon={faCartShopping} className="hover:scale-125 transition duration-300 hover:text-cyan-700" size="xl"/>
            </a>
            <a
                href="https://open.spotify.com/intl-es/album/1zyAtlHatS9e8EJObDycJO?si=rwWoMD7bQrKyshzPPNKkPg"
                target="_blank"
                title="Spotify"
            >
                <FontAwesomeIcon icon={faSpotify} className="hover:scale-125 transition duration-300 hover:text-cyan-700" size="xl"/>
            </a>
            <a
                href="https://music.apple.com/gb/album/gang-ep-single/1770522272"
                target="_blank"
                title="Apple Music"
            >
                <FontAwesomeIcon icon={faApple} className="hover:scale-125 transition duration-300 hover:text-cyan-700" size="xl"/>
            </a>
            <a
                href="https://www.youtube.com/watch?v=1idBaylw3a4&list=OLAK5uy_lpiXyquBRMP6ZxLzEU8Nd8PIC6VtozJTw"
                target="_blank"
                title="Youtube"
            >
                <FontAwesomeIcon icon={faYoutube} className="hover:scale-125 transition duration-300 hover:text-cyan-700" size="xl"/>
            </a>
            <a
                href="https://deezer.page.link/jB2L9gyJ1GSi9NhU8"
                target="_blank"
                title="Deezer"
            >
                <FontAwesomeIcon icon={faDeezer} className="hover:scale-125 transition duration-300 hover:text-cyan-700" size="xl"/>
            </a>
            <a
                href="https://on.soundcloud.com/n7k1TWx4YfYVSvRe9"
                target="_blank"
                title="SoundCloud"
            >
                <FontAwesomeIcon icon={faSoundcloud} className="hover:scale-125 transition duration-300 hover:text-cyan-700" size="xl"/>
            </a>
        </div>
    );
}

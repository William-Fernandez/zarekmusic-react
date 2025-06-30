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
                href="https://www.beatport.com/es/track/the-vox/20599226"
                target="_blank"
                title="Beatport"
            >
                <FontAwesomeIcon icon={faCartShopping} className="hover:scale-125 transition duration-300 hover:text-[#E23C4A]" size="xl"/>
            </a>
            <a
                href="https://open.spotify.com/intl-es/track/4XjRRYkjJfzwGRFlthU9EG?si=e23466fd0c9642f2"
                target="_blank"
                title="Spotify"
            >
                <FontAwesomeIcon icon={faSpotify} className="hover:scale-125 transition duration-300 hover:text-[#E23C4A]" size="xl"/>
            </a>
            <a
                href="https://music.apple.com/us/song/the-vox/1818529221"
                target="_blank"
                title="Apple Music"
            >
                <FontAwesomeIcon icon={faApple} className="hover:scale-125 transition duration-300 hover:text-[#E23C4A]" size="xl"/>
            </a>
            <a
                href="https://youtu.be/Icd4EiVaHZk?si=d_4XumaVJzDhtBX3"
                target="_blank"
                title="Youtube"
            >
                <FontAwesomeIcon icon={faYoutube} className="hover:scale-125 transition duration-300 hover:text-[#E23C4A]" size="xl"/>
            </a>
            <a
                href="https://link.deezer.com/s/30lsWP1QmNZ6MiOYloo4I"
                target="_blank"
                title="Deezer"
            >
                <FontAwesomeIcon icon={faDeezer} className="hover:scale-125 transition duration-300 hover:text-[#E23C4A]" size="xl"/>
            </a>
            {/* <a
                href="https://soundcloud.com/arcila-records-494898887/nico-rami-rez-shorty-zarek-col?si=b5672015ea2f4eb680d8bde766cd72b0&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                target="_blank"
                title="SoundCloud"
            >
                <FontAwesomeIcon icon={faSoundcloud} className="hover:scale-125 transition duration-300 hover:text-[#FF0D10]" size="xl"/>
            </a> */}
        </div>
    );
}

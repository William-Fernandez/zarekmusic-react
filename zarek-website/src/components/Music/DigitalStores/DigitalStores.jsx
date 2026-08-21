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
        <nav
            aria-label="Streaming and download platforms"
            className="z-20 flex justify-center items-center gap-3 mx-2 text-zinc-300"
        >
            <a
                href="https://www.beatport.com/es/release/groove-is-the-sauce/7019745"
                target="_blank"
                aria-label="Buy on Beatport"
                title="Beatport"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon
                    icon={faCartShopping}
                    className="hover:scale-125 transition duration-300 hover:text-[#FC90AD]"
                    size="xl"
                />
            </a>
            <a
                href="https://open.spotify.com/intl-es/track/3BxbLPmWu1UjzoivqbQuPm?si=4d0d7815bfed4d2d"
                target="_blank"
                aria-label="Listen on Spotify"
                title="Spotify"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon
                    icon={faSpotify}
                    className="hover:scale-125 transition duration-300 hover:text-[#FC90AD]"
                    size="xl"
                />
            </a>
            <a
                href="https://music.apple.com/us/song/groove-is-the-sauce/6776398189"
                target="_blank"
                aria-label="Listen on Apple Music"
                rel="noopener noreferrer"
                title="Apple Music"
            >
                <FontAwesomeIcon
                    icon={faApple}
                    className="hover:scale-125 transition duration-300 hover:text-[#FC90AD]"
                    size="xl"
                />
            </a>
            <a
                href="https://youtu.be/CSmElGPKzHQ?si=81qdSm-6wh01Q393"
                target="_blank"
                aria-label="Watch on YouTube"
                rel="noopener noreferrer"
                title="Youtube"
            >
                <FontAwesomeIcon
                    icon={faYoutube}
                    className="hover:scale-125 transition duration-300 hover:text-[#FC90AD]"
                    size="xl"
                />
            </a>
            <a
                href="https://link.deezer.com/s/33JeDznRs4KuV9tvfvApR"
                target="_blank"
                aria-label="Listen on Deezer"
                rel="noopener noreferrer"
                title="Deezer"
            >
                <FontAwesomeIcon
                    icon={faDeezer}
                    className="hover:scale-125 transition duration-300 hover:text-[#FC90AD]"
                    size="xl"
                />
            </a>
            <a
                href="https://soundcloud.com/zarek-dj/groove-is-the-sauce"
                target="_blank"
                aria-label="Listen on SoundCloud"
                rel="noopener noreferrer"
                title="SoundCloud"
            >
                <FontAwesomeIcon
                    icon={faSoundcloud}
                    className="hover:scale-125 transition duration-300 hover:text-[#FC90AD]"
                    size="xl"
                />
            </a>
        </nav>
    );
}

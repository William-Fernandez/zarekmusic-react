import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSquareXTwitter,
    faFacebookF,
    faSpotify,
    faApple,
    faInstagram,
    faYoutube,
    faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialIcons() {
    return (
        <nav
            aria-label="Social media links"
            className="flex justify-center items-center h-8 gap-3 text-slate-300"
        >
            <a
                href="https://www.facebook.com/ZarekOfc"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon
                    icon={faFacebookF}
                    className="hover:scale-150 transition duration-300 hover:text-cyan-700"
                    size="lg"
                ></FontAwesomeIcon>
            </a>
            <a
                href="https://www.instagram.com/zarek.col/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon
                    icon={faInstagram}
                    className="hover:scale-150 transition duration-300 hover:text-cyan-700"
                    size="lg"
                ></FontAwesomeIcon>
            </a>
            <a
                href="https://open.spotify.com/intl-es/artist/6cgXehGf1YZxl0Tv4ZOZXD?si=NShtH_hSQKOuFkXPLjwfUw"
                aria-label="Spotify"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon
                    icon={faSpotify}
                    className="hover:scale-150 transition duration-300 hover:text-cyan-700"
                    size="lg"
                ></FontAwesomeIcon>
            </a>
            <a
                href="https://music.apple.com/us/artist/zarek-col/1553494420"
                aria-label="Apple Music"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon
                    icon={faApple}
                    className="hover:scale-150 transition duration-300 hover:text-cyan-700"
                    size="lg"
                ></FontAwesomeIcon>
            </a>
            <a
                href="https://www.youtube.com/@zarekcol7916"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon
                    icon={faYoutube}
                    className="hover:scale-150 transition duration-300 hover:text-cyan-700"
                    size="lg"
                ></FontAwesomeIcon>
            </a>
            <a
                href="https://soundcloud.com/zarek-dj"
                aria-label="SoundCloud"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon
                    icon={faSoundcloud}
                    className="hover:scale-150 transition duration-300 hover:text-cyan-700"
                    size="lg"
                ></FontAwesomeIcon>
            </a>
            <a
                href="https://www.twitter.com/Zarek_Dj/"
                aria-label="X (formerly Twitter)"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon
                    icon={faSquareXTwitter}
                    className="hover:scale-150 transition duration-300 hover:text-cyan-700"
                    size="lg"
                ></FontAwesomeIcon>
            </a>
        </nav>
    );
}

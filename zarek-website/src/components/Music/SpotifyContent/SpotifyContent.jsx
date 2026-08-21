import ImageComponent from "../../ImageComponent/ImageComponent";
import zarekPhoto from "../../../assets/img/zarek-studio-dg.webp";

export default function SpotifyContent() {
    return (
        <section
            aria-labelledby="spotify-heading"
            className="flex max-w-full h-dvh bg-music-page-color"
        >
            <h2 id="spotify-heading" className="sr-only">
                Zarek on Spotify
            </h2>
            <div className="flex justify-center items-center w-full md:w-3/5 min-h-full overflow-hidden">
                <iframe
                    title="Zarek on Spotify"
                    src="https://open.spotify.com/embed/artist/6cgXehGf1YZxl0Tv4ZOZXD?utm_source=generator&theme=0"
                    width="80%"
                    height="420"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    style={{ borderRadius: "12px" }}
                ></iframe>
            </div>
            <div className="hidden md:block w-2/5 min-h-full overflow-hidden">
                <ImageComponent
                    src={zarekPhoto}
                    alt="Zarek"
                    className="object-cover object-center w-full h-full"
                />
            </div>
        </section>
    );
}

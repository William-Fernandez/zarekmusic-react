import React from "react";
import Navbar from "../../components/Navbar/NavbarPages.jsx";
import Layout from "../../components/Layout/Layout.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import ImageComponent from "../../components/ImageComponent/ImageComponent.jsx";
import musicBack from "../../assets/img/banner-web.webp";
import ReleaseContent from "../../components/Music/ReleaseContent/ReleaseContent.jsx";
import SpotifyContent from "../../components/Music/SpotifyContent/SpotifyContent.jsx";
import Meta from "../../components/MetaTag/Meta.jsx";

export default function Music() {
    const currentUrl = window.location.href;
    return (
        <Layout>
            <Meta
                title="Music | Zarek (COL)"
                description="Experience the music of Zarek on Spotify. Stream now and follow him for updates on new releases!"
                keywords="zarek,zarek
                dj,zarek (col),lady shake,zarek beatport,zarek music,zarek
                spotify"
                author="William Fernandez"
                ogUrl={currentUrl}
                ogTitle="Music | Zarek (COL)"
                ogDescription="Experience the music of Zarek on Spotify. Stream now and follow him for updates on new releases!"
                ogImage="/assets/img/Catalogo/voyageCover.webp"
            />
            <div className="min-h-screen relative ">
                <ImageComponent
                    src={musicBack}
                    alt="Music Background"
                    className="hidden md:block -z-40 position absolute top-0 object-cover w-screen"
                />
                <div className="-z-20 absolute top-0 left-0 w-full h-full bg-[#D02E0311] md:bg-[#D02E0311]"></div>
                <Navbar />
                <ReleaseContent />
                <SpotifyContent />
                <Footer />
            </div>
        </Layout>
    );
}

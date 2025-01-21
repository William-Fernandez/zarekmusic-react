import React from "react";
import Layout from "../../components/Layout/Layout.jsx";
import BackgroundVideo from "../../components/VideoBack/VideoBack.jsx";
import SoundCloudComp from "../../components/LiveSet/SoundCloudComp.jsx";
import Navbar from "../../components/Navbar/NavbarPages.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Meta from "../../components/MetaTag/Meta.jsx";

export default function LiveSets() {
    const currentUrl = window.location.href;
    return (
        <Layout>
            <Meta
                title="Live Sets | Zarek (COL)"
                description="Tune in to Zarek's latest live sets and DJ mixes. Immerse yourself in the energy of his performances."
                keywords="zarek,zarek
                dj,zarek (col),lady shake,zarek beatport,zarek music,zarek live"
                author="William Fernandez"
                ogUrl={currentUrl}
                ogTitle="Live Sets | Zarek (COL)"
                ogDescription="Tune in to Zarek's latest live sets and DJ mixes. Immerse yourself in the energy of his performances."
                ogImage="/assets/img/zarek-live.jpg"
            />
            <Navbar />
            <BackgroundVideo />
            <SoundCloudComp />
            <Footer />
        </Layout>
    );
}

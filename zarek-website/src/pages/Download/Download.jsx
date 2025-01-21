import React from "react";
import Layout from "../../components/Layout/Layout";
import Navbar from "../../components/Navbar/NavbarPages.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";
import BandcampReleases from "../../components/DownloadCard/BandcampReleases.jsx";
import BeatportReleases from "../../components/DownloadCard/BeatportReleases.jsx";
import Meta from "../../components/MetaTag/Meta.jsx";

export default function Downloads() {
    const currentUrl = window.location.href;
    return (
        <Layout background="black">
            <Meta
                            title="Download | Zarek (COL)"
                            description="Download Zarek's latest music releases, including tracks, EPs, and more. Get your copy now!"
                            keywords="zarek,zarek
                            dj,zarek (col),lady shake,zarek beatport,zarek music,zarek
                            spotify, zarek bandcamp"
                            author="William Fernandez"
                            ogUrl={currentUrl}
                            ogTitle="Download | Zarek (COL)"
                            ogDescription="Download Zarek's latest music releases, including tracks, EPs, and more. Get your copy now!"
                            ogImage="/assets/img/Catalogo/nuloud-cover-art.jpg"
                        />
            <Navbar />
            <div className="mt-5 pt-16 px-5 md:px-0">
                <PageTitle title="BANDCAMP RELEASES" textPosition="center" />
            </div>
            <BandcampReleases />
            <div className="mt-5">
                <PageTitle title="BEATPORT RELEASES" textPosition="center" />
            </div>
            <BeatportReleases />
            <Footer />
        </Layout>
    );
}

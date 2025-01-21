import React from "react";
import Navbar from "../../components/Navbar/NavbarPages.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import BioContent from "../../components/Biography/BioContent/BioContent.jsx";
import Layout from "../../components/Layout/Layout.jsx";
import Meta from "../../components/MetaTag/Meta.jsx";

export default function Bio() {
    const currentUrl = window.location.href;
    return (
        <Layout background='black'>
            <Meta
                title="Bio | Zarek (COL)"
                description="Colombian-born, UK-based DJ and producer Zarek brings a unique Latin-infused sound to Tech House, House, Techno, and Afro House. Learn more about his musical journey and achievements."
                keywords="zarek,zarek
                dj,zarek (col),lady shake,zarek bio,zarek music,zarek
                biography"
                author="William Fernandez"
                ogUrl={currentUrl}
                ogTitle="Bio | Zarek (COL)"
                ogDescription="Colombian-born, UK-based DJ and producer Zarek brings a unique Latin-infused sound to Tech House, House, Techno, and Afro House. Learn more about his musical journey and achievements."
                ogImage="../../assets/img/Catalogo/nuloud-cover-art.jpg"
            />
            <div className="bg-black min-h-screen relative font-monserrat">
                <Navbar />
                <BioContent />
                <Footer />
            </div>
        </Layout>
    );
}

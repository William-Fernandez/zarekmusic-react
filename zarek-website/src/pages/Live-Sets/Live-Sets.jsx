import Layout from "../../components/Layout/Layout.jsx";
import BackgroundVideo from "../../components/VideoBack/VideoBack.jsx";
import SoundCloudComp from "../../components/LiveSet/SoundCloudComp.jsx";
import Navbar from "../../components/Navbar/NavbarPages.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Meta from "../../components/MetaTag/Meta.jsx";
import ogImage from "../../assets/img/zarek-live.jpg";

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
                ogImage={ogImage}
            />
            <Navbar />
            <div aria-hidden="true">
                <BackgroundVideo />
            </div>
            <main className="relative z-10 bg-black/0">
                <SoundCloudComp />
            </main>
            <Footer />
        </Layout>
    );
}

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar.jsx";
import logo from "../../assets/img/logo.webp";
import Layout from "../../components/Layout/Layout.jsx";
import SocialIcons from "../../components/SocialIcons/SocialIcons.jsx";
import BackgroundVideo from "../../components/VideoBack/VideoBack.jsx";
import Meta from "../../components/MetaTag/Meta.jsx";

const logoVariants = {
    hidden: {
        opacity: 0,
        scale: 5,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 2.5,
            ease: [0.43, 0.13, 0.23, 0.96],
            type: "spring",
            stiffness: 50,
            damping: 10,
        },
    },
};

export default function HomePage() {
    return (
        <Layout>
            <Meta
                title="Home | Zarek (COL)"
                description="Welcome to Zarek's
                official website. New ep GANG is out now."
                keywords="zarek,zarek
                dj,zarek (col),lady shake,zarek beatport,zarek music,zarek
                spotify"
                author="William Fernandez"
                ogUrl="https://zarekmusic.com"
                ogTitle="Home | Zarek (COL)"
                ogDescription="Welcome to Zarek's official website. New ep GANG
                is out now."
                ogImage="/assets/img/Catalogo/nuloud-cover-art.webp"
            />
            <BackgroundVideo />
            <section className="h-screen w-screen flex justify-center flex-col items-center overflow-hidden">
                <div className="container mx-auto px-4 pt-10 md:pt-20 flex flex-col items-center mb-14">
                    <motion.img
                        src={logo}
                        alt="Zarek's Logo"
                        className="max-w-80 md:max-w-96 mb-8 md:mb-16"
                        variants={logoVariants}
                        initial="hidden"
                        animate="visible"
                    />
                    <div className="w-full md:w-auto">
                        <Navbar />
                    </div>
                </div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                    <SocialIcons />
                </div>
            </section>
        </Layout>
    );
}

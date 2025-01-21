import React from "react";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";
import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import Navbar from "../../components/Navbar/NavbarPages.jsx";
import PromoCard from "../../components/ContactForm/PromoCards.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import backimgMusic from "../../assets/img/zarek-studio-rosado.webp";
import Meta from "../../components/MetaTag/Meta.jsx";

export default function Contact() {
    const currentUrl = window.location.href;
    const cardData = [
        {
            title: "INFO",
            link: "mailto:zarekdj@gmail.com",
            displayText: "zarekdj@gmail.com",
            iconName: "envelope",
        },
        {
            title: "PROMOS",
            link: "https://tstack.app/zarekcol",
            displayText: "Zarek's Inbox",
            iconName: "musicNote",
        },
    ];

    return (
        <Layout>
            <Meta
                title="Contact | Zarek (COL)"
                description="For press, management, or booking inquiries for Zarek, visit his contact page. Find the necessary information to connect with his team."
                keywords="zarek,zarek
                            dj,zarek (col),lady shake,zarek booking,zarek contact, zarek fee"
                author="William Fernandez"
                ogUrl={currentUrl}
                ogTitle="Contact | Zarek (COL)"
                ogDescription="For press, management, or booking inquiries for Zarek, visit his contact page. Find the necessary information to connect with his team."
                ogImage="/assets/img/zarek-live.webp"
            />
            <Navbar />

            <main className="flex-grow relative bg-[#BECBD4] pt-20 lg:pt-36">
                <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2 overflow-hidden">
                    <img
                        src={backimgMusic}
                        alt="Zarek background"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl md:px-6 pb-12">
                    <div className="drop-shadow-lg">
                        <PageTitle title="CONTACT" textPosition="center" />
                        <div className="flex flex-col xs:flex-row justify-center items-center mt-10 mb-5">
                            {cardData.map((card, index) => (
                                <PromoCard key={index} {...card} />
                            ))}
                        </div>
                        <div className="flex flex-col justify-center items-center mb-20">
                            <div className="text-lg md:text-2xl w-auto h-24 rounded-lg text-black/70 flex justify-center items-center px-10 drop-shadow-lg">
                                <h3 className="text-center">
                                    For bookings, interviews, press or
                                    collaborations, fill in the following form:
                                </h3>
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </Layout>
    );
}

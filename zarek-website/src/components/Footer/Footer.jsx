import React from "react";
import SocialIcons from "../SocialIcons/SocialIcons.jsx";
import logoWhite from "../../assets/img/logo-blanco.PNG";

function Footer() {
    return (
        <footer className=" z-40 flex flex-col justify-center items-center border-t-2 bg-black text-gray-500 text-center w-full pt-8 pb-8 px-1">
            <img src={logoWhite} alt="Zarek White Logo" className="max-w-32"/>
            <p className="text-xs font-extralight text-slate-200 my-2">
                Designed by <span className="font-bold text-white">William Fernández</span>{' '} © Copyright 2025 | All rights
                reserved
            </p>
            <SocialIcons />
        </footer>
    );
}

export default Footer;

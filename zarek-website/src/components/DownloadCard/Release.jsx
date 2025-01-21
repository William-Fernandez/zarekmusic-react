import React from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DownloadCards({
    image,
    title,
    artist,
    label,
    buyLink,
}) {
    const cardStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className="backdrop-blur-lg rounded-xl w-72 lg:w-80 h-[390px] lg:h-[450px] mx-7 my-8 p-4 flex flex-col justify-between items-center transition duration-300 hover:scale-105 overflow-hidden relative outline outline-white/10 outline-1" style={cardStyle}>
            <div className="absolute inset-0 bg-black/85 -z-10"></div> {/* Overlay */}
            <div className="w-full h-3/5 lg:h-2/3 flex justify-center items-center lg:rounded-xl overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="object-contain w-full h-full lg:object-cover"
                />
            </div>
            <div className="text-white text-center mt-2">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm font mt-2"><span className="font-bold">Artista:</span> {artist}</p>
                <p className="text-sm"><span className="font-bold">Label:</span> {label}</p>
            </div>
            <a
                href={buyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-cyan-600 text-cyan-600 hover:text-white font-bold py-2 px-4 rounded mt-4 w-11/12 text-center transition duration-300"
            ><FontAwesomeIcon icon={faCartShopping} className="mr-1"/>
                Comprar
            </a>
        </div>
    );
}

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMusic } from "@fortawesome/free-solid-svg-icons";

function Card({ title, link, displayText, iconName }) {
    const getIcon = () => {
        switch (iconName) {
            case "envelope":
                return faEnvelope;
            case "musicNote":
                return faMusic;
            default:
                return null;
        }
    };

    const icon = getIcon();

    return (
        <div className="bg-gray-600/80 rounded-lg px-5 py-9 w-56 xs:w-72 shadow-md text-white m-2 text-center">
            <div className="flex items-center justify-center mb-2">
                {icon && (
                    <FontAwesomeIcon
                        icon={icon}
                        className="text-2xl mr-2 text-[#4498B4]"
                    />
                )}
                <h2 className="text-lg m-0 font-bold">{title}</h2> {/* Título */}
            </div>
            <a
                href={link}
                className="text-white no-underline hover:underline break-words text-lg"
                target="_blank"
                rel="noopener noreferrer"
            >
                {displayText || link}
            </a>
        </div>
    );
}

export default Card;

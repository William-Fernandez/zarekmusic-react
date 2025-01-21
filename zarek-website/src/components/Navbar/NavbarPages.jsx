import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="z-40 bg-black bg-opacity-95 min-w-full h-16 border-b border-white border-solid fixed w-full">
            <nav className="flex justify-between items-center h-full">
                <NavLink
                    to="/"
                    className="hover:opacity-70 transition duration-300 ease-in-out z-40"
                >
                    <img
                        src={Logo}
                        alt="Zarek's Logo"
                        className="max-w-40 px-9 ml-3"
                    />
                </NavLink>

                {/* Menú para pantallas grandes */}
                <ul className="hidden md:flex text-white uppercase font-bold text-xs tracking-widest">
                    <li className="py-2 px-3 group relative inline-block">
                        <NavLink
                            to="/bio"
                            className={({ isActive }) =>
                                `px-3 py-4 hover:drop-shadow-[2px_4px_1px_rgba(204,202,226,0.4)] transition duration-200 ease-in-out ${
                                    isActive
                                        ? "text-cyan-600 underline underline-offset-[7px] decoration-4 decoration-cyan-600/70"
                                        : ""
                                }`
                            }
                        >
                            Bio
                        </NavLink>
                        <span className="-z-10 absolute left-[0.7rem] bottom-[1px] w-4/6 h-[4px] bg-cyan-600/70 rounded-[9999px_3px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                    </li>
                    <li className="py-2 px-3 group relative inline-block">
                        <NavLink
                            to="/music"
                            className={({ isActive }) =>
                                `px-3 py-4 hover:drop-shadow-[2px_4px_1px_rgba(204,202,226,0.4)] transition duration-200 ease-in-out ${
                                    isActive
                                        ? "text-cyan-600 underline underline-offset-[7px] decoration-4 decoration-cyan-600/70"
                                        : ""
                                }`
                            }
                        >
                            Music
                        </NavLink>
                        <span className="-z-10 absolute left-[.9rem] bottom-[1px] w-4/6 h-[4px] bg-cyan-600/70 rounded-[9999px_3px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                    </li>
                    <li className="py-2 px-3 group relative inline-block">
                        <NavLink
                            to="/live-sets"
                            className={({ isActive }) =>
                                `px-3 py-4 hover:drop-shadow-[2px_4px_1px_rgba(204,202,226,0.4)] transition duration-200 ease-in-out ${
                                    isActive
                                        ? "text-cyan-600 underline underline-offset-[7px] decoration-4 decoration-cyan-600/70"
                                        : ""
                                }`
                            }
                        >
                            Live Sets
                        </NavLink>
                        <span className="-z-10 absolute left-[1.2rem] bottom-[1px] w-4/6 h-[4px] bg-cyan-600/70 rounded-[9999px_3px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                    </li>
                    <li className="py-2 px-3 group relative inline-block">
                        <NavLink
                            to="/download"
                            className={({ isActive }) =>
                                `px-3 py-4 hover:drop-shadow-[2px_4px_1px_rgba(204,202,226,0.4)] transition duration-200 ease-in-out ${
                                    isActive
                                        ? "text-cyan-600 underline underline-offset-[7px] decoration-4 decoration-cyan-600/70"
                                        : ""
                                }`
                            }
                        >
                            Download
                        </NavLink>
                        <span className="-z-10 absolute left-[1.35rem] bottom-[1px] w-4/6 h-[4px] bg-cyan-600/70 rounded-[9999px_3px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                    </li>
                    <li className="py-2 px-3 group relative inline-block">
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `px-3 py-4 hover:drop-shadow-[2px_4px_1px_rgba(204,202,226,0.4)] transition duration-200 ease-in-out ${
                                    isActive
                                        ? "text-cyan-600 underline underline-offset-[7px] decoration-4 decoration-cyan-600/70"
                                        : ""
                                }`
                            }
                        >
                            Contact
                        </NavLink>
                        <span className="-z-10 absolute left-[1.2rem] bottom-[1px] w-4/6 h-[4px] bg-cyan-600/70 rounded-[9999px_3px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                    </li>
                </ul>

                {/* Botón de hamburguesa */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white text-3xl z-50 mr-3"
                >
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                </button>
            </nav>

            {/* Menú desplegable */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-black p-4 flex flex-col items-center">
                    <NavLink
                        to="/bio"
                        className="py-2 text-white uppercase font-bold text-xs tracking-widest hover:text-gray-300"
                        onClick={toggleMenu}
                    >
                        Bio
                    </NavLink>
                    <NavLink
                        to="/music"
                        className="py-2 text-white uppercase font-bold text-xs tracking-widest hover:text-gray-300"
                        onClick={toggleMenu}
                    >
                        Music
                    </NavLink>
                    <NavLink
                        to="/live-sets"
                        className="py-2 text-white uppercase font-bold text-xs tracking-widest hover:text-gray-300"
                        onClick={toggleMenu}
                    >
                        Live Sets
                    </NavLink>
                    <NavLink
                        to="/download"
                        className="py-2 text-white uppercase font-bold text-xs tracking-widest hover:text-gray-300"
                        onClick={toggleMenu}
                    >
                        Download
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="py-2 text-white uppercase font-bold text-xs tracking-widest hover:text-gray-300"
                        onClick={toggleMenu}
                    >
                        Contact
                    </NavLink>
                </div>
            )}
        </header>
    );
}

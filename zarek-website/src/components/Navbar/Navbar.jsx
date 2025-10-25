import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="max-w-full h-auto py-4">
            <nav className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 text-white uppercase font-bold tracking-wider"> {/* Usando gap-4 md:gap-12 */}
                    <Link
                        to="/bio"
                        className="inline-flex items-center justify-center py-2 px-4 hover:text-gray-300 transition duration-300 ease-in-out box-border"
                    >
                        Bio
                    </Link>
                    <Link
                        to="/music"
                        className="inline-flex items-center justify-center py-2 px-4 hover:text-gray-300 transition duration-300 ease-in-out box-border"
                    >
                        Music
                    </Link>
                    <Link
                        to="/live-sets"
                        className="inline-flex items-center justify-center py-2 px-4 hover:text-gray-300 transition duration-300 ease-in-out box-border"
                    >
                        Live Sets
                    </Link>
                    <Link
                        to="/download"
                        className="inline-flex items-center justify-center py-2 px-4 hover:text-gray-300 transition duration-300 ease-in-out box-border"
                    >
                        Download
                    </Link>
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center py-2 px-4 hover:text-gray-300 transition duration-300 ease-in-out box-border"
                    >
                        Contact
                    </Link>
                </div>
            </nav>
        </header>
    );
}

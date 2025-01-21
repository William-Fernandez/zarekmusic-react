import React from "react";
import Release from "./Release.jsx";
import bandcampData from "../../data/bandcampData.js";

function Releases() {
    return (
        <div className="flex flex-wrap justify-center">
            {bandcampData.map((release) => (
                <Release key={release.id} {...release} />
            ))}
        </div>
    );
}

export default Releases;

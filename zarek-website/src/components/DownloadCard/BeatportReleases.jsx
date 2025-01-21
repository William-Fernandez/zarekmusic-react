import React from "react";
import Release from "./Release.jsx";
import beatportData from "../../data/bearportData.json";

function BeatportReleases() {
    return (
        <div className="flex flex-wrap justify-center mb-10">
            {beatportData.map((release) => (
                <Release key={release.id} {...release} />
            ))}
        </div>
    );
}

export default BeatportReleases;

import React from "react";
import VideoBack from "../../assets/video/Party-Video.mp4";

function BackgroundVideo() {
    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]">
            {" "}
            <video
                autoPlay
                loop
                muted
                className="min-w-full min-h-full absolute object-cover"
            >
                <source src={VideoBack} type="video/mp4" />{" "}
                Tu navegador no soporta videos.
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-black/85"></div>{" "}
        </div>
    );
}

export default BackgroundVideo;

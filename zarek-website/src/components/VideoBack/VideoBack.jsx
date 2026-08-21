import { useEffect, useRef } from "react";
import videoMp4 from "../../assets/video/Party-Video.mp4";
import videoWebm from "../../assets/video/Party-Video.webm";

function BackgroundVideo() {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        if (!video) {
            return undefined;
        }

        video.muted = true;
        video.play().catch(() => undefined);

        return undefined;
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src={videoMp4} type="video/mp4" />
                <source src={videoWebm} type="video/webm" />
            </video>
            <div className="absolute inset-0 bg-black/85"></div>
        </div>
    );
}

export default BackgroundVideo;

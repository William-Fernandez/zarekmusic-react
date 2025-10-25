import React from "react";

export default function SoundCloudComp() {
    const soundcloudUrl =
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1374578107&color=%23135e76&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true";

    return (
        <div className="flex justify-center items-center w-screen h-dvh pt-16 my-16">
            <iframe
                title="SoundCloud Player"
                width="100%"
                height="450"
                allow="autoplay"
                src={soundcloudUrl}
                className="w-11/12  md:w-3/4 lg:w-1/2"
            ></iframe>
        </div>
    );
}

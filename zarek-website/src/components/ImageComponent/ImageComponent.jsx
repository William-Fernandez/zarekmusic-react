import React from "react";

function ImageComponent({ src, alt, className }) {
    return <img src={src} alt={alt} className={className} />;
}

export default ImageComponent;

import PropTypes from "prop-types";

function ImageComponent({ src, alt, className }) {
    return <img src={src} alt={alt} className={className} />;
}

ImageComponent.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default ImageComponent;

import PropTypes from "prop-types";

function PageTitle({ title, textPosition, decoration, as: Heading = "h1" }) {
    return (
        <Heading
            className={`text-${textPosition} text-3xl md:text-4xl font-bold text-white tracking-widest underline decoration-[3px] underline-offset-[10px] ${decoration}`}
        >
            {title}
        </Heading>
    );
}

PageTitle.propTypes = {
    title: PropTypes.string.isRequired,
    textPosition: PropTypes.string.isRequired,
    decoration: PropTypes.string,
    as: PropTypes.elementType,
};

export default PageTitle;

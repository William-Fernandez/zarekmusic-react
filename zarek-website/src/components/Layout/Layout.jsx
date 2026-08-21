import PropTypes from "prop-types";

export default function Layout({ children, background }) {
    return (
        <div
            className={`overflow-x-hidden bg-${background} overflow-y-hidden relative flex flex-col`}
        >
            {children}
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    background: PropTypes.string,
};

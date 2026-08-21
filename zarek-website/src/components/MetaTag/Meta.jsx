import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

export default function Meta({
    title,
    description,
    author,
    ogUrl,
    ogTitle,
    ogDescription,
    ogImage,
}) {
    const canonicalUrl = new URL(ogUrl, "https://zarekmusic.com");
    canonicalUrl.protocol = "https:";
    canonicalUrl.hostname = "zarekmusic.com";
    canonicalUrl.search = "";
    canonicalUrl.hash = "";
    const absoluteOgImage = new URL(ogImage, canonicalUrl.origin).href;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="author" content={author} />
            <link rel="canonical" href={canonicalUrl.href} />

            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Zarek (COL)" />
            <meta property="og:locale" content="en_GB" />
            <meta property="og:url" content={canonicalUrl.href} />
            <meta property="og:title" content={ogTitle} />
            <meta property="og:description" content={ogDescription} />
            <meta property="og:image" content={absoluteOgImage} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={ogTitle} />
            <meta name="twitter:description" content={ogDescription} />
            <meta name="twitter:image" content={absoluteOgImage} />
        </Helmet>
    );
}

Meta.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.string,
    ogUrl: PropTypes.string.isRequired,
    ogTitle: PropTypes.string,
    ogDescription: PropTypes.string,
    ogImage: PropTypes.string.isRequired,
};

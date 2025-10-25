import React from "react";
import { Helmet } from "react-helmet";

export default function Meta({ title, description, keywords, author, ogUrl, ogTitle, ogDescription, ogImage }) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={ogUrl} />
            <meta property="og:title" content={ogTitle} />
            <meta property="og:description" content={ogDescription} />
            <meta property="og:image" content={ogImage} />
        </Helmet>
    )
}
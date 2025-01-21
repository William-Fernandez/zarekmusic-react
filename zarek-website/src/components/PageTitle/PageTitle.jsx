import React from "react";

function PageTitle({ title, textPosition }) {
    return (
        <h1 className={`text-${textPosition} text-3xl md:text-4xl font-bold text-white tracking-widest underline decoration-[3px] underline-offset-[10px] decoration-cyan-700`}>
            {title}
        </h1>
    );
}

export default PageTitle;

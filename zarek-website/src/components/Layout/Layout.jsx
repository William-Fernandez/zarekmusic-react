import React from "react";

export default function Layout({ children, background }) {
    return (
        <div className={`overflow-x-hidden bg-${background} overflow-y-hidden relative flex flex-col`}>
            {children}
        </div>
    )
}
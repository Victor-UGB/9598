import React from "react";

export default function Layout({children}: { children: React.ReactNode}){
    return(
        <div>
            <div>
                {children}
            </div>
        </div>
    )
}
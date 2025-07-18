import React from "react";

export default function Layout({children}: {children: React.ReactNode}){
    return(<div>
        <p>Este es layout de Profile</p>
        {children}
        </div>)
}
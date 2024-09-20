import React from "react";
import SocialMedia from "./SocialMedia";

export default function Introduction(){
    return(
        <div className="h-screen flex">
            <ul className=" list-inside  sm:text-sm lg:text-5xl text-center sm:center font-[family-name:var(--font-geist-mono)]  ">
                <li className="mb-2">
                    Welcome to my website!
                </li>
                <li>I'm Xavier Nishikawa.</li>
                <SocialMedia /> 
            </ul>
        </div>
        
    );
}


import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function SocialMedia(){
    return(
        <div className="flex flex-row align-center pt-5 lg:pt-10 gap-4">
            <a href="https://github.com/xavieryn" className="hover:-translate-y-1 "><FaGithub className="h-[3.5rem] w-[3.5rem]"/></a>
            <a href="https://www.linkedin.com/in/xavier-nishikawa/" className="hover:-translate-y-1"><FaLinkedin className="h-[3.5rem] w-[3.5rem]"/></a>
        </div>
        
    );
}

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function SocialMedia(){
    return(
        <div className="flex flex-row align-center pt-10">
            <a href="https://github.com/xavieryn" className="hover:-translate-y-1"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/xavier-nishikawa/" className="hover:-translate-y-1"><FaLinkedin/></a>
        </div>
        
    );
}

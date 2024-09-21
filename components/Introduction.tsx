import React from "react";
import SocialMedia from "./SocialMedia";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
let theme = "light"


export default function Introduction(){
    const { setTheme } = useTheme()

    return(
        <div className=" flex justify-center items-center flex-col h-screen">
            <ul className=" list-inside  sm:text-xl lg:text-4xl pt-20 lg:pr-20 sm:center font-[family-name:var(--font-geist-mono)]  ">
                <li className="mb-2 ">
                    Welcome to my website!
                </li>
                <li >I'm Xavier Nishikawa.</li>
            
            </ul>
            <Button variant="outline" size="icon" onClick={() => theme =="light" ? (setTheme("dark"), theme="dark"): (setTheme("light"), theme="light")}>
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <SocialMedia /> 
        </div>
        
    );
}


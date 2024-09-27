import React from "react";
import SocialMedia from "./SocialMedia";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { MdOutlineSportsFootball } from "react-icons/md";
import { FaGuitar } from "react-icons/fa6";
import { GiClothes } from "react-icons/gi";
import { FaLanguage } from "react-icons/fa";


import { Button } from "@/components/ui/button"
let theme = "light"

// I NEED Hobbies in the conrers of the introduction because I have white/black space. 
// HOBBIES: Lifting, Fashion, Music, Japanese 
// justify space between 
// another flex box justify space between 

export default function Introduction() {
    const { setTheme } = useTheme()

    return (
        <div className=" flex justify-center items-center flex-col h-screen ">
            <div className="flex justify-between w-full lg:pr-20 lg:pl-20 sm: pl-5 sm: pr-5 mt-12">
            <FaLanguage className="h-[4rem] w-[4rem]"/>
            <GiClothes className="h-[4rem] w-[4rem]" />
            </div>
            <div className="flex flex-col bg-hsl([40, 20%, 97%]) rounded-full dark:bg-[hsl(255,67%,5%)]  dark:border-white border-black border-4 w-3/5 h-3/5 lg:w-[500px] lg:h-[500px] justify-center items-center">
                <div className="text-center text-xl lg:text-4xl font-[family-name:var(--font-geist-mono)] lg:p-4">

                    <p className="mb-2 ">
                        Welcome to my website!
                    </p>
                    <p >I&apos;m Xavier Nishikawa.</p>

                </div>
                <Button className="mt-1" variant="outline" size="icon" onClick={() => theme == "light" ? (setTheme("dark"), theme = "dark") : (setTheme("light"), theme = "light")}>
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
                <SocialMedia />
            </div>

            <div className="flex justify-between w-full lg:pr-20 lg:pl-20 sm: pl-5 sm: pr-5">
                <FaGuitar className="h-[4rem] w-[4rem]"/>
                <MdOutlineSportsFootball className="h-[4rem] w-[4rem]" />
            </div>

        </div>

    );
}


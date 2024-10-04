import React, { useEffect, useState } from "react";
import SocialMedia from "./SocialMedia";
import Contents from "./Contents";
import { Sun} from "lucide-react";
import { useTheme } from "next-themes"
import { WiMoonFull } from "react-icons/wi";


export default function Introduction() {
    const { theme, setTheme } = useTheme();
    const [isRotated, setIsRotated] = useState(false);

    useEffect(() => {
        setTheme('light');
    }, []);

    const handleRotate = () => {
        setIsRotated(prev => !prev);

        if (theme == 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    };


    return (
        <div className="bg-center flex justify-center items-center flex-col h-screen w-full relative">
            <div className="flex flex-col bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-80 rounded-full
             dark:border-white border-black border-4 w-3/5 h-3/5 lg:w-[500px] lg:h-[500px] justify-center items-center z-10">

                {/* Buttons Container */}
                <div className={`z-5 absolute  lg:w-[500px] lg:h-[500px] w-3/5 h-3/5 transition-transform duration-500 dark:duration-500 ${isRotated ? 'rotate-180' : ''}`}>
                    {/* Sun Button */}
                    <button
                        onClick={handleRotate}
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-2 bg-white dark:bg-gray-800 shadow-lg"
                    >
                        <Sun className="h-[50px] w-[50px] text-yellow-500" />
                    </button>

                    {/* Moon Button */}
                    <button
                        onClick={handleRotate}
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded-full p-2 bg-white dark:bg-gray-800 shadow-lg"
                    >
                        <WiMoonFull className="h-[50px] w-[50px] text-[hsl(247,59,32)]" />
                    </button>
                </div>

                <div className="z-20 items-center justify-content flex-col flex lg:pt-5">
                    <div className="text-center text-xl lg:text-4xl lg:p-4 ">
                        <p className="mb-2">
                            Welcome to my website!
                        </p>
                        <p>I&apos;m Xavier Nishikawa.</p>
                    </div>
                    <SocialMedia />
                    <Contents/>
                </div>
            </div>
        </div>
    );
}
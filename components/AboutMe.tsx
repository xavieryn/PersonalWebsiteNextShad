import React from "react";

export default function AboutMe() {
    return (
        <div className="flex justify-center items-center lg:h-screen w-full mb-10" id="AboutMe"> {/* Full screen height and width, centered content */}
            <div className="text-center sm:text-sm lg:text-xl  ">
                <p className="mb-2">
                    Like every other programmer, I started with CS50. I quickly fell in love with the problem solving and the challenge. Over the next few years, I transitioned to Web Dev where I made a few React Apps, personal and for an internship.
                    <br/><br/>
                    I am now at Olin College of Engineering where I hope to further expand my knowledge of programming. Currently, I have strong interests in Machine Learning because it combines my love of programming, linear algebra and calculus. I am constantly learning, building new projects.
                    <br/><br/>
                    I am working on:
                    <br/><br/>
                    •	This personal website, refreshing my knowledge on React and Web Dev overall.
                    <br/>
                    •	A passion pursuit at Olin where I will use an Arduino and a small DC motor to unlock the dorm door without a key.
                    <br/>
                    •	A project using a smart plug API to track when the laundry machines are being used.
                    <br/>
                    •	A project that trains an AI model to better understand people with stutters.



                </p>
            </div>
        </div>
    );
}

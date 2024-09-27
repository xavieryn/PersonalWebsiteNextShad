import React from "react";

export default function AboutMe() {
    return (
        <div className="flex justify-center items-center lg:h-screen w-full mb-10"> {/* Full screen height and width, centered content */}
            <div className="text-center sm:text-sm lg:text-l font-[family-name:var(--font-geist-mono)] lg:p-14">
                <p className="mb-2">
                    Like every other programmer, I started with CS50. I quickly fell in love with the problem solving and the challenge. Over the next few years, I transitioned to Web Dev where I made a few React Apps, personal and for an internship.
                    <br/><br/>
                    I am now at Olin College of Engineering where I hope to further expand my knowledge of programming. Currently, I have strong interests in Machine Learning because it combines my love of programming and linear algebra and calculus. I am constantly learning, building new projects.
                    <br/><br/>
                    I am working on:
                    <br/><br/>
                    •	Andrew Ng’s ML Specialization Coursera course where I am learning the math behind the many functions used in Machine Learning.
                    <br/>
                    •	This personal website, refreshing my knowledge on React and Web Dev overall.
                    <br/>
                    •	A passion pursuit at my school where I will use an Arduino and a small DC motor to open our door without a key.

                </p>
            </div>
        </div>
    );
}

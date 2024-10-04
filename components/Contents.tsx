import React, { useState, useEffect } from 'react';

const Contents: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>();

    useEffect(() => {
        const sections = ['AboutMe', 'Experiences', 'Projects', 'Education'];
        
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop - window.innerHeight / 2 && scrollPosition < offsetTop + offsetHeight - window.innerHeight / 2) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Call once to set initial active section
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', handleScroll);
            }
        }
    }, []);

    return (
        <div className="flex flex-col space-y-1 pt-4 bg-border-3">
            {['AboutMe', 'Education', 'Experiences', 'Projects'].map((section) => (
                <a 
                    key={section}
                    href={`#${section}`} 
                    className={`
                        group
                        relative 
                        flex 
                        items-center
                        transition-all 
                        duration-200 
                        ease-in-out
                        lg: ${activeSection === section ?'dark:text-white light:text-black' : 'text-gray-400'}
                    `}
                >
                    <span className={`
                        absolute 
                        left-0 
                        h-0.5 
                        bg-[hsl(247,59,32)] 
                        transition-all 
                        duration-300 
                        ease-in-out
                        lg: ${activeSection === section ? 'w-16' : 'w-6'}
                    `}></span>
                    <span className={`
                        transition-all 
                        duration-300 
                        ease-in-out
                        lg: ${activeSection === section ? 'ml-20' : 'ml-8'}
                    `}>
                        {section}
                    </span>
                </a>
            ))}
        </div>
    );
};

export default Contents;
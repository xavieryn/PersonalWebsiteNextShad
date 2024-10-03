import React, { useState, useEffect } from 'react';

const Contents: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const sections = ['AboutMe', 'Experiences', 'Projects', 'Education'];

        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once to set initial active section

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        console.log('Active section changed to:', activeSection);
    }, [activeSection]);

    return (
        <div className="flex">
            <div className="grid justify-items-start pt-3">
                {['AboutMe', 'Education', 'Experiences', 'Projects'].map((section) => (
                    <a 
                        key={section}
                        href={`#${section}`} 
                        className={`block lg:${activeSection === section ? 'font-bold text-lg' : ''}`}
                    >
                        {section}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Contents;
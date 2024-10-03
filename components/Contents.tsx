import React, { useState, useEffect, useRef } from 'react';

const Contents: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('');
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    useEffect(() => {
        console.log('Effect running. Active section:', activeSection);
        console.log('Section refs:', sectionRefs.current);

        const observerOptions: IntersectionObserverInit = {
            root: null,
            rootMargin: '-20% 0px -20% 0px',  // Adjust this as needed
            threshold: 0,
        };

        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                console.log(`Entry for ${entry.target.id}:`, entry.isIntersecting);
                if (entry.isIntersecting && entry.target.id) {
                    console.log(`Setting active section to: ${entry.target.id}`);
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        Object.values(sectionRefs.current).forEach((ref) => {
            if (ref) {
                console.log(`Observing element with id: ${ref.id}`);
                observer.observe(ref);
            }
        });

        return () => observer.disconnect();
    }, []);

    // This effect will log whenever activeSection changes
    useEffect(() => {
        console.log('Active section changed to:', activeSection);
    }, [activeSection]);

    const setRef = (id: string) => (el: HTMLElement | null) => {
        console.log(`Setting ref for ${id}:`, el);
        sectionRefs.current[id] = el;
    };

    return (
        <div className="flex">
            <div className="grid justify-items-start pt-3">
                {['AboutMe', 'Experiences', 'Projects', 'Education'].map((section) => (
                    <a 
                        key={section}
                        href={`#${section}`} 
                        ref={setRef(section)} 
                        className={`block ${activeSection === section ? 'font-bold text-lg' : ''}`}
                    >
                        {section}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Contents;

import { useEffect, useState } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition > 100) {
                setIsVisible(true);
            } else if (scrollPosition <= 50) {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Kembali ke atas"
            tabIndex={isVisible ? 0 : -1}
            aria-hidden={!isVisible}
            className={`
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        flex items-center justify-center
        bg-blue-600 hover:bg-blue-700 
        text-white text-2xl font-bold
        shadow-lg
        transition-all duration-300 ease-in-out
        ${isVisible
                    ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 scale-75 translate-y-3 pointer-events-none'
                }
      `}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M5 15l7-7 7 7" />
            </svg>
        </button>
    );
};

export default ScrollToTop;

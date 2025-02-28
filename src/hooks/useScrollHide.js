import { useEffect, useRef, useState, useCallback } from "react";

const useScrollHide = () => {
    const [ticking, setTicking] = useState(false);
    const [isNavClicked, setIsNavClicked] = useState(false);
    const lastScrollTop = useRef(0);
    const spaceAboveHeader = 0.05 * window.innerHeight;

    const handleNavClick = () => setIsNavClicked(true);

    const handleScroll = useCallback(() => {
        const element = document.querySelector(".header");

        if (!isNavClicked && !ticking && window.innerWidth > 1100) {
            requestAnimationFrame(() => {
                let scrollTop = window.scrollY || document.documentElement.scrollTop;
                if (lastScrollTop.current < scrollTop) {
                    element.style.transform = `translateY(-${element.offsetHeight + spaceAboveHeader}px) translateX(-50%)`;
                } else {
                    element.style.transform = 'translateY(0) translateX(-50%)';
                }
                lastScrollTop.current = scrollTop;
                setTicking(false);
            });
            setTicking(true);
        }
    }, [ticking, isNavClicked, spaceAboveHeader]);

    useEffect(() => {
        const scrollEndTimeout = setTimeout(() => {
            if (isNavClicked) {
                setIsNavClicked(false);
            }
        }, 800);

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(scrollEndTimeout);
        };
    }, [handleScroll, isNavClicked]);

    return { handleNavClick };
};

export default useScrollHide;
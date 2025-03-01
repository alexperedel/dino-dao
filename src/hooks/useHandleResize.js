import { useEffect } from "react";

const useHandleResize = () => {

    const handleResize = ( {isOpenState} ) => {
        const header = document.querySelector(".header");
        const mobileMenu = document.querySelector(".mobile-menu");
        if (header) {
            if (window.innerWidth < 1100) {
                header.style.transform = 'translateY(0) translateX(-50%)';
            }
        }

        if (!isOpenState) {
            mobileMenu.style.top = `${header.offsetHeight - header.offsetHeight * 0.02}px`;
        }
    };

    useEffect(() => {

        window.addEventListener("resize", handleResize);
        window.addEventListener("orientationchange", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("orientationchange", handleResize);
        };
    }, []);
};

export default useHandleResize;
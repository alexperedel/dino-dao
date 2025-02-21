import React, {useState, useEffect, useRef, useCallback } from 'react';
import logo from '../images/logo-dao.png';
import logoX from '../images/logo-x-white.png';
import logoDiscord from '../images/logo-discord-white.png';


const Header = () => {

    const [ticking, setTicking] = useState(false);
    let lastScrollTop = useRef(0);
    const spaceAboveHeader = 0.05 * window.innerHeight;

    const handleScroll = useCallback(() => {
        if (!ticking) {
            const element = document.querySelector(".header");
            requestAnimationFrame(() => {
                let scrollTop = window.scrollY || document.documentElement.scrollTop;

                if (lastScrollTop.current < scrollTop) {
                    console.log(element);
                    console.log(element.offsetHeight + spaceAboveHeader);
                    element.style.transform = `translateY(-${element.offsetHeight + spaceAboveHeader}px) translateX(-50%)`;
                } else {
                    element.style.transform = 'translateY(0) translateX(-50%)';
                }

                lastScrollTop.current = scrollTop;
                setTicking(false);
        })}

        setTicking(true);
    }, [ticking, spaceAboveHeader]);


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll])


    return (
        <header className="header">
            <img src={logo} alt="logo"/>
            <nav className="top-nav">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#roadmap">Roadmap</a>
                <a href="#community">Community</a>
            </nav>

            <div className="social-icons">
                <button className="icon-button" onClick={handleScroll}>
                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                        <img className="discord-logo" src={logoDiscord} alt="discord.com Logo"/>
                    </a>
                </button>

                <button className="icon-button" onClick={handleScroll}>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                        <img className="x-logo" src={logoX} alt="X.com Logo"/>
                    </a>
                </button>
            </div>
        </header>
);
};

export default Header;
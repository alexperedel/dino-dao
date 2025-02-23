import React, {useState, useEffect, useRef, useCallback } from 'react';
import logo from '../images/logo-dao.png';
import logoX from '../images/logo-x-white.png';
import logoDiscord from '../images/logo-discord-white.png';
import "../css/header-styles.css"


const Header = () => {

    const [ticking, setTicking] = useState(false);
    const [isNavClicked, setIsNavClicked] = useState(false)
    let lastScrollTop = useRef(0);
    const spaceAboveHeader = 0.05 * window.innerHeight;

    const handleNavClick = () => {
        setIsNavClicked(true);
    };

    const handleScroll = useCallback(() => {
        console.log(ticking);
        if (!isNavClicked) {
            if (!ticking) {
                console.log(isNavClicked);
                console.log(ticking);
                const element = document.querySelector(".header");
                requestAnimationFrame(() => {
                    let scrollTop = window.scrollY || document.documentElement.scrollTop;

                    if (lastScrollTop.current < scrollTop) {
                        element.style.transform = `translateY(-${element.offsetHeight + spaceAboveHeader}px) translateX(-50%)`;
                    } else {
                        element.style.transform = 'translateY(0) translateX(-50%)';
                    }

                    lastScrollTop.current = scrollTop;
                    setTicking(false);
            })}

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
        return () =>
        { window.removeEventListener("scroll", handleScroll);
          clearTimeout(scrollEndTimeout); }
    }, [handleScroll, isNavClicked]);


    return (
        <header className="header">
            <img src={logo} alt="logo"/>
            <nav className="top-nav">
                <a href="#hero-section" onClick={handleNavClick}>Home</a>
                <a href="#about-section" onClick={handleNavClick}>About</a>
                <a href="#roadmap-section" onClick={handleNavClick}>Roadmap</a>
                <a href="#community-section" onClick={handleNavClick}>Community</a>
            </nav>

            <div className="social-icons">
                <button className="icon-button" id="x-discord-button">
                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                        <img className="discord-logo" src={logoDiscord} alt="discord.com Logo"/>
                    </a>
                </button>

                <button className="icon-button" id="x-logo-button">
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                        <img className="x-logo" src={logoX} alt="X.com Logo"/>
                    </a>
                </button>
            </div>
        </header>
    );
};

export default Header;
import logo from '../images/logo-dao.png';
import logoX from '../images/logo-x-white.png';
import logoDiscord from '../images/logo-discord-white.png';
import "../css/header-styles.css"
import useScrollHide from "../hooks/useScrollHide";
import useHandleResize from "../hooks/useHandleResize";
import {IoMdClose, IoMdMenu} from "react-icons/io";
import {useState} from "react";


const Header = () => {

    const { handleNavClick } = useScrollHide();

    const [isOpen, setIsOpen] = useState(false);

    useHandleResize(isOpen);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const setTopMenu = () => {
        const header = document.querySelector(".header");
        const mobileMenu = document.querySelector(".mobile-menu");

        if (!isOpen) {
            header.style.backgroundColor = "#1a1a2e";
            mobileMenu.style.top = `${header.offsetHeight - header.offsetHeight * 0.02}px`;
        }
        else {
            header.style.backgroundColor = "rgb(26, 26, 46, 0.9)";
        }
    }

    return (
        <header className="header">
            <img src={logo} alt="logo"/>

            <button className="hamburger" onClick = {() => {toggleMenu(); setTopMenu()}} aria-label="Toggle menu">
                {isOpen ? <IoMdClose size={30}/> : <IoMdMenu size={30}/>}
            </button>

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

            <nav className={`mobile-menu ${isOpen ? "open" : ""}`}>
                <a href="#hero-section" onClick={() => {
                    handleNavClick();
                    setIsOpen(false);
                }}>Home</a>

                <a href="#about-section" onClick={() => {
                    handleNavClick();
                    setIsOpen(false);
                }}>About</a>

                <a href="#roadmap-section" onClick={() => {
                    handleNavClick();
                    setIsOpen(false);
                }}>Roadmap</a>

                <a href="#community-section" onClick={() => {
                    handleNavClick();
                    setIsOpen(false);
                }}>Community</a>

                <div className="mobile-social-icons">
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
            </nav>

        </header>
    );
};

export default Header;
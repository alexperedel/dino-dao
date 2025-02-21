import React, { useState, useEffect, useMemo, useRef } from "react";

export default function Hero({ isTerminalActive }) {

    const textArray = useMemo(() => ["Community", "Builders", "Developers", "Explorers", "Dino DAO"], []);

    const [displayedText, setDisplayedText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const indexRef = useRef(0);

    useEffect(() => {
        if (isTerminalActive) return;

        const currentWord = textArray[indexRef.current];

        const interval = setInterval(() => {
            setDisplayedText((prev) => {
                if (!isDeleting) {
                    if (charIndex < currentWord.length) {
                        setCharIndex((prev) => prev + 1);
                        return currentWord.slice(0, charIndex + 1);
                    } else {
                        setTimeout(() => setIsDeleting(true), 1000);
                        return prev;
                    }
                } else {
                    if (charIndex > 0) {
                        setCharIndex((prev) => prev - 1);
                        return currentWord.slice(0, charIndex - 1);
                    } else {
                        setIsDeleting(false);
                        indexRef.current = (indexRef.current + 1) % textArray.length;
                        return "";
                    }
                }
            });
        }, 100);

        return () => clearInterval(interval);
    }, [charIndex, isDeleting, indexRef, textArray, isTerminalActive]);

    return (
        <div className="hero-section">
            <div className="hero-section-text">
                <h1>We Are {displayedText}</h1>
            </div>

            <div className="hero-section-button">
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="button-link">
                    Join Us
                </a>
            </div>

        </div>

    )
}




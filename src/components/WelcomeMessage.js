import React, {useEffect, useState, useRef} from 'react';
import "../css/welcome-window-styles.css"

const Welcome = ( { setTerminalActive } ) => {
    const [isWelcomeVisible, setIsWelcomeVisible] = useState(true);

    const handleStart = () => {
        setIsWelcomeVisible(false);
        setTerminalActive(false);
    };

    const text = `
        > Connecting to Dino DAO...
        > Access granted.
        > Private. Anonymous. Unlimited.
        > Your station: Web3.`;


    const [displayedText, setDisplayedText] = useState("");
    const [isComplete, setIsComplete] = useState(false);
    const [showButton, setShowButton] = useState(false);

    const indexRef = useRef(0);

    useEffect(() => {

        setTerminalActive(true);

        const interval = setInterval(() => {
            if (indexRef.current < text.length && !isComplete) {
                setDisplayedText((prev) => prev + text[indexRef.current]);
                indexRef.current += 1;
            } else {
                clearInterval(interval);
                setIsComplete(true);

                setTimeout(() => {
                    setShowButton(true);
                }, 500);
            }
        }, 20);

        return () => clearInterval(interval);
    }, [text, isComplete, setTerminalActive]);

    return (
        <div>
            {isWelcomeVisible && (
                <div className="welcome-window-visible-message">
                    <div className="welcome-window">
                        <p className="welcome-window-text"> {displayedText} </p>
                        <button type="button" onClick={handleStart} className="button"
                                style={{
                                    opacity: showButton ? 1 : 0,
                                }}>
                            Let's Go!
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Welcome;
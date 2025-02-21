import React, {useEffect, useState, useRef} from 'react';
import terminal from "../images/terminal.png";

const Welcome = ( { setTerminalActive } ) => {
    const [isWelcomeVisible, setIsWelcomeVisible] = useState(true);

    const handleStart = () => {
        setIsWelcomeVisible(false);
        setTerminalActive(false);
    };

    const text = `
        > Connecting to Dino DAO...
        > Access granted.
        > Decentralized. Anonymous. Unlimited.
        > Your station: Web3.`;


    const [displayedText, setDisplayedText] = useState("");
    const [isComplete, setIsComplete] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [showImg, setImg] = useState(false);

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
                    setImg(true);
                }, 500);

                setTimeout(() => {
                    setShowButton(true);
                }, 1000);
            }
        }, 30);

        return () => clearInterval(interval);
    }, [text, isComplete, setTerminalActive]);

    return (
        <div>
            {isWelcomeVisible && (
                <div className="visible-message">
                    <div className="terminal">
                        <p className="terminal-text"> {displayedText} </p>
                        <button type="button" onClick={handleStart} className="button"
                                style={{
                                    opacity: showButton ? 1 : 0,
                                }}>
                            Let's Go!
                        </button>

                        <img
                            className="img-computer"
                            style={{
                                opacity: showImg ? 1 : 0,
                            }}
                            alt="computer"
                            src={terminal}
                        />

                    </div>
                </div>
            )}
        </div>
    );
};

export default Welcome;
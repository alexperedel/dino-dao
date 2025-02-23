import React from 'react';
import logoDiscord from "../images/logo-discord-white.png";
import logoX from "../images/logo-x-white.png";
import "../css/community-styles.css"

const Community = () => {
    return (
        <div className="community-box" id="community-section">
            <h2>Community</h2>

            <div className="community-buttons">
                <button className="community-button" id="community-discord-logo">
                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                        <img className="discord-logo" src={logoDiscord} alt="discord.com Logo"/>
                    </a>
                </button>

                <button className="community-button" id="community-x-logo">
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                        <img className="x-logo" src={logoX} alt="X.com Logo"/>
                    </a>
                </button>
            </div>


        </div>

    );
};

export default Community;
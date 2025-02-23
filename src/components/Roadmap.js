import React from 'react';
import roadmapImage from "../images/roadmap-plan.png";


const Roadmap = () => {
    return (
        <div className="roadmap" id="roadmap-section">
            <div className="roadmap-content">
                <h2>Roadmap</h2>
                <img className="roadmap-image" src={roadmapImage} alt="roadmap-plan"/>
            </div>
        </div>

    );
};

export default Roadmap;
import React, {useState} from 'react';
import Hero from "./Hero";
import About from "./About";
import Welcome from "./WelcomeMessage";
import Roadmap from "./Roadmap";

const Body = () => {

    const [isTerminalActive, setTerminalActive] = useState(false);

    return (
        <body className="body">
            <Welcome setTerminalActive={setTerminalActive} />
            <Hero isTerminalActive={isTerminalActive} />
            <About />
            <Roadmap />
        </body>

    );
};

export default Body;
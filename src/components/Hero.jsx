import { useState, useEffect } from "react";

function Hero() {
    const [text, setText] = useState("");
    const fullText = "A Workshop Designed for Your Breath & Voice";
    const speed = 100;

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            i++;
            setText(fullText.substring(0, i));
            if (i >= fullText.length) clearInterval(interval);
        }, speed);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container" id="container">
            <img
                src="/images/Khusur-Phusur-Logo.png"
                alt="Workshop Logo"
                className="logo"
            />
            <h1 className="typewriter">{text}</h1>
        </div>
    );
}

export default Hero;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import landingImage from "./landing.jpg"; // Make sure the path is correct

const LandingPage = () => {
    const navigate = useNavigate();
    const [language, setLanguage] = useState("EN");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "EN" ? "ES" : "EN"));
    };

    return (
        <div className="landing-container">
            <img src={landingImage} alt="Pig" className="landing-image" />
            <h1>Welcome to Our Platform!</h1>
            <button className="get-started-button" onClick={() => navigate("/login")}>
                Get Started
            </button>
            <div className="language-toggle">
                <button onClick={toggleLanguage}>
                    Switch to {language === "EN" ? "Spanish" : "English"}
                </button>
            </div>
        </div>
    );
};

export default LandingPage;

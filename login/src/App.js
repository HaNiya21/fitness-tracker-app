import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import LoginPage from "./Login";
import "./App.css";
import SignUp from "./SignUp";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUp/>} />
            </Routes>
        </Router>
    );
}


export default App;

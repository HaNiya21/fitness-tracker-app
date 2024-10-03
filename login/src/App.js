// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import "./App.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<SignUp />} /> {/* Default to Sign Up */}
            </Routes>
        </Router>
    );
}

export default App;

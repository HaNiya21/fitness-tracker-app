// Login.js
import { useState } from "react";
import "./App.css";

const Login = () => {
    const initialValues = {
        email: "",
        password: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const {validate} = require("./Validate");
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    const validate = (values) => {
        let errors = {};
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!emailRegex.test(values.email)) {
            errors.email = "Please enter a valid email";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 6) {
            errors.password = "Password must be more than 6 characters";
        }
        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add validation logic if needed
        console.log(formValues);
        setIsSubmit(true);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="ui divider"></div>
                <div className="ui form">
                    <div className="field">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formValues.password}
                            onChange={handleChange}
                        />

                    </div>
                    <button className="fluid ui button blue">Login</button>
                </div>
            </form>
            <div className="text">
                Don't have an account? <span><a href="/signup">Sign Up</a></span>
            </div>
        </div>
    );
};

export default Login;

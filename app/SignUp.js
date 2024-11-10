import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useFonts, Koulen_400Regular } from "@expo-google-fonts/koulen";
import styles from "./styles";

const SignUp = () => {
    let [fontsLoaded] = useFonts({
        Koulen_400Regular, 
    });

    const navigation = useNavigation();

    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [signupSuccess, setSignupSuccess] = useState(false); // State to track signup success
    const [signupError, setSignupError] = useState(""); // State to track signup errors

    const handleChange = (name, value) => {
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async () => {
        const errors = validate(formValues);  // Validate form values
        setFormErrors(errors);  // Set errors if any
        setSignupError("");  // Reset any previous error message

        if (Object.keys(errors).length === 0) {
            try {
                const response = await fetch('http://172.20.9.103:5000/api/SignUp', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formValues),
                });

                const data = await response.json();

                if (response.ok) {
                    console.log('Signup Successful:', data.token);
                    setSignupSuccess(true);  // Set signup success to true
                    setTimeout(() => {
                        navigation.navigate('Login');  // Navigate to Login after a brief delay
                    }, 1000);  // You can adjust the delay as needed
                } else {
                    // Handle server-side error response
                    console.log('Signup Failed:', data.msg);
                    setSignupError(data.msg || "Signup failed. Please try again.");
                }
            } catch (error) {
                console.error('Error:', error);
                setSignupError('Something went wrong. Please try again!');
            }
        }
    };

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Those passwords didn’t match. Try again.";
        }
        return errors;
    };

    return (
        <View style={styles.SignUpContainer}>
            {signupSuccess && (
                <Text style={styles.successMessage}>Signed up successfully</Text>
            )}

            {signupError && (
                <Text style={styles.errorMessage}>{signupError}</Text> // Display signup error
            )}

            <View style={styles.box1}>
                <Image source={require('../assets/images/wolf_logo-black.png')} style={styles.logoSL} />
                <Text style={styles.headerText}>GYMWOLF</Text>
            </View>

            <View style={styles.form}>
                <View style={styles.field}>
                    <TextInput
                        style={styles.input}
                        placeholder="Choose a username"
                        value={formValues.username}
                        onChangeText={(value) => handleChange('username', value)}
                    />
                    {formErrors.username && <Text style={styles.error}>{formErrors.username}</Text>}
                </View>

                <View style={styles.field}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={formValues.email}
                        onChangeText={(value) => handleChange('email', value)}
                        autoCapitalize="none"
                    />
                    {formErrors.email && <Text style={styles.error}>{formErrors.email}</Text>}
                </View>

                <View style={styles.field}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        value={formValues.password}
                        onChangeText={(value) => handleChange('password', value)}
                        autoCapitalize="none"
                    />
                    {formErrors.password && <Text style={styles.error}>{formErrors.password}</Text>}
                </View>

                <View style={styles.field}>
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm password"
                        secureTextEntry
                        value={formValues.confirmPassword}
                        onChangeText={(value) => handleChange('confirmPassword', value)}
                        autoCapitalize="none"
                    />
                    {formErrors.confirmPassword && <Text style={styles.error}>{formErrors.confirmPassword}</Text>}
                </View>

                <TouchableOpacity style={styles.SignUpButton} onPress={handleSubmit}>
                    <Text style={styles.SignUpText}>Sign Up</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.text}>
                Already have an account?
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.LoginLink}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignUp;

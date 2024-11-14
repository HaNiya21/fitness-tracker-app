import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useFonts, Koulen_400Regular } from "@expo-google-fonts/koulen";
import styles from "./styles";
import { err } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
    let [fontsLoaded] = useFonts({
        Koulen_400Regular, 
    });

    const navigation = useNavigation();

    const initialValues = {
        firstName: "",
        lastName: "",
        heightCm: "",
        weight: "",
        age: "",
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
                const response = await fetch('http://localhost:5000/api/SignUp', {
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

        if (!values.firstName) errors.firstName = "First name is required!";
        if (!values.lastName) errors.lastName = "Last name is required!";
        if (!values.heightCm || isNaN(values.heightCm)) errors.height = "Height is required!";
        if (!values.weightKg || isNaN(values.weightKg)) errors.weightKg = "Weight is required!";
        if (!values.age || isNaN(values.age)) errors.age = "Age is required!";
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
        <SafeAreaView style= {{flex: 1, marginVertical: 4}} edges={['top']}>
            <View style={styles.SignUpContainer}>
                {signupSuccess && (
                    <Text style={styles.successMessage}>Signed up successfully</Text>
                )}

                {signupError && (
                    <Text style={styles.errorMessage}>{signupError}</Text> // Display signup error
                )}

                <View style={styles.box1}>
                    <Image source={require('../assets/images/wolf_logo-black.png')} style={styles.logoSL} />
                    <Text style={styles.logoText}>GYMWOLF</Text>
                </View>

                <ScrollView style={styles.form} contentContainerStyle={{ justifyContent: 'center'}}>
                    <View style={styles.field}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        {/* First name Field */}
                            <TextInput
                                style={[styles.input ,{ flex: 1, marginRight: 5 }]}
                                placeholder="First Name"
                                placeholderTextColor="#8D8D8D"
                                value={formValues.firstName}
                                onChangeText={(text) => handleChange('firstName', text)}
                            />
                
                        {/* Last name Field */}
                            <TextInput
                                style={[styles.input, { flex: 1 }]}
                                placeholder="Last Name"
                                placeholderTextColor="#8D8D8D"
                                value={formValues.lastName}
                                onChangeText={(text) => handleChange('lastName', text)}
                            />
                        </View>
                        {formErrors.firstName && <Text style={styles.error}>{formErrors.firstName}</Text>}
                        {formErrors.lastName && <Text style={styles.error}>{formErrors.lastName}</Text>}
                        
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                        {/* Height Field */}
                            <TextInput
                                style={[styles.input, { flex: 1, marginRight: 5 }]}
                                placeholder="Height (cm)"
                                placeholderTextColor="#8D8D8D"
                                value={formValues.heightCm}
                                onChangeText={(text) => handleChange('heightCm', text)}
                                keyboardType="numeric"
                            />                        

                        {/* Weight Field */}
                            <TextInput
                                style={[styles.input, { flex: 1 }]}
                                placeholder="Weight (kg)"
                                placeholderTextColor="#8D8D8D"
                                value={formValues.weightKg}
                                onChangeText={(text) => handleChange('weightKg', text)}
                                keyboardType="numeric"
                            />
                        </View>
                        {formErrors.heightCm && <Text style={styles.error}>{formErrors.heightCm}</Text>}
                        {formErrors.weightKg && <Text style={styles.error}>{formErrors.weightKg}</Text>}

                    {/* Age Field */}
                        <TextInput
                            style={[styles.input, { flex: 1 }]}
                            placeholder="Age"
                            placeholderTextColor="#8D8D8D"
                            value={formValues.age}
                            onChangeText={(text) => handleChange('age', text)}
                            keyboardType="numeric"
                        />
                        {formErrors.age && <Text style={styles.error}>{formErrors.age}</Text>}

                    {/* Email Field */}
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor="#8D8D8D"
                            value={formValues.email}
                            onChangeText={(text) => handleChange('email', text)}
                            keyboardType="email-address"
                        />
                        {formErrors.email && <Text style={styles.error}>{formErrors.email}</Text>}

                    {/* Password Field */}
                        <View style={styles.field}>
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                placeholderTextColor="#8D8D8D"
                                value={formValues.password}
                                onChangeText={(text) => handleChange('password', text)}
                                secureTextEntry
                            />
                            {formErrors.password && <Text style={styles.error}>{formErrors.password}</Text>}
                        </View>
                
                    {/* Confirm Password Field */}
                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            placeholderTextColor="#8D8D8D"
                            value={formValues.confirmPassword}
                            onChangeText={(text) => handleChange('confirmPassword', text)}
                            secureTextEntry
                        />
                        {formErrors.confirmPassword && <Text style={styles.error}>{formErrors.confirmPassword}</Text>}
                    </View>

                    <TouchableOpacity style={styles.signInButton} onPress={handleSubmit}>
                        <Text style={styles.SignUpText}>Sign Up</Text>
                    </TouchableOpacity>
                
                    <Text style={styles.text}>
                        Already have an account?
                    </Text>

                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.LoginLink}>Login</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default SignUp;

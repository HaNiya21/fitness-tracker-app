import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useFonts, Koulen_400Regular } from "@expo-google-fonts/koulen"; // imported font from google 
import styles from "./styles";

const SignUp = () => {

    let [fontsLoaded] = useFonts({
        Koulen_400Regular, // Registering the font
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
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (name, value) => {
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = () => {
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
            // Handle successful signup (e.g., API call here)
        }
    }, [formErrors, formValues, isSubmit]);

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
            {Object.keys(formErrors).length === 0 && isSubmit ? (
                <Text style={styles.successMessage}>Signed up successfully</Text>
            ) : null}
            {/* <Text style={styles.SignUpTitle}>Sign Up</Text> */}
            <View style={styles.box1}>
                        <Image source={require('../assets/images/wolf.svg')} style={styles.logo}/>
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
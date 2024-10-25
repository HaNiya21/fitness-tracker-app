import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";
import Login from './Login';


// import landingImage from "./app/landing.j"; // Make sure the path is correct

const LandingPage = () => {
    const navigation = useNavigation();
    const [language, setLanguage] = useState("EN");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "EN" ? "ES" : "EN"));
    };

    return (
        <View style={styles.container}>
            {/* <Image source={landingImage} style={styles.image} /> */}
            <Text style={styles.title}>Welcome to Our Platform!</Text>
            <TouchableOpacity style={styles.GetStartedButton} onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.LoginButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.languageText}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.languageToggle}>
                <TouchableOpacity onPress={toggleLanguage}>
                    <Text>Switch to {language === "EN" ? "Spanish" : "English"}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.LoginLink}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LandingPage;

import { useState } from "react";
import { View, TouchableOpacity, Text, TextInput, Image } from "react-native";
import { useFonts, Koulen_400Regular } from "@expo-google-fonts/koulen"; // imported font from google 
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";

const Login = () => {

    let [fontsLoaded] = useFonts({
        Koulen_400Regular, // Registering the font
    });


    const initialValues = {
        email: "",
        password: "",
    };

    const navigation = useNavigation();
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (name, value) => {
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
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validate(formValues);
        setFormErrors(errors);
        
        if (Object.keys(errors).length === 0) {
            try {
                const response = await fetch('http://localhost:5000/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formValues),
                });

                const data = await response.json();
                if (data.success) {
                    console.log('Login Successful:', data.token);
                } else {
                    console.log('Login Failed:', data.err);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <View style={styles.loginContainer}>
            <Image source={require('../assets/images/wolf_logo-black.png')} style={styles.logoSL}/>
            <Text style={styles.LoginTitle}>GYMWOLF</Text>
            <Text style={styles.paragraph}>Welcome Back!</Text>
            <View style={styles.form}>
                <View style={styles.field}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Email"
                        value={formValues.email}
                        onChangeText={(value) => handleChange('email', value)}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    {formErrors.email && <Text style={styles.error}>{formErrors.email}</Text>}
                </View>
                <View style={styles.field}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Password"
                        value={formValues.password}
                        onChangeText={(value) => handleChange('password', value)}
                        secureTextEntry={true}
                    />
                    {formErrors.password && <Text style={styles.error}>{formErrors.password}</Text>}
                </View>
                <TouchableOpacity style={styles.signInButton} onPress={handleSubmit}>
                    <Text style={styles.SignInText}>Sign In</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
                <Text>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.linkText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ExerciseList')}>
                    <Text style={styles.linkText}>Exercise Page</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('WaterIntake')}>
                    <Text style={styles.linkText}>WaterIntake</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AddSleep')}>
                    <Text style={styles.linkText}>Add Sleep</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AddExercise')}>
                    <Text style={styles.linkText}>AddExercise</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('WaterChart')}>
                    <Text style={styles.linkText}>WaterChart</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                    <Text style={styles.linkText}>Dashboard</Text>  
                </TouchableOpacity>
                 <TouchableOpacity onPress={() => navigation.navigate('StepCounter')}>
                    <Text style={styles.linkText}>Pedometer</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                    <Text style={styles.linkText}>Menu</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Footer')}>
                    <Text style={styles.linkText}>Footer</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;

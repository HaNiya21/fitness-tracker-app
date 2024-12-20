import { useState } from "react";
import { View, TouchableOpacity, Text, TextInput, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import '../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import ToggleSwitch from '../components/ToggleSwitch';
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = () => {
        const newLanguage = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLanguage)
            .then(() => console.log("Language changed to:", newLanguage))
            .catch(err => console.log(err));
    };

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
            errors.email = t('Email is required');
        } else if (!emailRegex.test(values.email)) {
            errors.email = t('Please enter a valid email');
        }
        if (!values.password) {
            errors.password = t('Password is required');
        } else if (values.password.length < 6) {
            errors.password = t('Password must be more than 6 characters');
        }
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validate(formValues);
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            const normalizedEmail = formValues.email.toLowerCase();

            try {
                const response = await fetch('http://localhost:5000/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        ...formValues,
                        email: normalizedEmail,
                    }),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    console.error('Login request failed with status:', response.status);
                    console.error('Error message:', errorData);
                    alert(errorData.msg || t('Login failed. Please try again.'));
                    return;
                }

                const data = await response.json();
                console.log('Response Data:', data);

                if (data.success) {
                    console.log('Login Successful:', data.token);
                    navigation.navigate('Dashboard');
                } else {
                    console.log('Login Failed:', data.err || 'Unknown error');
                    alert(data.msg || 'Invalid credentials');
                }
            } catch (error) {
                console.error('Error during login:', error);
                alert('Something went wrong. Please try again!');
            }
        }
    };

    return (
        <SafeAreaView edges={['top']} style={{ flex: 1, marginVertical: 4 }}>
            <View style={styles.loginContainer}>
                <Image source={require('../assets/images/wolf_logo-black.png')} style={styles.logoSL} />
                <Text style={styles.logoText}>GYMWOLF</Text>
                <Text style={styles.paragraph}>{t('Welcome Back!')}</Text>
                <View style={styles.form}>
                    <View style={styles.field}>
                        <TextInput
                            style={styles.input}
                            placeholder={t('Enter Email')}
                            placeholderTextColor="#8D8D8D"
                            value={formValues.email}
                            onChangeText={(value) => handleChange('email', value)}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        {formErrors.email && <Text style={styles.error}>{formErrors.email}</Text>}
                    </View>

                    <View style={styles.field}>
                        <TextInput
                            style={[
                                styles.input,
                                { fontFamily: i18n.language === 'es' ? 'Trebuchet MS' : 'Koulen-Regular' },
                                { fontWeight: i18n.language === 'es' ? 'bold' : 'regular' },
                                { letterSpacing: i18n.language === 'es' ? -1 : 0 },
                                { fontSize: i18n.language === 'es' ? 12 : 'auto' },
                                { padding: i18n.language === 'es' ? 15 : 10 }
                            ]}
                            placeholder={t('Enter Password')}
                            placeholderTextColor="#8D8D8D"
                            value={formValues.password}
                            onChangeText={(value) => handleChange('password', value)}
                            secureTextEntry={true}
                            autoCapitalize="none"
                        />
                        {formErrors.password && <Text style={[styles.error, 
                            { fontFamily: i18n.language === 'es' ? 'Trebuchet MS' : 'Koulen-Regular' },
                            { fontWeight: i18n.language === 'es' ? 'bold' : 'regular' },
                            { letterSpacing: i18n.language === 'es' ? -1 : 0 },
                            { fontSize: i18n.language === 'es' ? 12 : 'auto' },
                            { margin: i18n.language === 'es' ? 10 : 'auto' }
                        ]}>{t(formErrors.password)}</Text>}
                    </View>

                    <TouchableOpacity style={styles.signInButton} onPress={handleSubmit}>
                        <Text style={[
                            styles.SignInText, 
                            { fontFamily: i18n.language === 'es' ? 'Trebuchet MS' : 'Koulen-Regular' },
                            { fontWeight: i18n.language === 'es' ? 'bold' : 'regular' },
                            { letterSpacing: i18n.language === 'es' ? -1 : 0 },
                            { fontSize: i18n.language === 'es' ? 14 : 16 },
                            { padding: i18n.language === 'es' ? 5 : 5 }
                        ]}>{t('Log in')}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.textContainer}>
                    <Text style={{ color: '#000', fontFamily: 'Koulen-Regular' }}>{t("Don't have an account?")}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.linkText}>{t('Sign Up')}</Text>
                    </TouchableOpacity>
                </View>

                <ToggleSwitch onPress={changeLanguage} style={{ position: 'absolute', right: 20, bottom: 30 }} />
            </View>
        </SafeAreaView>
    );
};

export default Login;

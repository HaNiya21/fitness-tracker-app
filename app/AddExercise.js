
import { useState } from "react";
import { View, ImageBackground, TouchableOpacity, Text, TextInput,ScrollView, Modal } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; // for date and time icons
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from "./styles";
import Footer from '../components/Footer';
//import Footer from '../components/footer';

import DateTimePicker from '@react-native-community/datetimepicker'; // for date/time pickers
import { AntDesign } from "@expo/vector-icons";
import Menu from "../components/Menu";
import HeaderLogo from "../components/headerLogo";

import '../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';


const backgroundImage = require('../assets/images/GymwolfBackground.jpeg');

const AddExercise = () => {

    const { t, i18n } = useTranslation();

    const initialValues = {
        activity: "",
        date: "",
        startTime: "",
        duration: "",
        distance: "",
    };

    const navigation = useNavigation();
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

    const handleChange = (name, value) => {
        setFormValues({ ...formValues, [name]: value });
    };

    const validate = (values) => {
        let errors = {};
        if (!values.activity) {
            errors.activity = t('Activity is required');
        }
        if (!values.date) {
            errors.date = t('Date is required');
        }
        if (!values.startTime) {
            errors.startTime = t('Start time is required');
        }
        if (!values.duration) {
            errors.duration = t('Duration is required');
        }
        if (!values.distance) {
            errors.distance =  t('Distance is required');
        }
        return errors;
    };

    const handleSubmit = async () => {
        const errors = validate(formValues);
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            try {
                const response = await fetch('http://localhost:5000/api/exercise', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formValues),
                });

                const data = await response.json();

                if (data.success) {
                    console.log('Exercise added successfully.');
                    navigation.navigate('Progress'); // Navigate after successful submission
                } else {
                    console.error('Error:', data.message || t('Submission failed.'));
                }
            } catch (err) {
                console.error('Error:', err);
            }
        }
    };

    return (
        <View style={styles.content}>
            
            <ImageBackground source={backgroundImage} style={styles.image}>
                <View>
                    <HeaderLogo />
                </View>
                
                <Menu />
                <View style={styles.backIcon}>
                    <AntDesign name="arrowleft" size={30} color="#000" onPress={() => navigation.navigate('ExerciseChart')} />
                </View>
                <ScrollView>
                <Text style={styles.exerciseText}>{t('Activity')}</Text>
                <TextInput
                    style={styles.exerciseInput}
                    value={formValues.activity}
                    onChangeText={(text) => handleChange('activity', text)}
                    placeholder={t('Enter Activity')}
                />
                {formErrors.activity && <Text style={styles.error}>{t(formErrors.activity)}</Text>}

                <Text style={styles.exerciseText}>{t('Date')}</Text>
                <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateContainer}>
                    <Text style={styles.dateInput}>{formValues.date || t("Select Date")}</Text>
                </TouchableOpacity>
                <Modal
                    transparent={true}
                    animationType="slide"
                    visible={showDatePicker}
                    onRequestClose={() => setShowDatePicker(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.timePickerContainer}>
                            <DateTimePicker
                                value={new Date()}
                                mode="date"
                                display="default"
                                onChange={(event, selectedDate) => {
                                    setShowDatePicker(false);
                                    if (selectedDate) handleChange('date', selectedDate.toISOString().split('T')[0]);
                                }}
                            />
                        </View>
                    </View>
                </Modal>
                {formErrors.date && <Text style={styles.error}>{t(formErrors.date)}</Text>}

                <Text style={styles.exerciseText}>{t('Start Time')}</Text>
                <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.dateContainer}>
                    <Text style={styles.dateInput}>{formValues.startTime || t("Select Time")}</Text>
                </TouchableOpacity>
                <Modal
                transparent={true}
                animationType="slide"
                visible={showTimePicker}
                onRequestClose={() => setShowTimePicker(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.datePickerContainer}>
                        <DateTimePicker
                            value={new Date()}
                            mode="time"
                            display="default"
                            onChange={(event, selectedTime) => {
                                setShowTimePicker(false);
                                if (selectedTime) handleChange('startTime', selectedTime.toTimeString().split(' ')[0]);
                            }}
                        />
                    </View>
                </View>
            </Modal>
                {formErrors.startTime && <Text style={styles.error}>{t(formErrors.startTime)}</Text>}

                <Text style={[styles.exerciseText, 
                            { fontFamily: i18n.language === 'es' ? 'Trebuchet MS': 'Koulen-Regular',
                            fontWeight: i18n.language === 'es' ? 'bold': 'regular',
                            letterSpacing: i18n.language === 'es' ? -1: 0,
                            fontSize: i18n.language === 'es' ? 18: 20,
                }]}>{t('Duration (mins)')}</Text>
                <TextInput
                    style={styles.exerciseInput}
                    value={formValues.duration}
                    onChangeText={(text) => handleChange('duration', text)}
                    placeholder={t('Enter Duration')}
                    keyboardType="numeric"
                />
                {formErrors.duration && <Text style={styles.error}>{t(formErrors.duration)}</Text>}

                <Text style={styles.exerciseText}>{t('Distance (km)')}</Text>
                <TextInput
                    style={styles.exerciseInput}
                    value={formValues.distance}
                    onChangeText={(text) => handleChange('distance', text)}
                    placeholder={t('Enter Distance')}
                    keyboardType="numeric"
                />
                {formErrors.distance && <Text style={styles.error}>{t(formErrors.distance)}</Text>}

                <TouchableOpacity style={styles.waterSubmitButton} onPress={handleSubmit}>
                    <Text style={styles.waterButtonText}>{t('Submit')}</Text>
                </TouchableOpacity>
                </ScrollView>
                </ImageBackground>
                <Footer />
            </View>
    );
};

export default AddExercise;

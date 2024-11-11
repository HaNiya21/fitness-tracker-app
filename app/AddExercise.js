
import { useState } from "react";
import { View, ImageBackground, TouchableOpacity, Text, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; // for date and time icons
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from "./styles";
import Footer from '../components/Footer';
//import Footer from '../components/footer';

import DateTimePicker from '@react-native-community/datetimepicker'; // for date/time pickers
import { AntDesign } from "@expo/vector-icons";

const backgroundImage = require('../assets/images/GymwolfBackground.jpeg');

const AddExercise = () => {
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
            errors.activity = "Activity is required";
        }
        if (!values.date) {
            errors.date = "Date is required";
        }
        if (!values.startTime) {
            errors.startTime = "Start Time is required";
        }
        if (!values.duration) {
            errors.duration = "Duration is required";
        }
        if (!values.distance) {
            errors.distance = "Distance is required";
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
                    navigation.navigate('ExerciseChart'); // Navigate after successful submission
                } else {
                    console.error('Error:', data.message || 'Submission failed.');
                }
            } catch (err) {
                console.error('Error:', err);
            }
        }
    };

    return (
        <View style={styles.content}>
            <ImageBackground source={backgroundImage} style={styles.image}>
                <AntDesign name="arrowleft" size={30} color="#000" style={styles.backIcon} onPress={() => navigation.navigate('ExerciseChart')} />

                <Text style={styles.exerciseText}>Activity</Text>
                <TextInput
                    style={styles.exerciseInput}
                    value={formValues.activity}
                    onChangeText={(text) => handleChange('activity', text)}
                    placeholder="Enter activity"
                />
                {formErrors.activity && <Text style={styles.error}>{formErrors.activity}</Text>}

                <Text style={styles.exerciseText}>Date</Text>
                <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                    <Text style={styles.dateInput}>{formValues.date || "Select Date"}</Text>
                </TouchableOpacity>
                {showDatePicker && (
                    <DateTimePicker
                        value={new Date()}
                        mode="date"
                        display="default"
                        onChange={(event, selectedDate) => {
                            setShowDatePicker(false);
                            if (selectedDate) handleChange('date', selectedDate.toISOString().split('T')[0]);
                        }}
                    />
                )}
                {formErrors.date && <Text style={styles.error}>{formErrors.date}</Text>}

                <Text style={styles.exerciseText}>Start Time</Text>
                <TouchableOpacity onPress={() => setShowTimePicker(true)}>
                    <Text style={styles.dateInput}>{formValues.startTime || "Select Time"}</Text>
                </TouchableOpacity>
                {showTimePicker && (
                    <DateTimePicker
                        value={new Date()}
                        mode="time"
                        display="default"
                        onChange={(event, selectedTime) => {
                            setShowTimePicker(false);
                            if (selectedTime) handleChange('startTime', selectedTime.toTimeString().split(' ')[0]);
                        }}
                    />
                )}
                {formErrors.startTime && <Text style={styles.error}>{formErrors.startTime}</Text>}

                <Text style={styles.exerciseText}>Duration (mins)</Text>
                <TextInput
                    style={styles.exerciseInput}
                    value={formValues.duration}
                    onChangeText={(text) => handleChange('duration', text)}
                    placeholder="Enter duration"
                    keyboardType="numeric"
                />
                {formErrors.duration && <Text style={styles.error}>{formErrors.duration}</Text>}

                <Text style={styles.exerciseText}>Distance (km)</Text>
                <TextInput
                    style={styles.exerciseInput}
                    value={formValues.distance}
                    onChangeText={(text) => handleChange('distance', text)}
                    placeholder="Enter distance"
                    keyboardType="numeric"
                />
                {formErrors.distance && <Text style={styles.error}>{formErrors.distance}</Text>}

                <TouchableOpacity style={styles.Button} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
                </ImageBackground>
                <Footer />
            </View>
    );
};

export default AddExercise;

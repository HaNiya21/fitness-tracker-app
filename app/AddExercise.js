import { useState } from "react";
import { View, ImageBackground, TouchableOpacity, Text, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; // for date and time icons
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";

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

    const handleChange = (name, value) => {
        setFormValues({ ...formValues, [name]: value });
    }

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
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
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
                }
            }
            catch (err) {
                console.error('Error:', err);
            }
        }
    }

    return (
        <ImageBackground 
            source={backgroundImage} 
            style={styles.BackgroundImage} 
            resizeMode="stretch"
        >
            <Text style={styles.exerciseTitle}>Add Exercise</Text>
            
            <Text style={styles.exerciseText}>Activity</Text>
            <TextInput
                style={styles.exerciseInput}
                value={formValues.activity}
                onChangeText={(text) => handleChange('activity', text)}
            />
            {formErrors.activity && <Text style={styles.error}>{formErrors.activity}</Text>}

            <Text style={styles.exerciseText}>Date</Text>
            <View style={styles.dateIconCont}>
                <TextInput
                    style={styles.exerciseInput}
                    value={formValues.date}
                    onChangeText={(text) => handleChange('date', text)}
                />
                <Icon name="calendar" size={20} color="#000" style={styles.calendarIcon} />
            </View>
            {formErrors.date && <Text style={styles.error}>{formErrors.date}</Text>}

            <Text style={styles.exerciseText}>Start Time</Text>
            <View style={styles.timeIconCont}>
                <TextInput
                    style={styles.exerciseInput}
                    value={formValues.startTime}
                    onChangeText={(text) => handleChange('startTime', text)}
                />
                <Icon name="clock-o" size={20} color="#000" style={styles.clockIcon} />
            </View>
            {formErrors.startTime && <Text style={styles.error}>{formErrors.startTime}</Text>}

            <Text style={styles.exerciseText}>Duration</Text>
            <TextInput
                style={styles.exerciseInput}
                value={formValues.duration}
                onChangeText={(text) => handleChange('duration', text)}
            />
            {formErrors.duration && <Text style={styles.error}>{formErrors.duration}</Text>}

            <Text style={styles.exerciseText}>Distance - miles/yards</Text>
            <TextInput
                style={styles.exerciseInput}
                value={formValues.distance}
                onChangeText={(text) => handleChange('distance', text)}
            />
            {formErrors.distance && <Text style={styles.error}>{formErrors.distance}</Text>}
            
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.exerciseSubmit}>Save</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

export default AddExercise;

import { useState } from "react"; 
import { View, ImageBackground, TouchableOpacity, Text, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; // or any other icon set
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";

const backgroundImage = require('../assets/images/GymwolfBackground.jpeg');

const SleepIntake = () => {
    const initialValues = {
        duration: "",
        time: "",
    };

    const navigation = useNavigation();
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (name, value) => {
        setFormValues({ ...formValues, [name]: value });
    };

    const validate = (values) => {
        let errors = {};
        if (!values.duration) {
            errors.duration = "Duration is required";
        }
        if (!values.time) {
            errors.time = "Time is required";
        }
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validate(formValues);
        setFormErrors(errors);
        
        if (Object.keys(errors).length === 0) {
            try {
                const response = await fetch('http://localhost:5000/api/sleepIntake', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formValues),
                });

                const data = await response.json();
                
                if (data.success) {
                    console.log('Sleep intake entered successfully.');
                }
            } catch (err) {
                console.error('Error:', err);
            }
        }
    };

    return (
        <ImageBackground 
            source={backgroundImage} 
            style={styles.BackgroundImage} 
            resizeMode="stretch"
        >
            <Text style={styles.sleepTitle}>Add Sleep</Text>
            
            <Text style={styles.sleepText}>Duration</Text>
            <View style={styles.amountOz}>
                <TextInput
                    style={styles.sleepInput}
                    value={formValues.duration}
                    onChangeText={(text) => handleChange('duration', text)}
                />
                <Text style={styles.sleepHours}>hrs</Text>
            </View>
            {formErrors.duration && <Text style={styles.error}>{formErrors.duration}</Text>}

            <Text style={styles.sleepText}>Time</Text>
            <View style={styles.timeIconCont}>
                <TextInput
                    style={styles.sleepInput}
                    value={formValues.time}
                    onChangeText={(text) => handleChange('time', text)}
                />
                <Icon name="clock-o" size={20} color="#000" style={styles.clockIcon} />
            </View>
            {formErrors.time && <Text style={styles.error}>{formErrors.time}</Text>}
            
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.sleepSubmit}>Save</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

export default SleepIntake;

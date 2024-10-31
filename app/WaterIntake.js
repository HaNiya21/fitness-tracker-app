import { useState } from "react";
import { View, ImageBackground, TouchableOpacity, Text, TextInput } from "react-native";
// import { useFonts, Koulen_400Regular } from "@expo-google-fonts/koulen"; // imported font from google 
// import {useFonts as useOtherFont, KoHo_400Regular} from "@expo-google-fonts/koho"; // imported font from google
import Icon from 'react-native-vector-icons/FontAwesome'; // or any other icon set
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";

const backgroundImage = require('../assets/images/GymwolfBackground.jpeg');

const WaterIntake = () => {


        const initialValues = {
            amount : "",
            time : "",
        };

        const navigation = useNavigation();
        const [formValues, setFormValues] = useState(initialValues);
        const [formErrors, setFormErrors] = useState({});

        const handleChange = (name, value) => {
            setFormValues({ ...formValues, [name]: value });
        }

        const validate = (values) => {
            let errors = {};
            if (!values.amount) {
                errors.amount = "Amount is required";
            }
            if (!values.time) {
                errors.time = "Time is required";
            }
            return errors;
        }

        const handleSubmit = async (e) => {
            e.preventDefault();
            const errors = validate(formValues);
            setFormErrors(errors);
            
            if (Object.keys(errors).length === 0) {
                try {
                    const response = await fetch('http://localhost:5000/api/waterIntake', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(formValues),
                    });

                    const data = await response.json();
                    
                    if (data.success) {
                        console.log('Water intake entered successfully.')
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
                <Text style={styles.waterTitle}>Add Water</Text>
                
                <Text style={styles.waterText}>Amount</Text>
                <View style={styles.amountOz}>
                    <TextInput
                        style={styles.waterInput}
                        value={formValues.amount}
                        onChangeText={(text) => handleChange('amount', text)}
                    />
                    <Text style={styles.waterOz}>oz</Text>
                </View>
                {formErrors.amount && <Text style={styles.error}>{formErrors.amount}</Text>}

                <Text style={styles.waterText}>Time</Text>
                <View style={styles.timeIconCont}>
                    <TextInput
                        style={styles.waterInput}
                        value={formValues.time}
                        onChangeText={(text) => handleChange('time', text)}
                    />
                    <Icon name="clock-o" size={20} color="#000" style={styles.clockIcon} />
                </View>
                {formErrors.time && <Text style={styles.error}>{formErrors.time}</Text>}
                
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.waterSubmit}>Save</Text>
                </TouchableOpacity>
            </ImageBackground>

        );
    }

    export default WaterIntake;

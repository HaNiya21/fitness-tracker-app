import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { View, ImageBackground, TouchableOpacity, Text, TextInput } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from "./styles";
import Footer from "./Footer";

const backgroundImage = require('../assets/images/GymwolfBackground.jpeg');

export default function WaterIntake() {
    const navigation = useNavigation();
    const [amount, setAmount] = useState('');  // Water intake amount
    const [time, setTime] = useState('');      // Time of intake
    const [errors, setErrors] = useState({});  // Store validation errors

    // Validation logic for amount and time
    const validateInputs = () => {
        let errors = {};
        if (!amount) errors.amount = "Amount is required";
        if (!time) errors.time = "Time is required";
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };


    const handleSubmit = () => {
        if (!validateInputs) return;

        //pass the amount and time to the WaterChart screen
        console.log('Navigating with:', { amount, time });  // Add this line for debugging
        
        navigation.navigate('WaterChart', { amount, time });
        
        // clear input fields for next entry
        setAmount('');
        setTime('');
        setErrors({});
    };

    return (
        <View style={styles.content}>
            <ImageBackground source={backgroundImage} style={styles.image}>
                <AntDesign name="arrowleft" size={30} color="#000" style={styles.backIcon} onPress={() => navigation.navigate('WaterChart')} />
                
                <Text style={styles.waterTitle}>Add Water</Text>
                
                <Text style={styles.waterText}>Amount</Text>
                <View style={styles.inputCont}>
                    <TextInput
                        style={styles.waterInput}
                        value={amount}
                        keyboardType="numeric"
                        onChangeText={setAmount}
                        placeholder="Enter amount"
                    />
                    <Text style={styles.waterOz}>oz</Text>
                </View>
                {errors.amount && <Text style={styles.error}>{errors.amount}</Text>}

                <Text style={styles.waterText}>Time</Text>
                <View style={styles.inputCont}>
                    <TextInput
                        style={styles.waterInput}
                        value={time}
                        onChangeText={setTime}
                        placeholder="Enter time"
                    />
                    <FontAwesome name="clock-o" size={20} color="#000" style={styles.clockIcon} />
                </View>
                {errors.time && <Text style={styles.error}>{errors.time}</Text>}

                <TouchableOpacity style={styles.waterSubmitButton} onPress={handleSubmit}>
                    <Text style={styles.waterButtonText}>Save</Text>
                </TouchableOpacity>
            </ImageBackground>
            <Footer />
        </View>
    );
}

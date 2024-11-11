import React, { useState } from "react"; 
import { View, ImageBackground, TouchableOpacity, Text, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from "./styles";
import Footer from '../components/Footer';
import { ScrollView } from "react-native-gesture-handler";
import Menu from "../components/Menu";

const backgroundImage = require('../assets/images/GymwolfBackground.jpeg');

const AddSleep = () => {
    const navigation = useNavigation();

    const [duration, setDuration] = useState('');
    const [time, setTime] = useState('');
    const [sleepLogs, setSleepLogs] = useState([]); 
    const [errors, setErrors] = useState({});
    const [checked, setChecked] = useState('Nightly'); // Radio button state

    // Validation function
    const validateInputs = () => {
        let validationErrors = {};
        if (!duration) validationErrors.duration = "Duration is required";
        if (!time) validationErrors.time = "Time is required";
        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    const handleSubmit = () => {
        if (!validateInputs()) return;
        
        // Add new sleep log entry and navigate
        const newLog = { type: checked, duration, time };
        setSleepLogs([...sleepLogs, newLog]);
        navigation.navigate('SleepChart', { sleepLogs: [...sleepLogs, newLog] });

        // Clear inputs
        setDuration('');
        setTime('');
        setErrors({});
    };

    return (
        <View style={styles.content}>
            <ImageBackground source={backgroundImage} style={styles.image}>
                <Menu />
                <AntDesign name="arrowleft" size={30} color="#000" style={styles.backIcon} onPress={() => navigation.navigate('SleepChart')} />
                <Text style={styles.sleepTitle}>Add Sleep</Text>
                <ScrollView>
                <RadioButton.Group onValueChange={value => setChecked(value)} value={checked}>
                    <Text style={styles.sleepText}>Choose Type of Sleep</Text>
                    <View style={styles.radioButton}>
                        <View style={styles.radioButtonOutline}>
                            <RadioButton value="Nightly" uncheckedColor="white" color="black" />
                        </View>
                        <Text style={styles.rblabel}>Nightly</Text>
                    </View>
                    <View style={styles.radioButton}>
                        <View style={styles.radioButtonOutline}>
                            <RadioButton value="Nap" uncheckedColor="white" color="black" />
                        </View>
                        <Text style={styles.rblabel}>Nap</Text>
                    </View>
                </RadioButton.Group>
                
                    <Text style={styles.sleepInputText}>Duration</Text>
                    <View style={styles.inputCont}>
                        <TextInput
                            style={styles.sleepInput}
                            value={duration}
                            onChangeText={setDuration}
                            keyboardType="numeric"
                            placeholder="Enter duration"
                        />
                        <Text style={styles.sleepHours}>hrs</Text>
                    </View>
                    {errors.duration && <Text style={styles.error}>{errors.duration}</Text>}

                    <Text style={styles.sleepInputText}>Time</Text>
                    <View style={styles.inputCont}>
                        <TextInput
                            style={styles.sleepInput}
                            value={time}
                            onChangeText={setTime}
                            placeholder="Enter time"
                        />
                        <Icon name="clock-o" size={25} color="#000" style={{ marginLeft: 25 }} />
                    </View>
                    {errors.time && <Text style={styles.error}>{errors.time}</Text>}

                    <TouchableOpacity style={styles.sleepSubmit} onPress={handleSubmit}>
                        <Text style={styles.waterButtonText}>Save</Text>
                    </TouchableOpacity>
                </ScrollView>
            </ImageBackground>
            <Footer />
        </View>
    ); 
};

export default AddSleep;

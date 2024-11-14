import React, { useState } from "react"; 
import { View, ImageBackground, TouchableOpacity, Text, TextInput, Modal } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from "./styles";
import Footer from '../components/Footer';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ScrollView } from "react-native-gesture-handler";
import Menu from "../components/Menu";

const backgroundImage = require('../assets/images/GymwolfBackground.jpeg');

const AddSleep = () => {
    const navigation = useNavigation();

    const [duration, setDuration] = useState('');
    const [time, setTime] = useState('');
    const [sleepLogs, setSleepLogs] = useState([]); 
    const [errors, setErrors] = useState({});
    const [checked, setChecked] = useState('Nightly');
    const [showPicker, setShowPicker] = useState(false); 

    const validateInputs = () => {
        let validationErrors = {};
        if (!duration) validationErrors.duration = "Duration is required";
        if (!time) validationErrors.time = "Time is required";
        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    const handleSubmit = () => {
        if (!validateInputs()) return;
        
        const newLog = { type: checked, duration, time };
        setSleepLogs([...sleepLogs, newLog]);
        navigation.navigate('SleepChart', { sleepLogs: [...sleepLogs, newLog] });

        setDuration('');
        setTime('');
        setErrors({});
    };

    const onTimeChange = (event, selectedTime) => {
        setShowPicker(false); // Hide picker after selection
        if (selectedTime) {
            const formattedTime = selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            setTime(formattedTime); // Update time state with formatted time
        }
    };

    return (
        <View style={styles.content}>
            <ImageBackground source={backgroundImage} style={styles.image}>
                <Menu />
                <View style={styles.backIcon}>
                    <AntDesign name="arrowleft" size={30} color="#000" onPress={() => navigation.goBack()} /> 
                </View>
                
                <Text style={styles.sleepTitle}>Add Sleep</Text>
                <ScrollView>
                    <RadioButton.Group onValueChange={value => setChecked(value)} value={checked}>
                        <Text style={styles.waterText}>Choose Type of Sleep</Text>
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
                            style={styles.waterInput}
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
                        <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.sleepTimeContainer}>
                            <Text style={styles.waterInput}>{time || "Select time"}</Text>
                        </TouchableOpacity>
                        <Icon name="clock-o" size={25} color="#000" style={{ marginLeft: 25 }} />
                    </View>

                <Modal
                    transparent={true}
                    animationType="slide"
                    visible={showPicker}
                    onRequestClose={() => setShowPicker(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.timePickerSleepContainer}>
                            <DateTimePicker
                                value={new Date()}
                                mode="date"
                                display="default"
                                onChange={onTimeChange}
                            />
                        </View>
                    </View>
                </Modal>
                    {errors.time && <Text style={styles.error}>{errors.time}</Text>}

                    <TouchableOpacity style={styles.waterSubmitButton} onPress={handleSubmit}>
                        <Text style={styles.waterButtonText}>Save</Text>
                    </TouchableOpacity>
                </ScrollView>
                
            </ImageBackground>
            <Footer />
        </View>
    ); 
};

export default AddSleep;

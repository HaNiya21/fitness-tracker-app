import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { View, ImageBackground, TouchableOpacity, Text, TextInput, Modal } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from "./styles";
import DateTimePicker from '@react-native-community/datetimepicker';
import Footer from '../components/Footer';
import { ScrollView } from "react-native-gesture-handler";
import Menu from '../components/Menu';
import '../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import HeaderLogo from "../components/headerLogo";

const backgroundImage = require('../assets/images/GymwolfBackground.jpeg');

export default function WaterIntake() {
  const navigation = useNavigation();
  const [amount, setAmount] = useState('');  // Water intake amount
  const [waterLog, setWaterLog] = useState([]);  // Store water intake logs in an array
  const [time, setTime] = useState('');      // Time of intake
  const [errors, setErrors] = useState({});  // Storing validation errors
  const [showPicker, setShowPicker] = useState(false); // Show time picker

  const { t, i18n } = useTranslation();

  // Validation logic for amount and time
  const validateInputs = () => {
    let errors = {};
    if (!amount) errors.amount = t('Amount is required');
    if (!time) errors.time = t('Time is required');
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateInputs()) return;
    
    // Add the new log to the existing logs
    setWaterLog([...waterLog, { amount, time }]);
    navigation.navigate('WaterChart', { waterLog: [...waterLog, { amount, time }] });
    
    // Clear input fields for next entry
    setAmount('');
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

      <View>
          <HeaderLogo />
      </View>
        <Menu />
      
      <View style={styles.backIcon}>
        <AntDesign name="arrowleft" size={30} color="#000" onPress={() => navigation.goBack()} /> 
      </View>
       
        <Text style={styles.waterTitle}>{t('Add Water')}</Text>
        <ScrollView>
        <Text style={styles.waterText}>{t('Amount')}</Text>
        <View style={styles.inputCont}>
          <TextInput
            style={styles.waterInput}
            value={amount}
            keyboardType="numeric"
            onChangeText={setAmount}
            placeholder={t('Enter amount')}
          />
          <Text style={styles.waterOz}>oz</Text>
        </View>
        {errors.amount && <Text style={styles.error}>{errors.amount}</Text>}

        <Text style={styles.waterText}>{t('Time')}</Text>
        <View style={styles.inputCont}>
        <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.sleepTimeContainer}>
          <Text style={styles.waterInput}>{time || t('Select time')}</Text>
        </TouchableOpacity>
        <Modal
                    transparent={true}
                    animationType="slide"
                    visible={showPicker}
                    onRequestClose={() => setShowPicker(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.timePickerWaterContainer}>
                            <DateTimePicker
                                value={new Date()}
                                mode="time"
                                display="default"
                                onChange={onTimeChange}
                            />
                        </View>
                    </View>
                </Modal>
          <FontAwesome name="clock-o" size={25} color="#000" style={{ marginLeft: 10 }} />
        </View>
        {errors.time && <Text style={[styles.error, {marginLeft: 30}]}>{errors.time}</Text>}

        <TouchableOpacity style={styles.waterSubmitButton} onPress={handleSubmit}>
          <Text style={styles.waterButtonText}>{t('Save')}</Text>
        </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
      <Footer />
    </View>
  );
}

import { useState } from "react";
import { View, TextInput, ImageBackground, TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";
import Footer from '../components/Footer.js';
import Menu from '../components/Menu.js';
import '../assets/i18n/i18n.js'
import { useTranslation } from 'react-i18next';

const backgroundImage = require('../assets/images/GymwolfBackground.jpeg');

export default function WaterChart({ route }) {
  const { waterLog = [] } = route.params || {};
  const [goal, setGoal] = useState(''); // State to store user input
  const [goalSet, setGoalSet] = useState(false); // State to track if goal is set

  const {t, i18n} = useTranslation();

  const handleChange = (text) => {
    setGoal(text); // Update the state as the user types
  };

  const handleSetGoal = () => {
    if (goal.trim() !== '') {
      setGoalSet(true); // Mark goal as set
    }
  };

  const navigation = useNavigation();

  return (
    <View style={styles.content}>
        <ImageBackground source={backgroundImage} style={styles.image}>
            <Menu />    

        {!goalSet ? (
          <>
            <Text style={styles.goalText}>{t('Log Water Intake')}</Text>
            <View style={styles.droplets}>
              <View>
                <TextInput
                  style={styles.goalInput}
                  placeholder={t('Enter Goal')}
                  value={goal} // Bind the input value to state
                  onChangeText={handleChange} // Update state as the user types
                  keyboardType="numeric"
                />
              </View>
              <View>
                <TouchableOpacity style={styles.setGoalButton} onPress={handleSetGoal}>
                  <Text style={styles.goalButtonText}>{t('Set')}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : (
          <Text style={styles.goalText}>{t('Goal Set')}: {goal} oz</Text>
        )}

        <View style={styles.waterChart}>
          <Text style={styles.waterChartTitle}>{t('Water Chart')}</Text>
          <View style={styles.waterChartTitles}>
            <Text style={styles.waterChartText}>{t('Time')}</Text>
            <Text style={styles.waterChartText}>{t('Amount (oz)')}</Text>
          </View>
          {waterLog.map((log, index) => (
            <View key={index} style={styles.waterChartValues}>
              <Text style={{marginRight: 30}}>{log.time}</Text>
              <Text style={{marginRight: 30}}>{log.amount}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.waterSubmitButton} onPress={() => navigation.navigate('WaterIntake')}>
          <Text style={[styles.waterButtonText, 
                        {fontSize: i18n.language === 'es' ? 18: 20}]}>{t('Add Water')}</Text>
        </TouchableOpacity>
      </ImageBackground>
      <Footer />
    </View>
  );
}

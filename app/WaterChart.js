import { useState } from "react";
import { useEffect } from "react";
import { View, TextInput, ImageBackground, TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";
import Footer from "./Footer";

const backgroundImage = require('../assets/images/GymwolfBackground.jpeg');

export default function WaterChart({ route }) {

    useEffect(() => {
        console.log('Route object mounted', route);
    }, [route]);

    const { amount = 'No amount provided!', time = 'No time provided!' } = route?.params || {};
    console.log('Amount:', amount);
    console.log('Time:', time);

    console.log('Route object:', route);

    const [goal, setGoal] = useState(''); // State to store user input
    const [goalSet, setGoalSet] = useState(false); // State to track if goal is set

    const handleChange = (text) => {
    setGoal(text); // Update the state as the user types
    };

    const handleSetGoal = () => {
        if (goal.trim() !== '') {
        setGoalSet(true); // Mark goal as set
        }
    };

    // const handlePrint = () => {
    //     console.log(goal); // Log the current value of goal
    // };

    const navigation = useNavigation();

    return (
    <View style={styles.content}>
        <ImageBackground source={backgroundImage} style={styles.image}>
        {!goalSet ? (
            <>
            <Text style={styles.goalText}>Log Water Intake</Text>
            <View style={styles.droplets}>
                <View>
                    <TextInput
                        style={styles.goalInput}
                        placeholder="Enter Goal"
                        value={goal} // Bind the input value to state
                        onChangeText={handleChange} // Update state as the user types
                        keyboardType="numeric"
                    />
                </View> 
                <View>
                    <TouchableOpacity style={styles.setGoalButton} onPress={handleSetGoal}>
                        <Text style={styles.goalButtonText}>Set</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </>
        ) : (
            <Text style={styles.goalText}>Goal Set: {goal} oz</Text>
        )}

        <View style={styles.waterChart}>
            <View>
                <Text style={styles.waterChartTitle}>Water Chart</Text>
                <View style={styles.waterChartTitles}>
                    <Text style={styles.waterChartText}>Time</Text>
                    <Text style={styles.waterChartText}>Amount (oz)</Text>
                </View>
                <View style={styles.waterChartValues}>
                    <Text>{time}</Text>
                    <Text>{amount}</Text>
                </View> 
            </View>
        </View> 

        <TouchableOpacity style={styles.waterSubmitButton} onPress={() => navigation.navigate('WaterIntake')}>
            <Text style={styles.waterButtonText}>Add Water</Text>
        </TouchableOpacity>
    </ImageBackground>
    <Footer />
    </View>
    );  
};

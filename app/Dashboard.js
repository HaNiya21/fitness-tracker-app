import React, { useState } from "react";
import { View, ImageBackground, TouchableOpacity, Text, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from "./styles";
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import { FlatList } from 'react-native-gesture-handler';

const backgroundImage = require('../assets/images/GymwolfBackground.jpeg');

const Dashboard = () => {
    // Mock data for testing    
    const exerciseData = [
        { name: 'Push-up', time: '10 min' },
        { name: 'Sit-up', time: '15 min' },
        { name: 'Squats', time: '20 min' },
    ];

    const sleepData = [
        { date: '2021-09-01', hours: '8' },
        { date: '2021-09-02', hours: '7' },
        { date: '2021-09-03', hours: '6' },
    ];

    const waterData = [
        { date: '2021-09-01', amount: '8 cups' },
        { date: '2021-09-02', amount: '7 cups' },
        { date: '2021-09-03', amount: '6 cups' },
    ];

    // Function to add a new exercise (just for testing)
    const addExercise = (exercise) => {
        exerciseData.push(exercise);
    };

    // Function to render each item in the list
    const renderItem = (item, type) => {
        return (
            <View style={styles.item}>
                {type === 'Exercise' && (
                    <Text style={styles.itemText}>{item.name} - {item.time}</Text>
                )}
                {type === 'Sleep' && (
                    <Text style={styles.itemText}>{item.date} - {item.hours} hours</Text>
                )}
                {type === 'Water' && (
                    <Text style={styles.itemText}>{item.date} - {item.amount}</Text>
                )}
            </View>
        );
    };
    
    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
          <View style={styles.container}>
            {/* Add the Menu component */}
            <Menu />
    
            <Text style={styles.title}>Dashboard</Text>
    
            <Text style={styles.subtitle}>Exercises:</Text>
            <FlatList
              data={exerciseData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => renderItem(item, 'Exercise')}
            />
    
            <Text style={styles.subtitle}>Sleep Records:</Text>
            <FlatList
              data={sleepData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => renderItem(item, 'Sleep')}
            />
    
            <Text style={styles.subtitle}>Water Intake:</Text>
            <FlatList
              data={waterData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => renderItem(item, 'Water')}
            />
    
            <TouchableOpacity style={styles.addButton} onPress={() => addExercise({ name: 'Push-up', time: '10 min' })}>
              <Text style={styles.buttonText}>Add Exercise</Text>
            </TouchableOpacity>
    
            <Footer />
          </View>
        </ImageBackground>
      );
    };
     

export default Dashboard;


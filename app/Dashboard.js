import React, { useState, useRef } from "react";
import { View, ImageBackground, TouchableOpacity, Text, Animated } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from "./styles";
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import StepCounter from "./Pedometer";
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import AddPopup from '../components/AddPopup';
import { Pedometer } from "expo-sensors";
//import { useRef } from "react";

const backgroundImage = require('../assets/images/GymwolfBackground.jpeg');

const Dashboard = () => {
    // State to control popup visibility
    const [isPopupVisible, setPopupVisible] = useState(false);

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

    // Function to open popup
    const openPopup = () => {
        setPopupVisible(true);
    };

    // Function to close popup
    const closePopup = () => {
        setPopupVisible(false);
    };

    const scrollY = useRef(new Animated.Value(0)).current;

    const flatListRefs = [useRef(null), useRef(null)];

    const syncScroll = (index) => {
      return Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        {
          useNativeDriver: false,
          listener: (event) => {
            const offset = event.nativeEvent.contentOffset.y;
            flatListRefs.forEach((ref, i) => {
              if (i !== index && ref.current) {
                ref.current.scrollToOffset({ offset, animated: false });
              }
            });
          },
        }
      );
    };

    // Function to render each item in the list
    const renderItem = (item, type) => {
        return (
            <View style={styles.item}>
                {type === 'Exercise' && (
                    <Text style={styles.subtitle}>Exercises:</Text>
                ) && (
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

    const renderList = (data, index, type) => (
      <Animated.FlatList
        ref={flatListRefs[index]}
        data={data}
        renderItem={({ item }) => renderItem(item, type)}
        keyExtractor={(item) => item}
        style={styles.flatList}
        onScroll={syncScroll(index)}
        scrollEventThrottle={16}
      />
    );

    return (
      <View style={styles.content}>
        <ImageBackground source={backgroundImage} style={styles.image}>
            {/* Add the Menu component */}
            <Menu />
            <Text style={styles.title}>Dashboard</Text>
            {/* <FlatList> */}
              <StepCounter />
            
            <Text style={styles.subtitle}>Exercises:</Text>
            {renderList(exerciseData, 0, 'Exercise')}
            {renderList(sleepData, 1, 'Sleep')}
            {renderList(waterData, 2, 'Water')}

            {/* <FlatList
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

            <Text style={styles.subtitle}>Water Intake:</Text>
            <FlatList
              data={waterData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => renderItem(item, 'Water')}
            /> */}

            {/* Button to add a new exercise (just for testing) */}
            <TouchableOpacity style={styles.addButton} onPress={() => addExercise({ name: 'Push-up', time: '10 min' })}>
              <Text style={styles.buttonText}>Add Exercise</Text>
            </TouchableOpacity>
            
            {/* Floating Button to open the popup */}
            <TouchableOpacity style={styles.floatingButton} onPress={openPopup}>
              <Text style={styles.floatingButtonText}>+</Text>
            </TouchableOpacity>

            {/* Add Popup */}
            <AddPopup visible={isPopupVisible} onClose={closePopup} />
            {/* </FlatList> */}
          </ImageBackground>
        <Footer />
      </View>
  );
};

export default Dashboard;

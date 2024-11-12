import React, { useState, useRef } from 'react';
import { View, ImageBackground, TouchableOpacity, Text, Animated } from 'react-native';
import { Pedometer } from 'expo-sensors';
import styles from './styles';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import StepCounter from './Pedometer';
import AddPopup from '../components/AddPopup';

const backgroundImage = require('../assets/images/GymwolfBackground.jpeg');

const Dashboard = () => {
  const [isPopupVisible, setPopupVisible] = useState(false); // Popup visibility state
  const [exerciseData, setExerciseData] = useState([
    { name: 'Push-up', time: '10 min' },
    { name: 'Sit-up', time: '15 min' },
    { name: 'Squats', time: '20 min' },
  ]);

  const flatListRefs = useRef([]);

  const openPopup = () => setPopupVisible(true); // Function to open popup
  const closePopup = () => setPopupVisible(false); // Function to close popup

  const addExercise = (exercise) => {
    setExerciseData((prev) => [...prev, exercise]);
  };

  const syncScroll = (index) => (event) => {
    const scrollOffset = event.nativeEvent.contentOffset.y;
    flatListRefs.current.forEach((ref, refIndex) => {
      if (refIndex !== index && ref?.current) {
        ref.current.scrollToOffset({ offset: scrollOffset, animated: false });
      }
    });
  };

  const renderItem = ({ item }, type) => (
    <View style={styles.item}>
      {type === 'Exercise' && <Text style={styles.itemText}>{item.name} - {item.time}</Text>}
    </View>
  );

  const renderList = (data, index, type) => (
    <Animated.FlatList
      ref={(ref) => (flatListRefs.current[index] = ref)}
      data={data}
      renderItem={(item) => renderItem(item, type)}
      keyExtractor={(item, index) => index.toString()}
      style={styles.flatList}
      onScroll={syncScroll(index)}
      scrollEventThrottle={16}
    />
  );

  return (
    <View style={styles.content}>
      <ImageBackground source={backgroundImage} style={styles.image}>
        <Menu />
        <Text style={styles.title}>Dashboard</Text>
        <StepCounter />

        <Text style={styles.subtitle}>Exercises:</Text>
        {renderList(exerciseData, 0, 'Exercise')}

        <TouchableOpacity style={styles.addButton} onPress={() => addExercise({ name: 'Push-up', time: '10 min' })}>
          <Text style={styles.buttonText}>Add Exercise</Text>
        </TouchableOpacity>

        {/* Floating button to open the popup */}
        <TouchableOpacity style={styles.floatingButton} onPress={openPopup}>
          <Text style={styles.floatingButtonText}>+</Text>
        </TouchableOpacity>

        {/* Popup component */}
        <AddPopup visible={isPopupVisible} onClose={closePopup} />
      </ImageBackground>
      <Footer />
    </View>
  );
};

export default Dashboard;

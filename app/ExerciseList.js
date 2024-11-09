import React from 'react';
import { View, ScrollView, StyleSheet, ImageBackground, Text } from 'react-native';
import Card from '../components/Card';
import styles from "./styles";

const backgroundImage = require('../assets/images/GymwolfBackground.jpeg');

export default function ExerciseList() {
  return (
     <ImageBackground 
            source={backgroundImage} 
            style={styles.image} 
            resizeMode="cover"
    > 
      <Text style={style.exerciseTitle}>Exercise List</Text>
        <ScrollView contentContainerStyle={style.container}>
     
        
        <View style={style.row} >
            <Card
                title="Chest"
                // description="Experience the most beautiful sunset from this viewpoint."
                image="../assets/images/chest_exercise.jpg"
            />
            <Card
                 title="Biceps"
                // description="A thrilling adventure awaits you in the mountains."
                image="../assets/images/bicep_exercise.jpg"
            />
        </View>

        <View style={style.row}>
            <Card
                title="Triceps"
                // description="Explore the vibrant nightlife in the city."
                image="../assets/images/tricep_exercise.jpg"
            />
            <Card
                title="Back"
                // description="Explore the vibrant nightlife in the city."
                image="../assets/images/back_exercise.jpg"
            />
        </View>

        <View style={style.row}>
            <Card
                title="Shoulder"
                // description="Explore the vibrant nightlife in the city."
                image="../assets/images/shoulder_exercise.jpg"
            />
            <Card
                title="Legs"
                // description="Explore the vibrant nightlife in the city."
                image="../assets/images/leg_exercise.jpg"
            />
        </View>

        <View style={style.row}>
            <Card
                title="Abdominal"
                // description="Explore the vibrant nightlife in the city."
                image="../assets/images/abdominal_exercise.jpg"
            />
            <Card
                title="Cardio"
                // description="Explore the vibrant nightlife in the city."
                image="../assets/images/cardio_exercise.jpg"
            />
        </View>
      
      </ScrollView>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 16,
  },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:10,
    },

  exerciseTitle: {
      fontSize: 35,
      paddingTop: 150,
      marginBottom: 5,
      //fontWeight: 'bold',
      fontFamily: 'Koulen-Regular',
      color: '#0F2951',
      marginTop: 30,
      textAlign: 'center',
  },
});

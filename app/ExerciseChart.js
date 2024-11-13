import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, ImageBackground } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Footer from "../components/Footer";

const backgroundImage = require("../assets/images/GymwolfBackground.jpeg");

// Sample JSON data
const exerciseData = {
  "weeklyDetails": {
    "weekRange": "SEPT 15 - 21",
    "days": [
      {
        "day": "Monday",
        "exercises": [
          {
            "type": "Run",
            "time": "2 hr",
            "distance": "5 miles"
          }
        ]
      },
      {
        "day": "Wednesday",
        "exercises": [
          {
            "type": "Workout",
            "time": "1 hr"
          },
          {
            "type": "Run",
            "time": "1 hr",
            "distance": "0.5 miles"
          }
        ]
      },
      {
        "day": "Friday",
        "exercises": [
          {
            "type": "Swim",
            "time": "1 hr 13 min",
            "distance": "1.6 yards"
          },
          {
            "type": "Run",
            "time": "45 min",
            "distance": "1.5 miles"
          }
        ]
      },
      {
        "day": "Saturday",
        "exercises": [
          {
            "type": "Run",
            "time": "1.5 hr",
            "distance": "5 miles"
          },
          {
            "type": "Swim",
            "time": "1 hr 13 min",
            "distance": "1.6 yards"
          }
        ]
      }
    ]
  }
};

export default function ExerciseChart() {
  const [data, setData] = useState(exerciseData);
  const navigation = useNavigation();

  return (
    <View style={styles.content}>
      <ImageBackground source={backgroundImage} style={styles.image}>
        <Text style={{marginTop: 120, left:50 }}>Weekly Details</Text>
        <Text style={{ left:50, top:40 }}>{data.weeklyDetails.weekRange}</Text>
        
        <ScrollView style={{ left: 50, top: 100}}>
          {data.weeklyDetails.days.map((dayData, index) => (
            <View key={index} style={styles.dayContainer}>
              <Text style={styles.dayName}>{dayData.day}</Text>
              {dayData.exercises.map((exercise, exIndex) => (
                <View key={exIndex} style={styles.exerciseContainer}>
                  <Text style={styles.exerciseType}>{exercise.type}</Text>
                  <Text style={styles.exerciseDetail}>
                    Time: {exercise.time}
                    {exercise.distance && ` | Distance: ${exercise.distance}`}
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </ScrollView>

        <Footer />
      </ImageBackground>
    </View>
  );
}

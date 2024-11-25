import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Footer from "../components/Footer";
import HeaderLogo from "../components/headerLogo";
import Menu from "../components/Menu";

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
            "distance": "5 miles",
            "icon" : "run"
          }
        ]
      },
      {
        "day": "Wednesday",
        "exercises": [
          {
            "type": "Workout",
            "time": "1 hr"
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
          }
        ]
      }
    ]
  }
};

export default function ExerciseChart({route}) {

  const [data, setData] = useState(exerciseData);
  const navigation = useNavigation();
  const [isPrevWeek, setIsPrevWeek] = useState(false);

  const { exerciseLogs = [] } = route.params || {};

  //const currentWeekData = isPrevWeek ? yesterdayExerciseData : dailyExerciseData;

  // Function to handle left arrow click
  const handleLeftArrow = () => {
    setIsPrevWeek(true);
  };

  // Function to handle right arrow click
  const handleRightArrow = () => {
    setIsPrevWeek(false);
  };

  return (
    <>
      <ImageBackground source={backgroundImage} style={styles.image}>
        <View>
          <HeaderLogo />
        </View>
        <Menu />
      {/* Back Arrow */}
        <View style={styles.backIcon}>
          <AntDesign name="arrowleft" size={30} color="#000" onPress={() => navigation.goBack()} /> 
        </View>
        <View>
          <Text style={{marginTop: 4, marginHorizontal:50, fontSize: hp(2.3), textAlign: 'center', fontFamily: 'Roboto', fontWeight: 'bold' }}>Weekly Details</Text> 
        </View>
        

        {/* Previous and Next arrow button */}
        <View style= {{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingBottom: 4}}>
          <View style={styles.prevIcon}>
              <Ionicons 
                name="chevron-back-outline" 
                size={25} color="#000" 
                onPress={() => handleLeftArrow()} 
              />
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{paddingTop: 35, fontFamily: 'Koulen-Regular', fontSize: hp(3.5)}}>{isPrevWeek ? 'SEPT 08 - 14' : 'SEPT 15 - 21'}</Text>
          </View>
          <View style={styles.prevIcon}>
              <Ionicons 
                name="chevron-forward-outline" 
                size={25} color="#000" 
                onPress={() => handleRightArrow()} 
              />
          </View>
        </View>

        {/* <Text style={{ left:50, top:40 }}>{data.weeklyDetails.weekRange}</Text> */}

        
        {/* <Text style={styles.title}>Weekly Details</Text>
        <Text style={styles.weekRange}>{data.weeklyDetails.weekRange}</Text> */}
        
        <ScrollView style={{top: 50}} showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 150}} >

          {isPrevWeek ? (
            data.weeklyDetails.days.map((dayData, index) => (
              <View key={index} style={[styles.dashboardContainers, {paddingBottom:10}]}>
                <Text style={{fontFamily: 'Roboto', fontSize: 18, color: 'black', marginHorizontal: 10}}>{dayData.day}</Text>
                {dayData.exercises.map((exercise, exIndex) => (
                  <View key={exIndex} style={{paddingTop: 20, textAlign: 'left'}}> 
                                  
                    <View style={styles.textContainer}>   
                      <Text style={{fontWeight: '500'}}>{exercise.type} </Text>
                      <Text>Time: {exercise.time} {exercise.distance && `| Distance: ${exercise.distance}`}</Text>
                      
                    </View>
                  </View>
                ))}
              </View>
          ))   
          ): (
            exerciseLogs.map((log, index) => (
              <View key={index} style={[styles.dashboardContainers, {paddingBottom:10}]}>
                <Text style={{fontFamily: 'Roboto', fontSize: 18, color: 'black', marginHorizontal: 10}}>Sunday</Text>
                
                  <View key={index} style={{paddingTop: 20, textAlign: 'left'}}> 
                                  
                    <View style={styles.textContainer}>   
                      <Text style={{fontWeight: '500'}}>{log.activity} </Text>
                      <Text>Duration: {log.duration} mins {log.distance && `| Distance: ${log.distance}`} kms</Text>
                      
                    </View>
                  </View>
             
              </View>
            ))
          )}
          <TouchableOpacity style={styles.waterSubmitButton} onPress={() => navigation.navigate('AddExercise')}>
          <Text style={[styles.waterButtonText, 
                        {fontSize: 20}]}>Add Exercise</Text>
         </TouchableOpacity>
        </ScrollView>

        <Footer />
      </ImageBackground>
    </>
  );
}

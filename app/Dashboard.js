import React, { useState, useRef } from 'react';
import { View, ImageBackground, TouchableOpacity, Text, Animated, Pressable } from 'react-native';
import { Pedometer } from 'expo-sensors';
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-virtualized-view';
import styles from './styles';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import StepCounter from './Pedometer';
import AddPopup from '../components/AddPopup';
import { dailyExerciseData } from '../constants/dailyExerciseData';
import {yesterdayExerciseData} from '../constants/yesterdayExerciseData';
import '../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import HeaderLogo from '../components/headerLogo';



const backgroundImage = require('../assets/images/GymwolfBackground.jpeg');

const Dashboard = () => {

  // Popup related states
  const [isPopupVisible, setPopupVisible] = useState(false); // Popup visibility state
  const openPopup = () => setPopupVisible(true); // Function to open popup
  const closePopup = () => setPopupVisible(false); // Function to close popup

  const { t, i18n } = useTranslation();

  // const [exerciseData, setExerciseData] = useState([
  //   { name: 'Swim', duration: '10 min', distance: '5 yards', icon: 'swim', date: 'today' },
  //   { name: 'Walk', duration: '45 min', distance: '10 km', icon: 'walk', date:'yesterday' },
  //   { name: 'Run', duration: '20 min', distance: '2 km', icon: 'run' },
  // ]);

  // const syncScroll = (index) => (event) => {
  //   const scrollOffset = event.nativeEvent.contentOffset.y;
  //   flatListRefs.current.forEach((ref, refIndex) => {
  //     if (refIndex !== index && ref?.current) {
  //       ref.current.scrollToOffset({ offset: scrollOffset, animated: false });
  //     }
  //   });
  // };

  // const addExercise = (exercise) => {
  //   setExerciseData((prev) => [...prev, exercise]);
  // };

  // const flatListRefs = useRef([]);

  // const [dayIndex, setDayIndex] = useState(0); // Default to the current day

  const navigation = useNavigation();

  const [isYesterday, setIsYesterday] = useState(false);

  const currentDayData = isYesterday ? yesterdayExerciseData : dailyExerciseData;

  // // Function to handle left arrow click
  const handleLeftArrow = () => {
    setIsYesterday(true);
  };

  // Function to handle right arrow click
  const handleRightArrow = () => {
    setIsYesterday(false);
  };

  //const currentDayData = dailyExerciseData;

  console.log(yesterdayExerciseData);

  const renderItem = ({ item }) => {
    
      return (
        <View style={styles.item}>
        
        <View style={styles.iconContainer}> 
          <MaterialCommunityIcons name= {item.icon} size= {30} /> 
        </View>
        <View style={styles.textContainer}> 
          <Text style={{fontWeight: '500'}}>{t(item.name)} </Text>
          <Text>{item.duration} | {item.distance} </Text>
        </View>
        
      </View>
      )
};
  

  const renderList = (data, type) => (
    <Animated.FlatList
      //ref={(ref) => (flatListRefs.current[index] = ref)}
      data={data}
      renderItem={(item) => renderItem(item, type)}
      keyExtractor={(item) => item.name}
      //style={styles.flatList}
      //onScroll={syncScroll(index)}
      //scrollEventThrottle={16}
    />
  );

  return (
    <>
    {/* <View style={styles.content}> */}
      <ImageBackground 
        source={backgroundImage} 
        style={styles.image} 
        resizeMethod='cover'
      >
      <View>
        <HeaderLogo />  
      </View>
        <Menu />
      {/* Hello, Username */}
        <Text 
          style={{
            fontFamily: 'Roboto', 
            fontSize: hp(3), 
            letterSpacing: 1, 
            paddingTop: 100, 
            marginTop: 20, 
            marginHorizontal: 32
          }}
        >
          {t('Hello')}, <Text style={{fontWeight: 'bold'}}>Justin</Text>
        </Text>

      {/* Previous arrow button */}
        <View style= {styles.item}>
          <View style={styles.prevIcon}>
              <Ionicons 
                name="chevron-back-outline" 
                size={25} color="#000" 
                onPress={() => handleLeftArrow()} 
              />
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{paddingTop: 35, fontFamily: 'Koulen-Regular', fontSize: hp(3.5)}}>{isYesterday ? t('Yesterday') : t('Today')}</Text>
          </View>
          <View style={styles.prevIcon}>
              <Ionicons 
                name="chevron-forward-outline" 
                size={25} color="#000" 
                onPress={() => handleRightArrow()} 
              />
          </View>
        </View>
        
        
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 100}}
        >
          <StepCounter /> 
          
        {/* Sleep data */}
          <Text style={[styles.dashText ,{ fontFamily: i18n.language === 'es' ? 'Trebuchet MS' : 'Koulen-Regular',
                                           fontSize: i18n.language === 'es' ? 19 : hp(2.3),
                                           letterSpacing: i18n.language === 'es' ? -1 :  0,
                                           fontWeight: i18n.language === 'es' ? 'bold' : 'regular'}]}> {t('SLEEP')}</Text>
          <Pressable onPress={() => navigation.navigate('SleepChart')}>
          <View style={styles.dashboardContainers}>
            <View style={styles.dashboardValueContainer}>
              <Text style={{fontFamily: 'Roboto', fontSize: 18, color: 'black', marginHorizontal: 10}}>{t('Sleep Duration')}</Text>
              <View style= {{width: wp(77), height: 1, backgroundColor: 'black', marginHorizontal: 5}} />
              <View style={{fontFamily: 'Roboto', fontSize: hp(16), color: 'black'}}>
                <View style={styles.item}>
        
                        <View style={styles.iconContainer}> 
                          <MaterialCommunityIcons name= "bed" size= {30} /> 
                        </View>

                        {isYesterday ? 
                        <View style={styles.textContainer}> 
                          <Text style={{fontWeight: '500'}}>{t('Nightly')}</Text>
                          <Text>10:30 pm | 8 hrs </Text>
                        </View>
                    
                        :
                        <View style={styles.textContainer}> 
                          <Text style={{fontWeight: '500'}}>{t('Nightly')}</Text>
                          <Text>12:00 am | 7 hrs </Text>
                        </View>
                       }
                </View>
              </View>
            </View>
          </View>
          </Pressable>

        {/* Activity data */}
          <Text style={styles.dashText}>{t('ACTIVITY')}</Text>
          <Pressable onPress={() => {navigation.navigate('ExerciseChart')}}>
            <View style={styles.dashboardContainers}>
              <View style={styles.dashboardValueContainer}>
                <Text style={{fontFamily: 'Roboto', fontSize: 18, color: 'black', marginHorizontal: 10}}>{t('Exercises')}</Text>
                <View style= {{width: wp(77), height: 1, backgroundColor: 'black', marginHorizontal: 5}} />
                <View style={{fontFamily: 'Roboto', fontSize: hp(16), color: 'black'}}>{renderList(currentDayData)}</View>
              </View>
            </View>
          </Pressable>
          

        {/* Nutrition data */}
          <Text style={styles.dashText}>{t('NUTRITION')}</Text>
          <Pressable onPress={() => {navigation.navigate('WaterChart')}}>
            <View style={styles.dashboardContainers}>
              <View style={styles.dashboardValueContainer}>
                <Text style={{fontFamily: 'Roboto', fontSize: 18, color: 'black', marginHorizontal: 10}}>{t('Water')}</Text>
                <View style= {{width: wp(77), height: 1, backgroundColor: 'black', marginHorizontal: 5}} />
                <View style={{fontFamily: 'Roboto', fontSize: hp(16), color: 'black'}}>
                  <View style={styles.item}>
                    <View style={styles.iconContainer}> 
                      <Ionicons name= "water" size= {30} /> 
                    </View>
                  {isYesterday ? 
                    <View style={styles.textContainer}> 
                      <Text style={{fontWeight: '500'}}>Total water intake</Text>
                        <Text>100 oz </Text>
                      </View>
                      
                  :
                    <View style={styles.textContainer}> 
                      <Text style={{fontWeight: '500'}}>{t('Total water intake')} </Text>
                        <Text>91 oz </Text>
                      </View>
                  }
                  </View>
                </View>                   
              </View>
            </View>
          </Pressable>
           
        </ScrollView>
        

       

        {/* <TouchableOpacity style={styles.addButton} onPress={() => addExercise({ name: 'Push-up', time: '10 min' })}>
          <Text style={styles.buttonText}>Add Exercise</Text>
        </TouchableOpacity> */}

        {/* Floating button to open the popup */}
        <TouchableOpacity style={styles.floatingButton} onPress={openPopup}>
          <Text style={styles.floatingButtonText}>+</Text>
        </TouchableOpacity>

        {/* Popup component */}
        <AddPopup visible={isPopupVisible} onClose={closePopup} />
      </ImageBackground>
      <View>
        <Footer />
      </View>
    </>
  );
};

export default Dashboard;

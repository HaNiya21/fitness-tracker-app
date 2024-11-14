import React from 'react';
import { View, ScrollView, StyleSheet, ImageBackground, Text, FlatList, Pressable, Image } from 'react-native';

import styles from "./styles";
import Footer from '../components/Footer';
import BodyPartCard from '../components/BodyPartCard';
import { bodyParts } from '../constants/bodyParts';
import Menu from '../components/Menu';
import HeaderLogo from '../components/headerLogo';

import '../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';


const backgroundImage = require('../assets/images/GymwolfBackground.jpeg');


export default function ExerciseBodyPart() {

    const { t, i18n } = useTranslation();

  return (
    <>
     <ImageBackground 
            source={backgroundImage} 
            style={styles.image} 
            resizeMode="cover"
     > 
    <View>
        <HeaderLogo />
    </View>
     <Menu />
        <Text style={style.exerciseTitle}>{t('Exercises')}</Text>

        <View style={{flex: 1, marginHorizontal: 20}}>
            <FlatList
            data={bodyParts}
            numColumns={2}
            keyExtractor={item => item.name}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 100, paddingTop: 20}}
            columnWrapperStyle={{
                justifyContent: 'space-between'
            }}
            renderItem={({ item, index }) => <BodyPartCard item={item} index={index} />}
            />
        </View>
      
 {/*     <ScrollView contentContainerStyle={style.exerciseContainer}>
      
        
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
        <View style={{paddingBottom: 70}}>

        </View> 
      </ScrollView> */}
    </ImageBackground>
    <View>
        <Footer />
    </View>
    
    </>
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
      paddingTop: 100,
      marginBottom: 5,
      fontWeight: 'semibold',
      fontFamily: 'Koulen-Regular',
      color: '#0F2951',
      marginTop: 30,
      textAlign: 'center',
  },
});

import React from 'react';
import { View, ScrollView, StyleSheet, ImageBackground, Text, FlatList } from 'react-native';
import Card from '../components/Card';
import styles from "./styles";
import Footer from '../components/Footer';
import { trainerList } from '../constants/trainerlist';
import Menu from '../components/Menu';
import TrainersCard from '../components/TrainersCard';
import '../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import HeaderLogo from '../components/headerLogo';

const backgroundImage = require('../assets/images/GymwolfBackground.jpeg');

export default function TrainerList() {

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

        <Text style={style.exerciseTitle}>{t('Our Trainers')}</Text>

        <View style={{flex: 1, marginHorizontal: 20}}>
            <FlatList
            data={trainerList}
            numColumns={2}
            keyExtractor={item => item.name}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 100, paddingTop: 20}}
            columnWrapperStyle={{
                justifyContent: 'space-between'
            }}
            renderItem={({ item, index }) => <TrainersCard item={item} index={index} />}
            />
        </View>
            {/* <ScrollView contentContainerStyle={style.container}>
        
            
            <View style={style.row} >
                <Card
                    title="Helis Reign"
                    // description="Experience the most beautiful sunset from this viewpoint."
                    image="../assets/images/trainers/trainer_1.jpg"
                />
                <Card
                    title="Sarah Smith"
                    // description="A thrilling adventure awaits you in the mountains."
                    image="../assets/images/trainers/trainer_2.jpg"
                />
            </View>

            <View style={style.row}>
                <Card
                    title="Lorel McDowell"
                    // description="Explore the vibrant nightlife in the city."
                    image="../assets/images/trainers/trainer_3.jpg"
                />
                <Card
                    title="Erik Kalmus"
                    // description="Explore the vibrant nightlife in the city."
                    image="../assets/images/trainers/trainer_4.jpg"
                />
            </View>

            <View style={style.row}>
                <Card
                    title="Agne Kask"
                    // description="Explore the vibrant nightlife in the city."
                    image="../assets/images/trainers/trainer_5.jpg"
                />
                <Card
                    title="Sim Savisaar"
                    // description="Explore the vibrant nightlife in the city."
                    image="../assets/images/trainers/trainer_6.jpg"
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
      //fontWeight: 'bold',
      fontFamily: 'Koulen-Regular',
      color: '#0F2951',
      marginTop: 30,
      textAlign: 'center',
  },
});

import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import '../assets/i18n/i18n';
import { useTranslation } from "react-i18next";
import HeaderLogo from "../components/headerLogo";

const backgroundImage = require("../assets/images/GymwolfBackground.jpeg");

export default function SleepChart({ route }) {
    
    const { sleepLogs = [] } = route.params || {};
    console.log('Data:', sleepLogs);
    
    const navigation = useNavigation();
    const { t, i18n } = useTranslation();



    return (
        <View style={styles.content}>
            <ImageBackground source={backgroundImage} style={styles.image}>
            <View>
                <HeaderLogo/>
            </View>
            <Menu/>
            <View style={styles.backIcon}>
                <AntDesign name="arrowleft" size={30} color="#000" onPress={() => navigation.goBack()} /> 
            </View>
            <View style={styles.waterChart}>
                <Text style={[styles.sleepChartTitle, {
                    fontFamily: i18n.language === 'es' ? 'Trebuchet MS': 'Koulen-Regular',
                    fontSize: i18n.language === 'es' ? 24 : 30,
                    letterSpacing: i18n.language === 'es' ? -1.5: 'auto'
                }]}>{t('Sleep Chart')}</Text>
                <View style={styles.waterChartTitles}>
                    <Text style={styles.waterChartText}>{t('Type')}</Text>
                    <Text style={[styles.waterChartText, 
                                {fontFamily: i18n.language === 'es' ? 'Trebuchet MS': 'Koulen-Regular'}, 
                                {fontSize: i18n.language === 'es' ? 16 : 20}, 
                                {letterSpacing: i18n.language === 'es' ? -1.5: 'auto'}]}>{t('Duration (hrs)')}</Text>
                    <Text style={styles.waterChartText}>{t('Time')}</Text>
                </View>
                    {sleepLogs.map((log, index) => (
                        <View style={styles.waterChartValues} key={index}>
                            <Text style={{marginRight: 30}}>{t(log.type)}</Text>
                            <Text style={{marginRight: 30}}>{log.duration}</Text>
                            <Text>{log.time}</Text>
                        </View>
                    ))}
                    <TouchableOpacity
                        onPress={() => navigation.navigate('AddSleep')}
                        style={styles.waterSubmitButton}>
                        <Text style={[styles.waterButtonText,{fontSize: i18n.language === 'es' ? 18: 20}]}>{t('Add Sleep')}</Text>
                        </TouchableOpacity>
            </View>
            <Footer />
            </ImageBackground>
        </View>
    );
};


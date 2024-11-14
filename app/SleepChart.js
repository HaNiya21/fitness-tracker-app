import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

const backgroundImage = require("../assets/images/GymwolfBackground.jpeg");

export default function SleepChart({ route }) {
    
    const { sleepLogs = [] } = route.params || {};
    console.log('Data:', sleepLogs);
    
    const navigation = useNavigation();



    return (
        <View style={styles.content}>
            <ImageBackground source={backgroundImage} style={styles.image}>
            <Menu/>
            <View style={styles.backIcon}>
                <AntDesign name="arrowleft" size={30} color="#000" onPress={() => navigation.goBack()} /> 
            </View>
            <View style={styles.waterChart}>
                <Text style={styles.sleepChartTitle}>Sleep Chart</Text>
                <View style={styles.waterChartTitles}>
                    <Text style={styles.waterChartText}>Type</Text>
                    <Text style={styles.waterChartText}>Duration</Text>
                    <Text style={styles.waterChartText}>Time</Text>
                </View>
                    {sleepLogs.map((log, index) => (
                        <View style={styles.waterChartValues} key={index}>
                            <Text style={styles.waterTimeText}>{log.type}</Text>
                            <Text style={styles.waterAmountText}>{log.duration}</Text>
                            <Text style={styles.waterAmountText}>{log.time}</Text>
                        </View>
                    ))}
                    <TouchableOpacity
                        onPress={() => navigation.navigate('AddSleep')}
                        style={styles.waterSubmitButton}>
                        <Text style={styles.waterButtonText}>Add Sleep</Text>
                        </TouchableOpacity>
            </View>
            <Footer />
            </ImageBackground>
        </View>
    );
};


import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, ImageBackground } from "react-native";
import { LineChart } from "react-native-chart-kit";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Footer from "../components/Footer";

const backgroundImage = require("../assets/images/GymwolfBackground.jpeg");

export default function SleepChart({ route }) {
    
    const { data = [] } = route?.params || {};
    console.log('Data:', data);
    
    const navigation = useNavigation();

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <Text style={styles.title}>Sleep Chart</Text>
                <LineChart
                    data={{
                        labels: data.map((item) => item.date),
                        datasets: [
                            {
                                data: data.map((item) => item.hours),
                            },
                        ],
                    }}
                    width={400}
                    height={220}
                    chartConfig={chartConfig}
                    bezier
                    style={styles.chart}
                />
                <Footer />
            </ImageBackground>
        </View>
    );
};


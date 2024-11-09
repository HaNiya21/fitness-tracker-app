import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, ImageBackground } from "react-native";
import { LineChart } from "react-native-chart-kit";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Footer from "../components/Footer";

const backgroundImage = require("../assets/images/GymwolfBackground.jpeg");

const Progress = () => {
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
                <Text style={styles.title}>Progress Chart</Text>
                <LineChart
                    data={{
                        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
                        datasets: [
                            {
                                data: [5, 10, 15, 20],
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
export default Progress;
import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import { LineChart } from "react-native-chart-kit"; // Ensure you import this
import Footer from "../components/Footer";

const backgroundImage = require("../assets/images/GymwolfBackground.jpeg");

const Progress = () => {
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,  // Valid function for color
        strokeWidth: 2,
        barPercentage: 0.5,
    };

    const chartData = {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8"],
        datasets: [
            {
                data: [5, 10, 15, 20, 25, 30, 35, 40],
            },
        ],
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <Text style={styles.title}>Progress Chart</Text>
                <LineChart
                    data={chartData}
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

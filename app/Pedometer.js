import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Pedometer } from 'expo-sensors';
import styles from './styles';
import RingProgress from './RingProgress';

const StepCounter = () => {
    const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
    const [stepCount, setStepCount] = useState(0);

    useEffect(() => {
        Pedometer.isAvailableAsync().then(
            result => {
                setIsPedometerAvailable(String(result));
            },
            error => {
                setIsPedometerAvailable('Could not get isPedometerAvailable: ' + error);
            }
        );
    }, []);

    useEffect(() => {
        const subscription = Pedometer.watchStepCount(result => {
            setStepCount(result.steps);
        });

        return () => {
            subscription.remove();
        };
    }, []);

    return (
        <View style={styles.ProfileContainer}>
            <RingProgress radius={150} strokeWidth={40} progress={stepCount / 100} /> {/* 100 is a placeholder for the goal */}
            <View style={{ flexDirection: 'row'}}>
                <View style={styles.ProfileValueContainer}>
                    <Text style={styles.ProfileLabel}>Steps</Text>
                    <Text style={styles.ProfileValue}>{stepCount}</Text>
                </View>
                <View style={styles.ProfileValueContainer}>
                    <Text style={styles.ProfileLabel}>Distance</Text>
                    <Text style={styles.ProfileValue}>0.75 km</Text>
                </View>
            </View>
            <View style={styles.ProfileValueContainer}>
                <Text style={styles.ProfileLabel}>Flights Climbed</Text>
                <Text style={styles.ProfileValue}>12</Text>
                <Text>Pedometer available: {isPedometerAvailable}</Text>

            </View>
        </View>
    );
};

export default StepCounter;

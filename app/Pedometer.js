import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Pedometer } from 'expo-sensors';
import styles from './styles';
import RingProgress from './RingProgress';

const StepCounter = () => {
    const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
    const [stepCount, setStepCount] = useState(0);
    const [calories, setCalories] = useState(0);
    const [distance, setDistance] = useState(0);

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

    useEffect(() => {
        setCalories(stepCount * 0.04); // 0.04 calories per step
        setDistance(stepCount * 0.0008); // 0.0008 km per step
    }, [stepCount]);

    return (
        <View style={styles.PedometerContainer}>
            <View style={styles.ringContainer}>
                <RingProgress radius={120} strokeWidth={20} strokeColor='#3C68AA' progress={stepCount / 1000} style={styles.ring} />
                <RingProgress radius={100} strokeWidth={20} strokeColor='#729DDD' progress={calories / 500} style={styles.middleRing} />
                <RingProgress radius={80} strokeWidth={20} strokeColor='#72D7DD' progress={distance / 5} style={styles.innerRing} />
            </View>
            <View style={{ flexDirection: 'row'}}>
                <View style={styles.PedometerValueContainer}>
                    <Text style={[styles.PedometerLabel, { color: '#3C68AA' }]}>Steps</Text>
                    <Text style={styles.PedometerValue}>{stepCount}</Text>
                </View>
                <View style={styles.PedometerValueContainer}>
                    <Text style={[styles.PedometerLabel, { color: '#729DDD' }]}>Calories</Text>
                    <Text style={styles.PedometerValue}>{calories.toFixed(2)}</Text>
                </View>
            </View>
            <View style={styles.PedometerValueContainer}>
                <Text style={[styles.PedometerLabel, { color: '#72D7DD' }]}>Distance</Text>
                <Text style={styles.PedometerValue}>{distance.toFixed(2)}</Text>
            </View>
        </View>
    );
};

export default StepCounter;

import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import RingProgress from './RingProgress';
import AppleHealthKit, { HealthKitPermissions } from 'react-native-health';
import { useState } from 'react';``

/*const permissions: HealthKitPermissions = {
    permissions: {
        read: [AppleHealthKit.Constants.Permissions.Steps],
        write: []
    },
} */

const Pedometer = () => {
    /*const [hasPermissions, setHasPermissions] = useState(false);

    useEffect(() => {
        AppleHealthKit.initHealthKit(permissions, (err) => {
            if (err) {
                console.log("error getting permissions");
                return;
            } 
            setHasPermissions(true);
        });
    }, []); 

    useEffect(() => {}, []);   */ 

    return (
        <View style={styles.ProfileContainer}>
            <RingProgress radius={150} strokeWidth={40} progress={0.7} />

            <View style={{ flexDirection: 'row'}}>
                <View style ={styles.ProfileValueContainer}>
                    <Text style={styles.ProfileLabel}>Steps</Text>
                    <Text style={styles.ProfileValue}>1219</Text>
                </View>

                <View style={styles.ProfileValueContainer}>
                    <Text style={styles.ProfileLabel}>Distance</Text>
                    <Text style={styles.ProfileValue}>0,75 km</Text>
                </View>
            </View>

            <View style={styles.ProfileValueContainer}>
                <Text style={styles.ProfileLabel}>Flights Climbed</Text>
                <Text style={styles.ProfileValue}>12</Text>
            </View>
        </View>
    );
};

export default Pedometer;
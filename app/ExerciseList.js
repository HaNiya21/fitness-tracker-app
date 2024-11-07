import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Card from '../components/Card';

export default function ExerciseList() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.row} >
            <Card
                // title="Beautiful Sunset"
                // description="Experience the most beautiful sunset from this viewpoint."
                image="../assets/images/chest.png"
            />
            <Card
                 title="Mountain Adventure"
                // description="A thrilling adventure awaits you in the mountains."
                image="../assets/images/chest_exercise.jpg"
            />
        </View>

        <View style={styles.row}>
            <Card
                // title="City Lights"
                // description="Explore the vibrant nightlife in the city."
                image="../assets/images/wolf_logo.png"
            />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:10,
    },
});

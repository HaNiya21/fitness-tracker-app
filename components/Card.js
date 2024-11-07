import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 40) / 2; 

const Card = ({ title, image }) => {
  return (
    <View style={styles.card}>
      {image && <Image source={{ uri: image }} style={[styles.cardImage, {width: cardWidth}]} />}
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        {/* <Text style={styles.cardDescription}>{description}</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 3, // For Android shadow
    marginBottom: 10,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 150,
    // borderTopLeftRadius: 8,
    // borderTopRightRadius: 8,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#444',
  },
});

export default Card;

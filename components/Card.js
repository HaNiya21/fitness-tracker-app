import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 40) / 2; 

const Card = ({ title, image }) => {
  return (
    <View style={styles.card}>
      {image && <Image source={{ uri: image }} style={[styles.cardImage, {width: cardWidth}]} />}
      {/* <View style={styles.cardContent}> */}
        <Text style={styles.cardTitle}>{title}</Text>
        {/* <Text style={styles.cardDescription}>{description}</Text> */}
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(0,0,0,0.1)',
  
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0.3, height: 1 },
    shadowRadius: 5,
    elevation: 3, // For Android shadow
    marginBottom: 10,
    //paddingLeft:10,
    //overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 180,
    //borderRadius: 8,
    resizeMode: 'cover',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardContent: {
    padding: 1,
  },
  cardTitle: {
    fontSize: 20,
    //fontWeight: 'bold',
    color: '#000',
    //marginBottom: 5,
    textAlign: 'center',
    fontFamily: 'Koulen-Regular',
    letterSpacing: 1,
  },
  cardDescription: {
    fontSize: 14,
    color: '#444',
  },
});

export default Card;

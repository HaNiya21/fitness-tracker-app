import { useState } from "react";
import { View, ImageBackground, TouchableOpacity, Text, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome'; // or any other icon set


const Footer = () => {
    const backgroundImage = require('../assets/images/GymwolfBackground.jpeg');

    return (
            <ImageBackground                 
                source={backgroundImage} 
                style={styles.BackgroundImage} 
                resizeMode="stretch">
                <View style={styles.footer}>
                    <Icon name="house" size={30} /> 
                    <Icon name="dumbbell" size={30} />
                    <Icon name="user" size={30} />
                    <Icon name="newspaper" size={30} />        
                </View>

            </ImageBackground>



    );
}

export default Footer;

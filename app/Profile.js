import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useFonts, Koulen_400Regular } from '@expo-google-fonts/koulen';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles'; 
import ToggleSwitch from '../components/ToggleSwitch';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

const backgroundImage = require('../assets/images/GymwolfBackground.jpeg');
const wolfLogo = require('../assets/images/wolf_logo-black.png');

const Profile = () => {
    let [fontsLoaded] = useFonts({
        Koulen_400Regular,
    });

    const initialProfileValues = {
        firstname: "Justin",
        lastname: "Peter",
        height: "174",
        weight: "70",
        age: "24",
        email: "User124@charlotte.edu",
        password: "*****",
    };

    const [profileValues, setProfileValues] = useState(initialProfileValues);
    const [isEditing, setIsEditing] = useState(false);

    if (!fontsLoaded) {
        return <Text>Loading...</Text>; // Fallback content while fonts load
    }

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    return (
        <ImageBackground 
            source={backgroundImage} 
            style={styles.image} 
            resizeMode="cover"
        >
            <Menu />

            <View style={styles.profileContainer}>
                {/* Profile Information Box */}
                <View style={styles.profileBox}>
                    {/* Logo at the top-center */}
                    <View style={styles.logoContainer}>
                        <Image source={wolfLogo} style={styles.logo} />
                    </View>

                    {/* Edit icon at the top-right corner */}
                    <TouchableOpacity onPress={toggleEdit} style={styles.editIcon}>
                        <Icon name="edit" size={24} color="#000" />
                    </TouchableOpacity>

                    {/* Profile Information */}
                    <ScrollView contentContainerStyle={styles.profileContent}>
                        <Text style={styles.profileText}>Name: {profileValues.firstname} {profileValues.lastname}</Text>
                        <Text style={styles.profileText}>Age: {profileValues.age}</Text>
                        <Text style={styles.profileText}>Height: {profileValues.height} cm</Text>
                        <Text style={styles.profileText}>Weight: {profileValues.weight} kg</Text>
                        <Text style={styles.profileText}>Email: {profileValues.email}</Text>
                        <Text style={styles.profileText}>Password: {profileValues.password}</Text>
                    </ScrollView>
                </View>
            </View>
        </ImageBackground>

    );
};

export default Profile;
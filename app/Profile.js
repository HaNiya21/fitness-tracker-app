import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Button } from 'react-native';
import { useFonts, Koulen_400Regular } from '@expo-google-fonts/koulen';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles'; 
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import { ImageBackground } from 'react-native';
import SVG, { Circle } from 'react-native-svg';

const backgroundImage = require('../assets/images/GymwolfBackground.jpeg');

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

    const handleChange = (name, value) => {
        setProfileValues({ ...profileValues, [name]: value });
    };

    const handleSave = () => { 
        setIsEditing(false);
    };

    return (
        <View style={styles.content}>
            <ImageBackground source={backgroundImage} style={styles.image}>
                {/* Top Menu */}
                <Menu />

                <View style={styles.circleWrapper}>
                    <SVG height="150" width="150">
                        <Circle
                            cx="75"
                            cy="75"
                            r="75"
                            fill="rgba(114, 157, 221, 0.62)"
                        />
                    </SVG>
                </View>
                
                {/* Main Profile Content */}
                <ScrollView contentContainerStyle={{ paddingTop: 100, justifyContent: 'center', alignItems: 'center', paddingBottom: 150, }}>
                    <View style={[styles.profileBox, { backgroundColor: '#ECECEC', alignItems: 'center' }]}>
                        {/* Edit Icon */}
                            <TouchableOpacity onPress={toggleEdit} style={styles.editIcon}>
                                <Icon name="edit" size={35} color="#000" />
                            </TouchableOpacity>

                        {/* Editable Fields */}
                        {isEditing ? (
                            <View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="First Name"
                                    value={profileValues.firstname}
                                    onChangeText={(value) => handleChange('firstname', value)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Last Name"
                                    value={profileValues.lastname}
                                    onChangeText={(value) => handleChange('lastname', value)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Age"
                                    keyboardType="numeric"
                                    value={profileValues.age}
                                    onChangeText={(value) => handleChange('age', value)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Height"
                                    value={profileValues.height}
                                    onChangeText={(value) => handleChange('height', value)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Weight"
                                    value={profileValues.weight}
                                    onChangeText={(value) => handleChange('weight', value)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Email"
                                    keyboardType="email-address"
                                    value={profileValues.email}
                                    onChangeText={(value) => handleChange('email', value)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Password"
                                    secureTextEntry
                                    value={profileValues.password}
                                    onChangeText={(value) => handleChange('password', value)}
                                />
                                <Button title="Save" onPress={handleSave} />
                            </View>
                        ) : (
                            // View Mode
                            <View>
                                <View style={styles.profileRow}>
                                    <Text style={styles.profileLabel}>First Name</Text> 
                                    <Text style={styles.profileValue}>{profileValues.firstname}</Text>
                                </View>
                                <View style={styles.profileLine} />
                                
                                <View style={styles.profileRow}>
                                    <Text style={styles.profileLabel}>Last Name</Text>
                                    <Text style={styles.profileValue}>{profileValues.lastname}</Text>
                                </View>
                                <View style={styles.profileLine} />

                                <View style={styles.profileRow}>
                                    <Text style={styles.profileLabel}>Age</Text>
                                    <Text style={styles.profileValue}>{profileValues.age}</Text>
                                </View>
                                <View style={styles.profileLine} />

                                <View style={styles.profileRow}>
                                    <Text style={styles.profileLabel}>Height</Text>
                                    <Text style={styles.profileValue}>{profileValues.height} cm</Text>
                                </View>
                                <View style={styles.profileLine} />

                                <View style={styles.profileRow}>
                                    <Text style={styles.profileLabel}>Weight</Text>
                                    <Text style={styles.profileValue}>{profileValues.weight} kg</Text>
                                </View>
                                <View style={styles.profileLine} />

                                <View style={styles.profileRow}>
                                    <Text style={styles.profileLabel}>Email</Text>
                                    <Text style={styles.profileValue}>{profileValues.email}</Text>
                                </View>
                                <View style={styles.profileLine} />

                                <View style={styles.profileRow}>
                                    <Text style={styles.profileLabel}>Password</Text>
                                    <Text style={styles.profileValue}>{profileValues.password}</Text>
                                </View>

                            </View>
                        )}
                    </View>
                </ScrollView>
            </ImageBackground>
            {/* Bottom Footer */}
            <Footer />
        </View>
    );
};

export default Profile;

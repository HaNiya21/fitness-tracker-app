import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Button } from 'react-native';
import { useFonts, Koulen_400Regular } from '@expo-google-fonts/koulen';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles'; 
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import { ImageBackground } from 'react-native';

const backgroundImage = require('../assets/images/GymwolfBackground.jpeg');

const Profile = () => {
    let [fontsLoaded] = useFonts({
        Koulen_400Regular,
    });

    const navigation = useNavigation();

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
        <ImageBackground 
            source={backgroundImage} 
            style={styles.image} 
            resizeMode="cover"
        >
            <Menu />
            <View style={styles.backIcon}>
                <AntDesign name="arrowleft" size={30} color="#000" onPress={() => navigation.goBack()} /> 
            </View>

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
                                <Text style={styles.profileInput}>First Name: {profileValues.firstname}</Text>
                                <View style={styles.profileLine} />
                                <Text style={styles.profileInput}>Last Name: {profileValues.lastname}</Text>
                                <View style={styles.profileLine} />
                                <Text style={styles.profileInput}>Age: {profileValues.age}</Text>
                                <View style={styles.profileLine} />
                                <Text style={styles.profileInput}>Height: {profileValues.height} cm</Text>
                                <View style={styles.profileLine} />
                                <Text style={styles.profileInput}>Weight: {profileValues.weight} kg</Text>
                                <View style={styles.profileLine} />
                                <Text style={styles.profileInput}>Email: {profileValues.email}</Text>
                                <View style={styles.profileLine} />
                                <Text style={styles.profileInput}>Password: {profileValues.password}</Text>
                                <View style={styles.profileLine} />
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

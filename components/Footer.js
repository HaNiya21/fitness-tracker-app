import { useState } from "react";
import { View, ImageBackground, TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "../app/styles";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import '../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    // const backgroundImage = require('../assets/images/GymwolfBackground.jpeg');
    const navigation = useNavigation();
    const [iconColor, setIconColor] = useState('#000');

    const {t, i18n} = useTranslation();

    return (
        // <ImageBackground
        //     source={backgroundImage}
        //     style={styles.BackgroundImage}
        //     resizeMode="stretch"
        // >
            <View style={styles.footer}>
                <View style={styles.footerIcons}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Dashboard')}
                        onPressIn={() => setIconColor('#ffffff')} // Change to desired color on press
                        onPressOut={() => setIconColor('#000')}
                    >
                        <Feather name="home" size={28} color={iconColor} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('ExerciseBodyPart')}
                        onPressIn={() => setIconColor('#ffffff')} // Change to desired color on press
                        onPressOut={() => setIconColor('#000')}
                    >
                        <MaterialCommunityIcons name="dumbbell" size={30} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('TrainerList')}
                        onPressIn={() => setIconColor('#ffffff')} // Change to desired color on press
                        onPressOut={() => setIconColor('#000')}
                    >
                        <MaterialIcons name="sports" size={30} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Articles')}
                        onPressIn={() => setIconColor('#ffffff')} // Change to desired color on press
                        onPressOut={() => setIconColor('#000')}
                    >
                        <MaterialCommunityIcons name="newspaper-variant-outline" size={30} />
                    </TouchableOpacity>
                </View>

                <View style={styles.footerText}>
                    <Text style={[styles.iconText, 
                        {marginLeft: i18n.language === 'es' ? 20 : 10}]}>{t('Dashboard')}</Text>
                    <Text style={[styles.iconText,
                        {marginLeft: i18n.language === 'es' ? 35 : 15}]}>{t('Exercises')}</Text>
                    <Text style={[styles.iconText,
                        {marginLeft: i18n.language === 'es' ? 0 : 0}]}>{t('Personal Trainer')}</Text>
                    <Text style={[styles.iconText,
                        {marginRight: i18n.language === 'es' ? 10 : 10}]}>{t('Articles')}</Text>
                </View>
            </View>
        // </ImageBackground>

    );
};

export default Footer;

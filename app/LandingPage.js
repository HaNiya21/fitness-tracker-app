import React, { useState } from "react";
import { View, Text, ImageBackground, Pressable, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import '../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { useFonts, Koulen_400Regular } from '@expo-google-fonts/koulen';


import* as Font from 'expo-font';

import ToggleSwitch from '../components/ToggleSwitch';



// import landingImage from "./app/landing.j"; // Make sure the path is correct

const LandingPage = () => {
    const navigation = useNavigation();
    
    const {t, i18n} = useTranslation();

    let [fontsLoaded] = useFonts({
        Koulen_400Regular,
    });


    const changeLanguage = () => {
        const newLanguage = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLanguage)
            .then(() => console.log("Language changed to:", newLanguage))
            .catch(err => console.log(err));
    };


    if (!fontsLoaded) {
        return <Text>Loading...</Text>; // Fallback content while fonts load
    }

    return (
        <View className='mainContainer' style={styles.content}>
            <ImageBackground  
                source={require('../assets/images/landing_page.jpg')} 
                style={styles.image}
            >

                <LinearGradient
                    colors = {['transparent', '#18181b']}
                    style = {{width: wp('100%'), height: hp(100)}}
                    start = {{x: 1, y: 0}}
                    end = {{x: 1, y: 1}}
                    >       
                    <View style={styles.box1}>
                        <Image source={require('../assets/images/wolf_logo.png')} style={styles.logoLanding}/>
                        <Text style={styles.headerText}>GYMWOLF</Text>    
                    </View> 
                        
                    <View style={styles.box2}>
                        <Text style={[styles.title1, styles.title1ES]}>{t('GYMWOLF IS THE BEST TOOL TO')}  </Text>
                        <Text style={styles.title1}>{t('TRACK YOUR WORKOUTS ')}</Text>
                        <Text style={styles.title1}>{t('ONLINE.')} </Text>
                        <Pressable style={styles.GetStartedButton} onPress={() => navigation.navigate('SignUp')}>
                            <Text style={styles.buttonText}>{t('Get Started')}</Text>
                        </Pressable>
            
                        <Pressable style={styles.LoginButton} onPress={() => navigation.navigate('Login')}>
                            <Text style={[styles.linkText, 
                            { fontFamily: i18n.language === 'es' ? 'Trebuchet' : 'Koulen-Regular' },
                            { fontWeight: i18n.language === 'es' ? 'bold': 'regular'},
                            { fontSize: i18n.language === 'es' ? 16: 20},
                            { letterSpacing: i18n.language === 'es' ? -1 : 0 },
                            { marginTop: i18n.language === 'es' ? 5 : 'auto'}]}>{t('Login')}</Text>
                        </Pressable>
                        {/* <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={styles.LoginLink}>Login</Text>
                        </TouchableOpacity> */}
                    </View>                   
                    
                    <View style={styles.box3}>
                        <View style={styles.languageToggle}>
                            <ToggleSwitch onPress={changeLanguage}/>
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
           
        </View>
    );
};

export default LandingPage;

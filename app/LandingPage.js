import React, { useState } from "react";
import { View, Text, ImageBackground, Pressable, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
// import Toggle from 'react-native-toggle-input';
// import ToggleSwitch from 'toggle-switch-react-native';
import* as Font from 'expo-font';

import ToggleSwitch from '../components/ToggleSwitch';



// import landingImage from "./app/landing.j"; // Make sure the path is correct

const LandingPage = () => {
    const navigation = useNavigation();
    
    const [fontsLoaded] = Font.useFonts({
        'Koulen-Regular': require('../assets/fonts/Koulen-Regular.ttf'),
    });

    if(!fontsLoaded){
        return null;
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
                        <Text style={styles.title1}>GYMWOLF IS THE BEST TOOL TO  </Text>
                        <Text style={styles.title1}>TRACK YOUR WORKOUTS </Text>
                        <Text style={styles.title1}>ONLINE. </Text>
                        <Pressable style={styles.GetStartedButton} onPress={() => navigation.navigate('SignUp')}>
                            <Text style={styles.buttonText}>Get Started</Text>
                        </Pressable>
            
                        <Pressable style={styles.LoginButton} onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.buttonText}>Login</Text>
                        </Pressable>
                        {/* <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={styles.LoginLink}>Login</Text>
                        </TouchableOpacity> */}
                    </View>                   
                    
                    <View style={styles.box3}>
                        <View style={styles.languageToggle}>
                            <ToggleSwitch />
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
           
        </View>
    );
};

export default LandingPage;

import { View, ImageBackground, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "../app/styles";

const backgroundImage = require('../assets/images/GymwolfBackground.jpeg');

const HeaderLogo = () => {

    const navigation = useNavigation();
    
    return (
        <View style={styles.content}>
            <ImageBackground source={backgroundImage} style={[styles.image, {display: 'hidden', visibility: 'none'}]} >
                <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                    <Image source={require('../assets/images/wolf_logo-black.png')} 
                    style={{ position: 'absolute', 
                            height:40, width: 40,
                            top: 20,
                            left: 30}} />
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}
export default HeaderLogo;
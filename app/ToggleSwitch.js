import React, { useState } from 'react';
import {View, Text, Pressable, LayoutAnimation} from 'react-native';
import styles from "./styles";


const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false);

    const onColor = '#A9A9A9';
    const offColor = '#CBCBCB';

    const [language, setLanguage] = useState("EN");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "EN" ? "ES" : "EN"));
    };

    return (
        <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Pressable 
                style = {{
                    height: 30, 
                    width: 70, 
                    borderRadius: 50, 
                    borderWidth: 1, 
                    backgroundColor: 'white',
                    borderColor: isOn ? onColor : offColor,
                    overflow: 'hidden'
                }}
                onPress={() => {
                    LayoutAnimation.easeInEaseOut(); 
                    setIsOn(!isOn)
                    toggleLanguage();
                }}>
                <View 
                    style = {{
                        height: '100%', 
                        width: '50%', 
                        backgroundColor: isOn ? onColor : offColor,
                        alignSelf: isOn ? 'flex-end' : 'flex-start',
                        alignItems: 'center',
                        justifyContent: 'center'
                 }}>
                    <Text style = {{fontSize: 18, fontWeight: 'bold'}}> {isOn ? 'ES' : 'EN'}</Text>  
                </View>
            </Pressable>
            <Text style={styles.languageText}>Switch to {language === "EN" ? "Español" : "English"}</Text>
        </View>
    );
}

export default ToggleSwitch;
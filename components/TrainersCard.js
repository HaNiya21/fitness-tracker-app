import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const BodyPartCard = ({ item, index }) => {

    const navigation = useNavigation();

    return(
        <View>
            <Pressable
                style={{width: wp(44), height: wp(52), justifyContent: 'flex-end', padding: 10, marginBottom: 20}}
                onPress={() => navigation.navigate('TrainerDetails', item)}
            >
                
                <Image
                    source={item.image}
                    resizeMode="cover"
                    style={{width: wp(44), height: wp(52), borderRadius: 20, position: 'absolute'}} 
                />
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.9)']}
                    style={{width: wp(44), height: hp(15), borderRadius: 20, position: 'absolute', bottom: 0}}
                    start={{x: 0.5, y: 0}}
                    end={{x: 0.5, y: 1}}
                />
                <Text 
                    style={{color: 'white', 
                        fontSize: hp(2.3), 
                        fontWeight: 'semibold', 
                        textAlign: 'center', 
                        letterSpacing: 2, 
                        fontFamily: 'Koulen-Regular'}}
                >
                    {item?.name}
                </Text> 
            </Pressable>
        </View>
    )
}

export default BodyPartCard;
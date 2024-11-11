import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {Image} from 'expo-image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const ExerciseCard = ({ item, index }) => {

    const navigation = useNavigation();

    return(
        <View>
            <Pressable
                style={{
                    width: wp(44), 
                    height: wp(52), 
                    justifyContent: 'flex-end', 
                    padding: 10,  
                    borderTopColor: 'black', 
                    borderBottomColor: 'black',
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                }}
                onPress={() => navigation.navigate('ExerciseDetails', item)}
            >
                
                    <Image
                        source={{uri: item.gifUrl}}
                        contentFit="cover"
                        style={{width: wp(44), height: wp(52), borderRadius: 20, position: 'absolute'}} 
                    />
                
                
                    {/* <LinearGradient
                    colors={['transparent', 'rgba(1,1,1,0.1)']}
                    style={{width: wp(44), height: hp(15), position: 'absolute',borderRadius: 20, bottom: 0}}
                    start={{x: 0.5, y: 0}}
                    end={{x: 0.5, y: 1}}
                    />  */}
            </Pressable>
            <View style={{paddingBottom: 10}}> 
            <Text 
                    style={{color: 'black', 
                        fontSize: hp(2), 
                        //fontWeight: 'semibold',
                        //lineHeight: 30, 
                        marginBottom: 10,
                        textAlign: 'center', 
                        letterSpacing: 1, 
                        fontFamily: 'Koulen-Regular'}}
                >
                    {
                        item?.name?.length > 20 ? item.name.slice(0, 15) + '...' : item.name
                    }
                </Text> 
            </View>
            
        </View>
    )
} 

export default ExerciseCard;
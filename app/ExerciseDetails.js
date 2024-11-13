import React from 'react';
import { Pressable, Text, View, ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Image} from 'expo-image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styles from "./styles";
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import { ScrollView } from 'react-native-gesture-handler';
import '../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';

const backgroundImage = require('../assets/images/GymwolfBackground.jpeg');

const ExerciseDetails = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const item = route.params;
    console.log("got item", item);
    console.log(typeof item.instructions);

    const {t, i18n} = useTranslation();

    return(

        <>
            <ImageBackground 
                    source={backgroundImage} 
                    style={styles.image} 
                    resizeMode="cover"
            > 

            <Menu />
                <View style={styles.backIcon}>
                    <AntDesign name="arrowleft" size={30} color="#000" onPress={() => navigation.goBack()} /> 
                </View>
                <View style={{ elevation: 4, backgroundColor: '#e5e5e5', paddingTop:5, marginBottom: 8}}>
                    <Image
                        source={{uri: item.gifUrl}}
                        contentFit="cover"
                        style={{width: wp(100), height: wp(80)}}  
                    />
                </View>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom: 100, paddingTop: 20, marginHorizontal: 10}}
                    style= {{marginHorizontal: 6, marginTop: 3}}>

                            <Text style = {[{fontSize: hp(3.5), fontWeight: 'semibold', fontFamily:'Koulen-Regular', lineHeight: 42},
                                            {fontFamily: i18n.language === 'es' ? 'Trebuchet' : 'Koulen-Regular' },
                                            {fontWeight: i18n.language === 'es' ? 'bold' : 'regular' }]}>
                                {t(item.name)}
                            </Text>

                            <Text style = {{fontSize: hp(2), fontFamily:'Roboto'}}>
                                {t('Equipment')}: <Text style ={{fontWeight: 'semibold', fontFamily: 'Koulen-Regular'}} >{t(item.equipment)}</Text>
                            </Text>

                            <Text style = {{fontSize: hp(2), fontFamily:'Roboto'}}>
                                {t('Target Muscle')}: <Text style ={{fontWeight: 'semibold', fontFamily: 'Koulen-Regular'}} >{t(item.target)}</Text>
                            </Text>

                            <Text style = {{fontSize: hp(2), fontFamily:'Roboto'}}>
                                {t('Secondary Muscle')}: {
                                        item?.secondaryMuscles?.length > 1 ? item.secondaryMuscles.map((secondaryMuscles, index) => (
                                            <Text 
                                                key={index} 
                                                style={{fontSize: hp(2), fontFamily: 'Koulen-Regular'}}
                                            >
                                                {t(secondaryMuscles)} {', '}
                                            </Text>
                                        )): <Text style ={{fontWeight: 'semibold', fontFamily: 'Koulen-Regular'}} >{t(item?.secondaryMuscles)}</Text>
                                    }
                            </Text>

                            <Text style = {{fontSize: hp(3), fontFamily:'Roboto', fontWeight: 'semibold'}}>
                                {t('Instructions')}: 
                            
                            </Text>
                            
                            <View>
                            {item.instructions.map((instruction, index) => (
                                <Text 
                                    key={index} 
                                    style={{fontSize: hp(2), fontFamily: 'Roboto', marginBottom: 5}}
                                >
                                    {index + 1}. {t(instruction)}
                                </Text>
                            ))}
                            </View>
                            
                </ScrollView>
        </ImageBackground>

        <View>
            <Footer />
        </View>
        </>
    )
    
}

export default ExerciseDetails;
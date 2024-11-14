
import React, { useEffect, useState } from 'react';
import { Text, ImageBackground, Image, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation, useRoute } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styles from "./styles";
import Menu from '../components/Menu';
import {chestExercise} from '../constants/chestExercise';
import { fetchExercisesByBodyPart } from '../api/ExerciseDB';
import Footer from '../components/Footer';
import ExerciseCard from '../components/ExerciseListComponent';

import { FlatList } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native-virtualized-view';
import '../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';

const backgroundImage = require('../assets/images/GymwolfBackground.jpeg');

const Exercises = () => {

    const {t, i18n} = useTranslation();

    const navigation = useNavigation();
    const route = useRoute();
    const item = route.params;
    console.log("got item", item);

    const [exercises, setExercises] = useState([]);
    //setExercises(chestExercise);    
   // console.log('exercises', chestExercise);

    useEffect(() => {
        if(item) getExercise(item.name)
    }, [item]);

    const getExercise = async (bodyPart) => {
        let data = await fetchExercisesByBodyPart(bodyPart.toLowerCase());
        //console.log('got data', data);
        setExercises(data); 
    };

    return (
        <>
            <ImageBackground 
                    source={backgroundImage} 
                    style={styles.image} 
                    resizeMode="cover"
            > 

                <Menu />

                
                    <View style={styles.backIcon}>
                        <AntDesign name="arrowleft" size={30} color="#000" onPress={() => navigation.navigate('ExerciseBodyPart')} /> 
                    </View>
                    <ScrollView>
                        <View style = {{marginHorizontal: 4, marginTop: 10, alignItems: 'center'}}>
                        <Text style={styles.exerciseTitle}>
                            {t('exerciseTitle', { name: t(item.name) })}
                        </Text>
                        </View>

                        <View style={{marginBottom: 10, marginHorizontal: 20}}>
                            {/* <View style={{flex: 1, marginHorizontal: 20}}> */}
                                <FlatList
                                    data={exercises}
                                    numColumns={2}
                                    keyExtractor={item => item.name}
                                    showsVerticalScrollIndicator={false}
                                    contentContainerStyle={{paddingBottom: 100, paddingTop: 20}}
                                    columnWrapperStyle={{
                                        justifyContent: 'space-between'
                                    }}
                                    renderItem={({ item, index }) => <ExerciseCard item={item} index={index} />}
                                />
                            {/* </View> */}
                        
                        </View>
                    
                    {/* <StatusBar style="light" /> */}
                    {/* <Image 
                        source={item.image} 
                        style={{width: wp(100), height: hp(30)}} /> */}
                    </ScrollView>
            </ImageBackground>
            <View>
                <Footer />
            </View>
        </>
    )
}

export default Exercises;
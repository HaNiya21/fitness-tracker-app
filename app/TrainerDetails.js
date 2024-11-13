import React, {useState} from 'react';
import { Pressable, Text, View, ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Image} from 'expo-image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Link } from 'expo-router';
import styles from "./styles";
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import { ScrollView } from 'react-native-gesture-handler';
import { Tab, TabView } from 'react-native-elements';
import '../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';

const backgroundImage = require('../assets/images/GymwolfBackground.jpeg');

const TrainerDetails = () => {

    const {t, i18n} = useTranslation();

    const navigation = useNavigation();
    const route = useRoute();
    const item = route.params;
    //console.log("got item", item);

    const [index, setIndex] = useState(0);
    //console.log(typeof item.instructions);

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

                <Text style = {{fontSize: hp(3.5),fontWeight: 'bold', fontFamily:'Roboto', textAlign: 'center'}}>
                    {item.name}
                </Text>

                <View style={{ padding:20, marginBottom: 1 }}>
                    <Image
                        source={item.image}
                        contentFit="cover"
                        style={{width: wp(85), height: wp(85), borderRadius: 50, justifyContent: 'center', alignSelf: 'center'}}    

                    />
                </View>

                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom: 100, paddingTop: 10, marginHorizontal: 10}}
                    style= {{marginHorizontal: 15, marginTop: 3}}>
                            <Tab value={index} onChange={setIndex} indicatorStyle={styles.tabIndicator}>
                                <Tab.Item 
                                    title={t("Profile")}
                                    titleStyle = {styles.tabTitle} />
                                <Tab.Item 
                                    title={t("Contact")}
                                    titleStyle = {styles.tabTitle} />
                                <Tab.Item 
                                    title="Videos"
                                    titleStyle = {styles.tabTitle} />
                            </Tab>
                            <TabView value={index} onChange={setIndex}>
                                <TabView.Item style={styles.tabContent}>
                                    <Text style={styles.description}>
                                        {t(item.description)}
                                    </Text>
                                </TabView.Item>

                                <TabView.Item style={styles.tabContent}>
                                    <View style={styles.contactItem}>
                                        <Icon name="instagram" size={24} color="#0077B6" style={{padding: 10}} />
                                        <Text style={styles.description}>{item.insta}</Text>
                                       
                                        <Icon name="twitter" size={24} color="#0077B6" style={{padding: 10}} />
                                        <Text style={styles.description}>{item.x}</Text> 
                                        
                                        

                                        <Icon name="email" size={24} color="#0077B6" style={{padding: 10}} />
                                        <Text style={styles.description}>{item.email}</Text> 
                                    </View>
                                </TabView.Item>
                                
                                <TabView.Item style={styles.tabContent}>
                                    <View style={styles.contactItem}>
                                        <Text style = {{fontSize: hp(2.3), fontFamily:'Roboto', paddingBottom: 5}}>
                                            {t('YouTube Videos')}: 
                                        </Text>
                                        <View>
                                            {
                                                item?.videos?.length > 1 ? item.videos.map((arr) => (
                                                    <Link 
                                                        href={arr.video} 
                                                        key={arr.id}
                                                        style={styles.description}
                                                    > 
                                                        {t('To watch video')} {arr.id} {t('click here')} 
                                                    </Link>
                                                    )): <Link 
                                                            href={item.videos} 
                                                            style={styles.description}
                                                        > 
                                                            To watch video click here
                                                        </Link>
                                            }
                                        </View>
                                    </View>
                                </TabView.Item>
                            </TabView>
                            
                </ScrollView>
        </ImageBackground>

        <View>
            <Footer />
        </View>
        </>
    )
    
}

export default TrainerDetails;
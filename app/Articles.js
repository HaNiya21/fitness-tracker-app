import { useState, useEffect } from "react"; 
import axios from 'axios';
import { View, ImageBackground, Text, Image, TouchableOpacity, Linking, ScrollView } from "react-native";
import styles from "./styles";
import Footer from '../components/Footer';
import Menu from "../components/Menu";

const backgroundImage = require('../assets/images/GymwolfBackground.jpeg');

const Articles = () => {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getNewsData() {
        setLoading(true);
        try {
            const resp = await axios.get("https://newsapi.org/v2/top-headlines?apiKey=4f73a059411643648e2d930986d11bea&country=us&category=health&category=sports");
            setNewsData(resp.data.articles);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    }

    useEffect(() => {
        getNewsData();
    }, []);

    return (
        <View style={styles.content}>
            <ImageBackground source={backgroundImage} style={styles.image}>
                <Menu />
                <Text style={styles.ArticlePageTitle}>Health Spot</Text>
                
                <ScrollView contentContainerStyle  ={styles.articleContainer}>
                    {loading ? (
                        <Text>Loading...</Text>
                    ) : (
                        newsData.map((article, index) => (
                            <View 
                                key={index} 
                                style={[
                                    styles.article, 
                                    index % 3 === 0 ? styles.fullWidth : styles.halfWidth
                                ]}  
                            > 
                            {/* //depending on article index, the article will either take upp all of the screen, or only half. */}
                                <Image source={{ uri: article.urlToImage }} style={styles.articleImage} />
                                <Text style={styles.articleTitle}>{article.title}</Text>
                                {/* <Text style={styles.articleDescription}>{article.description}</Text> */}
                                <TouchableOpacity onPress={() => Linking.openURL(article.url)}>
                                    <Text style={styles.articleLink}>Read more</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    )}
                </ScrollView>
            </ImageBackground>
            <Footer />
        </View>
    );
};

export default Articles;

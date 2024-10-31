import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    content: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        //padding: 20,
        //display: 'flex',
        //flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        //padding: 20,
    },

    // Header Styles
    headerText: {
        fontSize: 32,
        fontFamily: 'Koulen-Regular',
        color: 'white',
        textShadowColor: '#4BA5E3',
        textShadowOffset: { width: 1, height: 1 }, 
        textShadowRadius: 10, 
        letterSpacing: 1,
        //padding: 20,
    },

    logo: {
        width: 80,
        height: 80,
        color: 'white',
    },
// Landing Page Styles
    box1: {
        //flex: 1,
        width: '100%',
        height: '35%', // Adjust height as needed
        //backgroundColor: 'red',
        //flex: 1,
        // display: 'flex',
        // flexDirection: 'row',
        //justifyContent: 'flex-end',
        alignItems: 'center',
        paddingTop: 20,
    },
    box2: {
        //flex: 2,
        width: '100%',
        height: '50%',
        //backgroundColor: 'white',
        //flex: 1,
        // display: 'flex',
        // flexDirection: 'row',
         justifyContent: 'flex-end',
         alignItems: 'center',
        // padding: 20,
    },
    // Background Image
    image: {
        width: '100%',
        height: '100%', // Adjust height as needed
        resizeMode: 'cover',
    },

    //Line 1
    title1: {
        fontSize: 26,
        alignItems: 'center',
        //marginVertical: 5,
        paddingRight: 40,
        paddingLeft: 40,
        color: 'white',
        //fontWeight: 'bold',
        fontFamily: 'Koulen-Regular',
    },

    //Line 2
    title2: {
        fontSize: 26,
        alignItems: 'center',
        //marginVertical: 20,
        paddingRight: 60,
        paddingLeft: 60,
        lineHeight:10,
        //paddingTop:-10,
        color: 'white',
        //fontWeight: 'bold',
        fontFamily: 'Koulen-Regular',
    },

    //Line 3
    title3: {
        fontSize: 26,
        alignItems: 'center',
        //marginVertical: 20,
        //lineHeight: 10,
        paddingRight: 70,
        paddingLeft: 70,
        color: 'white',
        //fontWeight: 'bolder',
        fontFamily: 'Koulen-Regular',
    },

    //Get Started Button
    GetStartedButton: {
        backgroundColor: '#4BA5E3',
        padding: 15,
        borderRadius: 50,
        marginBottom: 5,
        width:200,
    },
    //Login and Get Started Button text
    buttonText: {
        color: '#FFF',
        fontSize: 22,
        fontFamily: 'Koulen-Regular',
        textAlign: 'center',
    },
    //Language Toggle Styles
    languageToggle: {
        marginTop: 5,
    },
    languageText: {
        fontSize: 16,
        color: 'white',
    },


    label:{
        fontSize: 16,
        marginBottom: 5,
    },

// Login Page

    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#4BA5E3',
    },
    
    LoginTitle: {
        fontSize: 40,
        marginBottom: 20,
        fontWeight: 'bold',
        fontFamily: 'Koulen-Regular',

    },

    paragraph: {
        fontSize: 18,
        color: '#FFF',
        marginBottom: 20,
        outlineStyle: '#FFF',
    },

    input: {
        marginVertical: 10,
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 10,
        fontFamily: 'Koulen_400Regular',
        color: '#8D8D8D'
        
    },
    SignInButton:{
        color: '#FFF',
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'Koulen-Regular',
        backgroundColor: '#3C68AA',
        borderRadius: 15,
        width: '120px',
        alignSelf: 'center',
        padding: 10,

    },

    linkText: {
        color: '#FFF',
        textDecorationLine: 'underline',
        textAlign: 'center',
        fontFamily: 'Koulen_400Regular',
    },

// Sign Up Page
    SignUpContainer: {  
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#4BA5E3',
    },

    SignUpTitle: { 
        fontSize: 40,
        marginBottom: 20,
        fontWeight: 'bold',
        fontFamily: 'Koulen_400Regular',
    },

    SignUpButton: { 
        backgroundColor: '#3C68AA',
        padding: 15,
        borderRadius: 5,
        marginBottom: 20,
        fontFamily: 'Koulen_400Regular',
    },

    SignUpText: {
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'Koulen_400Regular',
    },

    text: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Koulen_400Regular',
    },

    LoginLink: {
        color: '#FFF',
        textDecorationLine: 'underline',
        textAlign: 'center',
        fontFamily: 'Koulen_400Regular',
    },

    error: {
        color: '#e64b43',
        fontFamily: 'Koulen_400Regular',
    },

// 
    
});



export default styles;
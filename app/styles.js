import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    image: {
        width: '100%',
        height: 200, // Adjust height as needed
        resizeMode: 'contain',
    },
    title: {
        fontSize: 24,
        marginVertical: 20,
    },
    GetStartedButton: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
    },
    languageToggle: {
        marginTop: 10,
    },
    languageText: {
        fontSize: 16,
        color: '#007BFF',
    },
    label:{
        fontSize: 16,
        marginBottom: 5,
    },

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
        fontFamily: 'Koulen_400Regular',

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
        fontFamily: 'Koulen_400Regular',
        backgroundColor: '#3C68AA',
        borderRadius: 15,
        width: '100px',
        alignSelf: 'center',
        padding: 10,

    },

    linkText: {
        color: '#FFF',
        textDecorationLine: 'underline',
        textAlign: 'center',
        fontFamily: 'Koulen_400Regular',
    },

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
    
});


export default styles;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Koulen-Regular',
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
    },

    logoLanding: {
        marginTop: 80,
        width: 80,
        height: 80,
        shadowColor: '#4BA5E3'
    },
    

    logoSL: {
        width: 80,
        height: 80,
        shadowColor: '#4BA5E3'
    },
    signInButton: {
        backgroundColor: '#3C68AA',
        padding: 5,
        borderRadius: 5,
        marginBottom: 20,
        fontFamily: 'Koulen-Regular',
    },
// Landing Page Styles
    box1: {
        width: '100%',
        alignItems: 'center',
        paddingTop: 20,
        marginBottom : 50,

    },
    box2: {
        width: '100%',
        justifyContent: 'end',
        alignItems: 'center',
        marginTop: 120,
        marginBottom: 100,
    },

    box3: {
        width: '100%',
        height: '15%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 20
    },

    BackgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        },

    image: {
        width: '100%',
        height: '100%', // Adjust height as needed
        resizeMode: 'cover',
    },

    //Line 1
    title1: {
        fontSize: 26,
        alignItems: 'center',
        marginVertical: 3,
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
        fontFamily: 'Koulen-Regular',
        color: '#8D8D8D'
        
    },
    SignInText:{
        color: '#FFF',
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'Koulen-Regular',
        backgroundColor: '#3C68AA',
        width: '120px',
        alignSelf: 'center',
    },

    linkText: {
        color: '#FFF',
        textDecorationLine: 'underline',
        textAlign: 'center',
        fontFamily: 'Koulen-Regular',
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
        fontFamily: 'Koulen-Regular',
    },

    SignUpButton: { 
        backgroundColor: '#3C68AA',
        padding: 5,
        borderRadius: 5,
        marginBottom: 20,
        fontFamily: 'Koulen-Regular',
    },

    SignUpText: {
        color: '#FFF',
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'Koulen-Regular',
    },

    text: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Koulen-Regular',
    },

    LoginLink: {
        color: '#FFF',
        textDecorationLine: 'underline',
        textAlign: 'center',
        fontFamily: 'Koulen-Regular',
    },

    error: {
        color: '#e64b43',
        fontFamily: 'Koulen-Regular',
    },
    
    backIcon: {
    marginTop: 100,
    marginLeft: 20,
},

waterTitle: {
    fontFamily: 'KoHo-Bold',
    fontSize: 40,
    marginLeft: 40,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#0F2951',

},

inputCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
},


clockIcon: {
    marginLeft: 5,
},

waterText: {
    fontSize: 20,
    marginBottom: 5,
    color: '#0F2951',
    alignSelf: 'flex-start',
    marginLeft: 80,
    marginBottom: 10,
    fontFamily: 'Trebuchet MS',
},

waterSubmitButton: {
    backgroundColor: '#D7D7D7',
    padding: 10,
    borderRadius: 10,
    width: 135,
    alignSelf: 'center',
    marginTop: 50,


},

waterButtonText: {
    color: '#0F2951',
    fontSize: 20,
    textAlign: 'center',
},

amountOz: { 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 10, 

},

waterOz: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0F2951',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
},


// waterContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: 'transparent',

// },

waterSubmit: {
    backgroundColor: '#D7D7D7',
    padding: 15,
    borderRadius: 10,
    width: '147px',
    textAlign: 'center',
    marginTop: 50,

},

waterInput: {
    backgroundColor: '#ECECEC',
    padding: 15,
    borderRadius: 10,
    color: 'black',
    marginBottom: 10,
    width: '70%',
},

waterAmountCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
},

timeIconCont: { 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 10,
},

clockIcon: {
    marginLeft: 5,

},

droplets: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    marginTop: 30,
},

goalText: {
    fontSize: 30,  
    color: '#0F2951',
    alignSelf: 'flex-start',
    marginLeft: 50,
    marginTop: 150,
    fontFamily: 'KoHo-Regular',
},

goalInput: {
    backgroundColor: '#ECECEC',
    padding: 10,  
    borderRadius: 10,
},
 
setGoalButton: {
    backgroundColor: '#4BA5E3',
    padding: 10,
    borderRadius: 20,
    marginLeft: 5, 
},
goalButtonText: {
    color: 'white',
},

waterChart: {
    marginTop: 70,
    
},

waterChartText: {
    fontWeight: 'bold',
    color: 'black',
},
// goalText: {
//     fontSize: 20,
//     color: '#0F2951',
//     fontFamily: 'KoHo-Regular',
//     textAlign: 'center',
// }, 
 
waterChartTitle: {
    fontSize: 20,
    color: '#0F2951',
    fontFamily: 'KoHo-Regular',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
},

waterChartTitles: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginBottom: 15,
    width: '70%',
    alignSelf: 'center',
},

waterChartValues: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20, 
    borderBottomColor: '#ECECEC',
    borderBottomWidth: 1,
    paddingBottom: 5,
    width: '70%',
    alignSelf: 'center',
},

footer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#4BA5E3',
    padding: 15,
    bottom: 0,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#4BA5E3',
    padding: 15,
    bottom: 0,
    position: 'absolute',
    
},

footerIcons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
},


    footerText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
},


iconTextd: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'KoHo-Regular',
    textAlign: 'center',
},

iconText: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'KoHo-Regular',
    textAlign: 'center',
},

iconTexta: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'KoHo-Regular',
    textAlign: 'center',
},

iconTexte: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'KoHo-Regular',
    textAlign: 'center',
},

// add exercise page
exerciseTitle: {
    fontSize: 40,
    marginBottom: 20,
    fontWeight: 'bold',
    fontFamily: 'Trebuchet MS',
    color: '#0F2951',
    marginRight: 30,
    alignSelf: 'flex-start',
},

// Label text for each input field, similar to waterText
exerciseText: {
    fontSize: 20,
    color: '#0F2951',
    alignSelf: 'flex-start',
    marginLeft: 80,
    marginBottom: 10,
    fontFamily: 'Trebuchet MS',
},

// Container for each input field to keep layout similar to amountOz
exerciseFieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 10,
},

// Input field style, similar to waterInput
exerciseInput: {
    backgroundColor: '#ECECEC',
    padding: 15,
    borderRadius: 10,
    color: 'black',
    marginBottom: 10,
    width: '70%',
},

// Submit button style, similar to waterSubmit
exerciseSubmit: {
    backgroundColor: '#D7D7D7',
    padding: 15,
    borderRadius: 10,
    width: 147,
    textAlign: 'center',
    marginTop: 50,
    fontSize: 20,
    color: '#0F2951',
    fontWeight: 'bold',
},

// Container for Date and Time input fields with icon, similar to timeIconCont
dateIconCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 10,
},

// Icon styling for clock and calendar icons
calendarIcon: {
    marginLeft: 5,
},
clockIcon: {
    marginLeft: 5,
},

// Footer similar to waterFooter


// Sleep Component
sleepTitle: {
    fontSize: 40,
    marginBottom: 20,
    fontWeight: 'bold',
    fontFamily: 'Trebuchet MS',
    color: '#0F2951',
    marginRight: 30,
},

sleepText: {
    fontSize: 20,
    marginBottom: 5,
    color: '#0F2951',
    alignSelf: 'flex-start',
    marginLeft: 80,
    marginBottom: 10,
    fontFamily: 'Trebuchet MS',
},

sleepInput: {
    backgroundColor: '#ECECEC',
    padding: 15,
    borderRadius: 10,
    color: 'black',
    marginBottom: 10,
    width: '70%',
},

sleepHours: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0F2951',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
},

sleepSubmit: {
    backgroundColor: '#D7D7D7',
    padding: 15,
    borderRadius: 10,
    width: '147px',
    textAlign: 'center',
    marginTop: 50,

},

});



export default styles;
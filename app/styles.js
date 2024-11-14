import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
        shadowColor: '#4BA5E3',
        marginTop: 20,
    },


    signInButton: {
        backgroundColor: '#3C68AA',
        padding: 5,
        borderRadius: 50,
        marginBottom: 20,
        fontFamily: 'Koulen-Regular',
    },

    logoText: {
        fontSize: 32,
        fontFamily: 'Koulen-Regular',
        color: 'black', 
        letterSpacing: 1,
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
        lineHeight:33,
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

    form: {
        // width: '70%',
        // padding: 20,
        // height: 'auto',
        // borderColor: '#ECECEC',
        // borderWidth: 1,
        display: 'flex',
        flexDirection: 'column',
        width: '70%',
        alignContent: 'center',
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
        marginTop: 10,
        marginBottom: 10,
        outlineStyle: '#FFF',
        fontFamily: 'Koulen-Regular',
    },

    input: {
        marginVertical: 10,
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 20,
        fontFamily: 'Koulen-Regular',
        color: '#8D8D8D',
        
        
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
    marginTop: 90,
    marginLeft: 20,
    marginBottom: 20,
    backgroundColor: '#4BA5E3',
    width: 40,  // Set width to make a circular or rounded shape
    height: 40, // Set height equal to width for a circle
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',

},

// next
prevIcon: {
    marginTop: 40,
    marginHorizontal: 40,
    //marginBottom: 10,
    backgroundColor: '#C7C7C7',
    width: 35,  // Set width to make a circular or rounded shape
    height: 35, // Set height equal to width for a circle
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',

},

waterTitle: {
    fontFamily: 'Koulen-Regular',
    fontSize: 40,
    marginLeft: 40,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#0F2951',

},

inputCont: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
    marginBottom: 10,
    marginLeft: 40,
},


clockIcon: {
    marginLeft: 5,
},

waterText: {
    fontSize: 20,
    marginBottom: 5,
    color: '#0F2951',
    alignSelf: 'flex-start',
    marginLeft: 45,
    marginBottom: 10,
    fontFamily: 'Koulen-Regular',
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

timePickerWaterContainer: { 
    backgroundColor: '#ECECEC',
    borderRadius: 10,
    marginTop: 70,
    padding: 5,
    width: '60%',
    marginRight: 65,
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
    fontFamily: 'Roboto',
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
    fontFamily: 'Koulen-Regular',
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
    fontFamily: 'Koulen-Regular',
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
    fontFamily: 'Koulen-Regular',
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
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'space-around',
    // width: '100%',
    // backgroundColor: '#4BA5E3',
    // padding: 15,
    // bottom: 0,
    // position: 'absolute',
    
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
    fontFamily: 'Koulen-Regular',
    textAlign: 'center',
},

iconText: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'Koulen-Regular',
    textAlign: 'center',
    letterSpacing: 1,
},

iconTexta: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'Koulen-Regular',
    textAlign: 'center',
    marginRight: 10,
    letterSpacing: 1,
},

iconTexte: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'Koulen-Regular',
    textAlign: 'left',
    letterSpacing: 1,
},

// add exercise page
exerciseContainer: {
    flex: 1,
    marginHorizontal: 4,
    //justifyContent: 'center',
    //alignItems: 'center',
    //padding: 20,
    //backgroundColor: 'transparent',
},
exerciseTitle:
{
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'semibold',
    fontFamily: 'Koulen-Regular',
    color: '#0F2951',
    marginRight: 15,
    letterSpacing: 1,
},

// Label text for each input field, similar to waterText

exerciseText: {
    fontSize: 20,
    marginBottom: 5,
    color: '#0F2951',
    alignSelf: 'flex-start',
    marginLeft: 50,
    marginBottom: 5,
    fontFamily: 'Koulen-Regular',
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
    marginLeft: 50,

},
dateContainer: {
    borderRadius: 10,
    borderColor: '#ECECEC',
    borderWidth: 4,
    width: '70%',
    marginLeft: 50,
    marginBottom: 10,
},

dateInput: {
    backgroundColor: '#ECECEC',
    padding: 11,
    borderRadius: 10,
    color: '#0F2951',

},

// Submit button style, similar to waterSubmit
exerciseSubmit: {
    backgroundColor: '#D7D7D7',
    padding: 15,
    borderRadius: 10,
    width: '147px',
    textAlign: 'center',
    marginTop: 50,

},

datePickerContainer: {  
    backgroundColor: '#ECECEC',
    borderRadius: 10,
    marginTop: 40,
    padding: 5,
    width: '70%',
    marginRight: 30,

},

timePickerContainer: {
    backgroundColor: '#ECECEC',
    borderRadius: 10,
    marginBottom: 155,
    padding: 5,
    width: '70%',
    marginRight: 30,
},

modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

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


// Sleep Component

sleepTitle: {
    fontFamily: 'Koulen-Regular',
    fontSize: 40,
    marginLeft: 40,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#0F2951',
},

sleepText: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 5,
    color: '#0F2951',
    alignSelf: 'flex-start',
    marginLeft: 45,
    marginBottom: 10,
    fontFamily: 'Koulen-Regular',
},

sleepInputText:{
    fontSize: 20,
    marginTop: 5,
    color: '#0F2951',
    alignSelf: 'flex-start',
    marginLeft: 45,
    fontFamily: 'Koulen-Regular',
    left: 10,
},

radioButton: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginLeft: 50,
},

radioButtonOutline: {
    padding: 0.5,             // Space between radio button and the outline
    borderRadius: 30,       // Match the radio button's circular shape
    borderWidth: 1.5,         // Outline thickness
    borderColor: '#8D8D8D',
    marginRight: 5,
    marginBottom: 5,
},

rblabel: {
    fontSize: 20,
    color: '#0F2951',
    fontFamily: 'Koulen-Regular',
},

inputSleepCont:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
    marginBottom: 10,
    marginLeft: 40,

},


sleepText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 10,
},

sleepInput: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,

    color: 'black',
    marginBottom: 5,
    width: '65%',
    left: 10,

    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    width: '90%',
    backgroundColor: '#ffffff', // White background for the input

},
sleepHours: {

    fontSize: 32,
    fontWeight: 'bold',
    color: '#0F2951',
    marginLeft: 20,
    marginBottom: 10,
},
sleepTimeContainer: {
    borderRadius: 10,
    backgroundColor: '#ECECEC',
    borderColor: '#ECECEC',
    borderWidth: 4,
    width: '70%',
    height: 50,
},

timePickerSleepContainer: {
    backgroundColor: '#ECECEC',
    borderRadius: 10,
    marginTop: 325,
    padding: 5,
    width: '60%',
    marginRight: 60,
    // borderColor: 'black',
    // borderWidth: 1
    

},

sleepSubmit: {
    backgroundColor: '#D7D7D7',
    padding: 10,
    borderRadius: 10,
    width: 135,
    alignSelf: 'center',
    marginTop: 50,
},

sleepSubmitText:{
    color: 'white',
    fontSize: 15,
    textAlign: 'center',

},

//sleepChart

sleepChartTitle: {
    fontSize: 20,
    color: '#0F2951',
    fontFamily: 'Koulen-Regular',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 70,
},

// Dashboard Component
dashboardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#4BA5E3',
},

dashboardTitle: {
    fontSize: 40,
    marginBottom: 20,
    fontWeight: 'bold',
    fontFamily: 'Koulen-Regular',
},

dashboardButton: {
    backgroundColor: '#3C68AA',
    padding: 5,
    borderRadius: 5,
    marginBottom: 20,
    fontFamily: 'Koulen-Regular',
},

dashboardText: {
    color: '#FFF',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Koulen-Regular',
},

dashboardLink: {
    color: '#FFF',
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontFamily: 'Koulen-Regular',
},



// Sleep Chart Component
scrollView: {
    flex: 1,
    backgroundColor: 'transparent',
},


// menu styles
menuContainer: {
    position: 'absolute',
    // top: 20,
    right: 0,
  },

burgerButtonPressed: {
    backgroundColor: '#fff',
    padding: 15,
        // marginTop: 10,
    elevation: 5, // For shadow on Android
    shadowColor: '#000', // For shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    zIndex: 1,
    },

burgerButtonUnpressed: {
        position: 'absolute',
        right: 20,
        top: 20,
    },

    burgerButton: {
    paddingBottom: 10,
},

menuDropdown: {
    display: 'flex',
    flexDirection: 'column',
    width: 200,
    height: 700,
},

menuItem: {
    fontSize: 30,
    marginVertical: 10,
    fontFamily: 'Koulen-Regular',
    borderBottomColor: '#ECECEC',
    borderBottomWidth: 1,

bbToggle: {
    marginBottom: 10,
},

  },
  languageToggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  languageButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
// popup styles
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContent: {
      width: 300,
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      alignItems: 'center',
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    modalButton: {
      width: '100%',
      padding: 10,
      backgroundColor: '#007bff',
      borderRadius: 5,
      marginBottom: 10,
      alignItems: 'center',
    },
    modalButtonText: {
      color: 'white',
      fontSize: 16,
    },
    closeButton: {
      marginTop: 20,
      padding: 10,
      backgroundColor: 'red',
      borderRadius: 5,
      alignItems: 'center',
    },
    closeButtonText: {
      color: 'white',
      fontSize: 16,
    },

//pedometer
PedometerContainer: {
    //flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 8,
}, 

pedLabelsCont: {
    display: 'flex',
    flexDirection: 'row',
    //justifyContent: 'center',
    //marginTop: 4,
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#ECECEC',
    
},

PedometerValueContainer: {
    margin: 24,
    marginVertical: 2,
},

PedometerLabel: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Koulen-Regular',
},

PedometerValue: {
    fontSize: 35,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: 'Roboto',
},

ring: {
    position: 'absolute',
    top: 0,
    left: 0,
},

middleRing: {
    postion: 'absolute',
    top: 0,
    left: 0,
},

innerRing: {
    position: 'absolute',
    top: 0,
    left: 0,
},

ringContainer: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
},

//dashboardContainers

dashboardContainers: {
    display: 'flex',
    flexDirection: 'row',
    //justifyContent: 'center',
    //marginTop: 4,
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 32,
    backgroundColor: '#ECECEC',

},

dashboardValueContainer: {
    marginVertical: 2,
},

dashText: {
    paddingHorizontal: 32,
    //marginTop: 4, 
    padding: 5,
    fontFamily: 'Koulen-Regular', 
    fontWeight: 'bold', 
    fontSize: hp(2.3)
},

item: {
    flexDirection: 'row', // Make the row the main axis
    alignItems: 'center', // Align items vertically within the row
    paddingHorizontal: 10, // Add horizontal padding for spacing
    paddingBottom: 10, // Add some padding to the bottom
  },

iconContainer: {
    marginRight: 10, // Add some margin to the right of the icon
},

textContainer: {
    flex: 1, // Take up all available space
    padding: 4,
    //justifyContent: 'center', // Center the text vertically
    //alignItems: 'center', // Center the text horizontally
},

// articles page
ArticlePageTitle: {
    fontSize: 30,
    marginTop: 130,
    fontWeight: 'bold',
    fontFamily: 'Koulen-Regular',
    color: '#0F2951',
    textAlign: 'center',
},

articleContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
},

article: {
    backgroundColor: '#ECECEC',

    padding: 10,
    margin: 10,
    borderRadius: 10,
    // width: 300,
    height: 'auto',
},

fullWidth: {
    width: '94%',
},
halfWidth: {
    width: '44%', // Roughly half-width, with some margin
    height: 400,
},
articleImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
},

articleTitle: { 
    fontSize: 20,
    color: 'Black',
    fontWeight: 'bold',
    fontFamily: 'Koulen-Regular',
    lineHeight: 26,
    marginTop: 10,
},

articleLink: {
    color: '#4BA5E3',
    fontFamily: 'Koulen-Regular',
},
//profile page
profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#4BA5E3',
},

profileBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    position: 'relative',
    elevation: 5, // for shadow effect on Android
},
logoContainer: {
    alignItems: 'center',
    marginBottom: 10,
},
logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
},
editIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
},
profileContent: {
    alignItems: 'flex-start',
},
profileText: {
    fontSize: 16,
    marginVertical: 5,
},
profileInput: {
    marginVertical: 10,
    backgroundColor: '#ECECEC',
    padding: 10,
    borderRadius: 10,
    fontFamily: 'Koulen-Regular',
    color: '#8D8D8D',
    
    
},
profileLine: {
    borderBottomColor: '000000',
    borderBottomWidth: 1,
},


// trainers page

tabIndicator: {
    backgroundColor: '#000',
    height: 2,
    
    //color: '#fff',
  },

  tabTitle: {
    color: '#000',
    fontFamily: 'Koulen-Regular',
    letterSpacing: 1,
    fontSize: 20,
  },

  tabContent: {
    padding: 16,
    width: wp(90),
    //flexDirection: 'column',
  },

  contactItem: {
    flexDirection: 'column',
    //alignItems: 'center',
    marginVertical: 8,
  },

  description: {
    fontSize: 16,
    color: '#333',
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginBottom: 8,
    borderRadius: 10,
    justifyContent: 'center',
    textAlign: 'justify',
  },

  
});

export default styles;
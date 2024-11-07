import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './app/LandingPage';
import Login from './app/Login';
import SignUp from './app/SignUp';
//import ToggleSwitch from './components/ToggleSwitch';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import WaterIntake from './app/WaterIntake';
import AddExercise from './app/AddExercise';
import AddSleep from './app/AddSleep';


function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Landing">
                <Stack.Screen name="Landing" component={LandingPage} options={{ headerShown: false }}/>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="WaterIntake" component={WaterIntake} />
                <Stack.Screen name="AddExercise" component={AddExercise} />
                <Stack.Screen name="AddSleep" component={AddSleep} />
                
            </Stack.Navigator>
        </NavigationContainer>  
    );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import ToggleSwitch from './components/ToggleSwitch';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WaterIntake from './app/WaterIntake';
import AddExercise from './app/AddExercise';
import AddSleep from './app/AddSleep';
import LandingPage from './app/LandingPage';
import Login from './app/Login';
import SignUp from './app/SignUp';
import ExerciseList from './app/ExerciseList';
import WaterChart from './app/WaterChart';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Landing">
                <Stack.Screen name="Landing" component={LandingPage}/>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="WaterIntake" component={WaterIntake} />
                <Stack.Screen name="WaterChart" component={WaterChart} />
                <Stack.Screen name="AddExercise" component={AddExercise} />
                <Stack.Screen name="AddSleep" component={AddSleep} />
                <Stack.Screen name="ExerciseList" component={ExerciseList} />
                
            </Stack.Navigator>
        </NavigationContainer>  
    );
}

export default App;

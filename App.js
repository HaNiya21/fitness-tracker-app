import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'intl-pluralrules';

import WaterIntake from './app/WaterIntake';
import AddExercise from './app/AddExercise';
import AddSleep from './app/AddSleep';
import LandingPage from './app/LandingPage';
import Login from './app/Login';
import SignUp from './app/SignUp';
import ExerciseBodyPart from './app/ExerciseBodyPart';
import Exercises from './app/Exercises';
import TrainerList from './app/TrainerList';
import TrainerDetails from './app/TrainerDetails';
import WaterChart from './app/WaterChart';
import Dashboard from './app/Dashboard'; 
import StepCounter from './app/Pedometer';
import Articles from './app/Articles';
import Progress from './app/Progress';
import SleepChart from './app/SleepChart';
import Menu from './components/Menu';
import ExerciseDetails from './app/ExerciseDetails';
import Profile from './app/Profile';
import HeaderLogo from './components/headerLogo';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Landing">
                <Stack.Screen 
                    name="Landing" 
                    component={LandingPage} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="Login" 
                    component={Login} 
                    options={{ headerTitle: 'Login' }}
                />
                <Stack.Screen 
                    name="SignUp" 
                    component={SignUp} 
                    options={{ headerTitle: 'Sign Up' }}
                />
                <Stack.Screen 
                    name="WaterIntake" 
                    component={WaterIntake} 
                    options={{ headerTitle: 'Water Intake' }}
                />
                <Stack.Screen 
                    name="WaterChart" 
                    component={WaterChart} 
                    options={{ headerTitle: 'Water Chart' }}
                />
                <Stack.Screen 
                    name="Dashboard" 
                    component={Dashboard} 
                    options={{ headerTitle: 'Dashboard' }}
                />
                <Stack.Screen 
                    name="AddExercise" 
                    component={AddExercise} 
                    options={{ headerTitle: 'Add Exercise' }}
                />
                <Stack.Screen 
                    name="AddSleep" 
                    component={AddSleep} 
                    options={{ headerTitle: 'Add Sleep' }}
                />
                <Stack.Screen 
                    name="ExerciseBodyPart" 
                    component={ExerciseBodyPart} 
                    options={{ headerTitle: 'Exercise by Body Part' }}
                />
                <Stack.Screen 
                    name="Exercises" 
                    component={Exercises} 
                    options={{ headerTitle: 'Exercises' }}
                />
                <Stack.Screen 
                    name="TrainerList" 
                    component={TrainerList} 
                    options={{ headerTitle: 'Trainers' }}
                />
                <Stack.Screen 
                    name="TrainerDetails" 
                    component={TrainerDetails} 
                    options={{ headerTitle: 'Trainers' }}
                />
                <Stack.Screen 
                    name="StepCounter" 
                    component={StepCounter} 
                    options={{ headerTitle: 'Step Counter' }}
                />
                <Stack.Screen 
                    name="Articles" 
                    component={Articles} 
                    options={{ headerTitle: 'Articles' }}
                />
                <Stack.Screen 
                    name="Progress" 
                    component={Progress} 
                    options={{ headerTitle: 'Progress' }}
                />
                <Stack.Screen 
                    name="SleepChart" 
                    component={SleepChart} 
                    options={{ headerTitle: 'Sleep Chart' }}
                />
                <Stack.Screen 
                    name="Profile" 
                    component={Profile} 
                    options={{ headerTitle: 'Profile' }}
                />
                <Stack.Screen 
                    name="ExerciseDetails" 
                    component={ExerciseDetails} 
                    options={{ headerTitle: 'Exercise Details' }}
                />
                <Stack.Screen 
                    name="Menu" 
                    component={Menu} 
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="HeaderLogo"
                    component={HeaderLogo}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

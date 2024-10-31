// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './LandingPage';
import Login from './Login';
import SignUp from './SignUp';
import ToggleSwitch from './ToggleSwitch';

import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={LandingPage} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="ToggleSwitch" component={ToggleSwitch} />
            </Stack.Navigator>
        </NavigationContainer>  
    );
};

export default App;

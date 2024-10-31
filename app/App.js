import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Login';
import SignUp from './SignUp';
import ToggleSwitch from './ToggleSwitch';

import WaterIntake from './WaterIntake';
import footer from './footer';

function App() {
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
}

export default App;

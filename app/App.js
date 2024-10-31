import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Login';
import SignUp from './SignUp';
import WaterIntake from './WaterIntake';
import footer from './footer';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/waterintake" component={WaterIntake} />
                <Route path="/footer" component={footer} />
            </Switch>
        </Router>
    );
}

export default App;

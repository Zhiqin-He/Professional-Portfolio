import React from 'react';
import './app.css';

// Components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import AboutMe from './components/About Me/AboutMe';
import Projects from './components/Projects/Project';
import {useSelector} from 'react-redux';
// import {CSSTransition, TransitionGroup} from 'react-transition-group';
// import {Route, Switch, Redirect, useLocation} from "react-router-dom";

const App = () => {
    // Accessing the theme from the Redux store
    const theme = useSelector((state) => state.theme);

    return (
        <div className="App" style={theme}>
            <Navbar/>
            <Home/>
            <AboutMe/>
            <Projects/>
            {/*<Skills/>*/}
            {/*<Experience/>*/}
            {/*<ContactMe/>*/}
            {/*<Mode/>*/}
        </div>
    );
};

export default App;

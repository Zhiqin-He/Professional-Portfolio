import React from 'react';
import './app.css';

// Components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import AboutMe from './components/About Me/AboutMe';
import Projects from './components/Projects/Project';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import ContactMe from './components/Contact Me/ContactMe';
import Footer from "./components/Footer/Footer";
import {useSelector} from 'react-redux';
import FlockCanvas from "./components/Background/FlockCanvas";

const App = () => {
    // Accessing the theme from the Redux store
    const theme = useSelector((state) => state.theme);

    return (<div style={{position: 'relative'}}>
            <FlockCanvas/>
            <div className="App" style={{position: 'absolute', zIndex: 2, color: theme.color}}>
                <Navbar/>
                <Home/>
                <div style={{backgroundColor: theme.backgroundColor}}>
                    <AboutMe/>
                    <Projects/>
                    <Skills/>
                    <Experience/>
                    <ContactMe/>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default App;

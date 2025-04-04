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

const App = () => {
    // Accessing the theme from the Redux store
    const theme = useSelector((state) => state.theme);

    return (
        <div className="App" style={theme}>
            <Navbar/>
            <Home/>
            <AboutMe/>
            <Projects/>
            <Skills/>
            <Experience/>
            <ContactMe/>
            <Footer/>
        </div>
    );
};

export default App;

import React, {useEffect} from "react";
import Typewriter from 'typewriter-effect/dist/core';
import profileAvatar from "../asset/logo.png";
import PersonalData from "../../Data/PersonalData";
import classes from "./home.module.css";
import {autoTypeData} from "../../Data/PersonalData";

import SocialLinks from "../SocialLinks/SocialLinks";
import {useSelector} from "react-redux";

function Home(props) {

    const uiColor = useSelector(state => state.uiColor);
    const backgroundColor = useSelector(state => state.theme.backgroundColor);

    function handleTyper() {
        let textItems = autoTypeData;
        var autoTyper = document.getElementById('typer');
        new Typewriter(autoTyper, {
            strings: textItems,
            autoStart: true,
            pauseFor: 1000,
            loop: true,
        });
    }

    useEffect(
        handleTyper
        , []);
    return (
        <main>
            <div className={classes.homeContent}>
                <h2 id="home"
                    style={{backgroundColor: backgroundColor, boxShadow: '0 0 .5em .5em ' + backgroundColor}}>Hi,
                    I'm&nbsp;<span id="name"
                                   style={{color: uiColor}}>{PersonalData.firstName}&nbsp;{PersonalData.lastName}</span>
                </h2>
                <div className={classes.avatarImage}>
                    <img src={profileAvatar} alt="Profile" srcSet=""/>
                </div>
                <div className={classes.autoText}
                     style={{backgroundColor: backgroundColor, boxShadow: '0 0 .5em .5em ' + backgroundColor}}>
                    I am a&nbsp;<span id="typer" style={{color: uiColor}}></span>
                </div>
                <SocialLinks className={classes.links}/>
            </div>
        </main>
    )
}

export default Home;
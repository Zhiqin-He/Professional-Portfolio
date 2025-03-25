import React, { useEffect } from "react";
import Typewriter from 'typewriter-effect/dist/core';
import profileAvatar from "../asset/logo.png";
import PersonalData from "../../Data/PersonalData";
import classes from "./home.module.css";
import { autoTypeData } from "../../Data/PersonalData";

import SocialLinks from "../SocialLinks/SocialLinks";
import { useSelector } from "react-redux";

function Home(props) {

    const uiColor=useSelector(state=>state.uiColor);
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
    ,[]);
    return (
        <main id="home">
            <div className={classes.homeContent}>
                <h2>Hi, I'm &nbsp;<span id="name" style={{ color: uiColor }}>{PersonalData.firstName}&nbsp;{PersonalData.lastName}</span></h2>
                <div className={classes.avatarImage}>
                    <img src={profileAvatar} alt="Profile" srcSet="" />
                </div>
                <div className={classes.autoText}>
                    I am a &nbsp; <span id="typer" style={{ color: uiColor }}></span>
                </div>
                <SocialLinks className={classes.links} />
            </div>
        </main>
    )
}
export default Home;
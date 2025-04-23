import React from "react";

import classes from "./ContactMe.module.css";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';

import PersonalData from "../../Data/PersonalData";
import {useSelector} from "react-redux";
import {LinkedIn} from "@mui/icons-material";

const data = [PersonalData.email];

const ContactMe = (props) => {

    const uiColor = useSelector(state => state.uiColor);
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const backgroundColor = useSelector(state => state.theme.backgroundColor);
    const Icons = [<LocationOnIcon fontSize="large"/>, <LinkedIn fontSize="large"/>, <CallIcon fontSize="large"/>];

    const contactDetails = data.map((item, index) =>
        <div className={classes.contactCard} style={{color: nonThemeColor}} key={index}>
            <div className={classes.contactIcon} style={{backgroundColor: uiColor}}>{Icons[index]}</div>
            <div className={classes.contactValue}>{item}</div>
        </div>
    );
    return (
        <div id="contact" className={classes.getInTouch} style={{borderColor: uiColor, backgroundColor: backgroundColor}}>
            <div className={classes.getInTouchCard}>
                <div className={classes.contactComponent}>
                    <h1 style={{color: nonThemeColor}}>Get In Touch</h1>
                    <p>
                        I would love to hear from you, so whether you have a question or just want to say
                        hello, please feel free to contact me!
                    </p>
                </div>
                <div className={classes.contactComponent} style={{display: 'flex'}}>
                    {contactDetails}
                </div>
            </div>
        </div>
    )
};
export default ContactMe;
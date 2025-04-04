import React from "react";

import PersonalData from "../../Data/PersonalData";
import CopyrightIcon from '@mui/icons-material/Copyright';
import "./footer.css";
import {useSelector} from "react-redux";

function Footer() {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    return (
        <footer className="centered" style={{color: nonThemeColor}}>
            <CopyrightIcon/>
            &nbsp;Updated&nbsp;{PersonalData.lastUpdated}&nbsp;by&nbsp;
            <span style={{fontWeight: "800"}}> {PersonalData.firstName}&nbsp;{PersonalData.lastName}</span>
        </footer>
    )
}

export default Footer;
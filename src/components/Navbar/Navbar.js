import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import './navbar.css';

import ColorModal from "./ColorModal";
import Routes from "./Routes";

import PersonalData from "../../Data/PersonalData";

const Navbar = () => {

    const menuRef = useRef();

    const nonThemeColor = useSelector(state => state.nonThemeColor);

    const mode = useSelector(state => state.mode);
    useEffect(() => {
        if (mode === "dark") {
            const lightModeBtn = document.getElementById("lightModeBtn")
            const darkModeBtn = document.getElementById("darkModeBtn")
            lightModeBtn.style.display = "none";
            darkModeBtn.style.display = "block";
            darkModeBtn.style.color = "black";
        }
    }, [mode])
    const bgColor = useSelector(state => state.theme.backgroundColor);

    // const [mode, setMode] = useState("light");
    const [isDropDownVisible, setIsDropDownVisible] = useState(false);

    function handleDropDown() {
        setIsDropDownVisible((prevValue) => {
            return !prevValue;
        });
    }

    function handleNavigate() {
        handleDropDown();
        menuRef.current.checked = false;
    }


    return (
        <div className="main">
            <div className="navbar" style={{backgroundColor: bgColor}}>
                <div className="logoContainer">
                    <div id="logo">
                        {PersonalData.firstName}&nbsp;&nbsp;{PersonalData.lastName}
                    </div>
                </div>
                <div className="navsContainer" style={{color: nonThemeColor}}>
                    <Routes/>
                </div>
            </div>
            {isDropDownVisible && <div className="mob-nav" style={{color: 'white'}}>
                <Routes onClick={handleNavigate}/>
            </div>}
        </div>
    )
}

export default Navbar;
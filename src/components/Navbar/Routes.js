import React from "react";

// import {NavLink} from "react-router-dom/cjs/react-router-dom.min";

function Routes(props) {

    const toggleActive = (index) => {
        const navs = document.getElementsByClassName("navs");
        console.log(navs.length);
        for (let i = 0; i < navs.length; i++) {
            navs[i].classList.remove("active");
        }
        navs[index].classList.add("active");
    }
    return (
        <>
            {/* For broswer router replace-
            a -> NavLink
            href - to 
            # - / */}

            <a href="#home" onClick={props.onClick}>
                <div className="navs active" onClick={() => toggleActive(0)}>Home</div>
            </a>
            <a href="#about" onClick={props.onClick}>
                <div className="navs" onClick={() => toggleActive(1)}>About Me</div>
            </a>
            <a href="#projects" onClick={props.onClick}>
                <div className="navs" onClick={() => toggleActive(2)}>Projects</div>
            </a>
            <a href="#skills" onClick={props.onClick}>
                <div className="navs" onClick={() => toggleActive(3)}>Skills</div>
            </a>
            <a href="#experience" onClick={props.onClick}>
                <div className="navs" onClick={() => toggleActive(4)}>Experience</div>
            </a>
            <a href="#contact" onClick={props.onClick}>
                <div className="navs" onClick={() => toggleActive(5)}>Contact Me!</div>
            </a>

        </>
    )
}

export default Routes;
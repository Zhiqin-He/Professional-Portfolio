import classes from "./skills.module.css";
import {CPP, Python, ReactJS, NodeJs, JavaScript, Java, GitHub, Docker} from "../asset/svg/svg";
import {useSelector} from "react-redux";

const skills = [Java, Python, CPP, JavaScript, ReactJS, NodeJs, GitHub, Docker];
const skillNames = ["Java", "Python", "C++", "JavaScript", "ReactJS", "NodeJS", "Git", "Docker"];
const Skills = (props) => {

    const uiColor = useSelector(state => state.uiColor);
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const backgroundColor = useSelector(state => state.theme.backgroundColor);

    return (
        <div id="skills" className={classes.mainCard}>
            <h1 style={{
                color: nonThemeColor, backgroundColor: backgroundColor,
                boxShadow: '0 0 .5em .5em ' + backgroundColor
            }}>My <span style={{color: uiColor}}>Skills</span></h1>
            <div className={classes.skillSetCard} style={{color: nonThemeColor}}>
                {skills.map((Item, index) =>
                    <div className={classes.skillItem} style={{borderColor: uiColor, backgroundColor: backgroundColor}}
                         key={index}>
                        <Item/>
                        <span className={classes.skillName}>{skillNames[index]}</span>
                    </div>
                )}
            </div>
        </div>

    )
};

export default Skills;
import classes from "./programmingSkills.module.css";
import {CPP, Python, ReactJS, NodeJs, JavaScript, Java, GitHub, Docker} from "../asset/svg/svg";
import {useSelector} from "react-redux";

const skills = [Java, Python, CPP, JavaScript, ReactJS, NodeJs, GitHub, Docker];
const skillNames = ["Java", "Python", "C++", "JavaScript", "ReactJS", "NodeJS", "Git", "Docker"];
const ProgrammingSkills = (props) => {

    const uiColor = useSelector(state => state.uiColor);
    const nonThemeColor = useSelector(state => state.nonThemeColor);

    return (
        <div className={classes.mainCard}>
            <h1 style={{color: nonThemeColor}}>Programming <span style={{color: uiColor}}>Skills</span></h1>
            <div className={classes.skillSetCard} style={{color: nonThemeColor}}>
                {skills.map((Item, index) =>
                    <div className={classes.skillItem} style={{borderColor: uiColor}} key={index}>
                        <Item/>
                        <span className={classes.skillName}>{skillNames[index]}</span>
                    </div>
                )}
            </div>
        </div>

    )
};

export default ProgrammingSkills;
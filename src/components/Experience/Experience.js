import React, {Fragment} from "react";

import ExperienceData from "./ExperienceData";
import classes from "./experience.module.css";
import {useSelector} from "react-redux";
import Card from "../UI/Card";

function Experience(props) {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const uiColor = useSelector(state => state.uiColor);
    const backgroundColor = useSelector(state => state.theme.backgroundColor);

    return (
        <Fragment>
            <div id="experience" className={classes.experienceMain}>
                <h1 style={{color: nonThemeColor}}>
                    My <span style={{color: uiColor}}>Experiences</span>
                </h1>
                {ExperienceData.map((item) =>
                    <div className={classes.experienceCard}>
                        <div className={`${classes.experienceImage} centered`}
                             style={{borderColor: uiColor, backgroundColor: backgroundColor}}>
                            {item.logo}
                        </div>
                        <Card className={classes.experienceWrapper}>
                            <div className={classes.experienceInfo}>
                                <h3 style={{color: nonThemeColor}}>{item.start} - {item.end}</h3>
                                <h1 style={{color: uiColor}}>{item.company}</h1>
                                <h2 style={{color: nonThemeColor}}>{item.jobTitle}</h2>
                            </div>
                            <ul className={classes.details}>
                                {item.details.map((item, index) =>
                                    <li key={index}>{item}</li>
                                )}
                            </ul>
                        </Card>
                    </div>
                )}
            </div>
        </Fragment>
    )
}

export default Experience;
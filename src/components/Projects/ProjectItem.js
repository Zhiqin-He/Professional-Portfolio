import React from "react";

import classes from "./ProjectItem.module.css";
import Card from "../UI/Card";

// import StarIcon from '@mui/icons-material/Star';
import GitHubIcon from '@mui/icons-material/GitHub';
import {useSelector} from "react-redux";

const ProjectItem = (props) => {

    const uiColor = useSelector(state => state.uiColor);
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const backgroundColor = useSelector(state => state.backgroundColor);

    let description = props.project.description;
    if (description === '') {
        description = " project description";
    }
    if (description.length > 120) {
        description = description.substring(0, 110);
        description = description + " ... ";
    }

    return (
        <Card className={classes.projectItem}>
            <h2 className={classes.projectTitle} style={{color: uiColor}}>
                {props.project.projectTitle}
            </h2>
            <div className={classes.overlay} style={{backgroundColor: backgroundColor}}>
                <div className={classes.cardContent}>
                    <div className={classes.descriptionContainer}>
                        <p className={classes.description}>{description}</p>
                    </div>
                    <div className={classes.controls}>
                        <div className={classes.projectLink}>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={props.project.sourceLink}
                                style={{color: nonThemeColor}}
                            >
                                <GitHubIcon fontSize="large"/>
                            </a>
                        </div>
                        <p className={classes.dateUpdated} style={{color: nonThemeColor}}>
                            Last Updated On: {props.project.lastUpdated}
                        </p>
                    </div>
                </div>
            </div>
        </Card>
    )
};
export default ProjectItem;
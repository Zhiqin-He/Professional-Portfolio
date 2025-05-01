import React from "react";

import styles from "./project.module.css";
import ProjectItem from "./ProjectItem";
import ProjectsData from "./ProjectsData";
import SocialData from "../../Data/SocialData";
import Button from "../UI/Button";
import {useSelector} from "react-redux";

const Projects = (props) => {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    let projects = ProjectsData.PROJECT_DATA;
    return (
        <div id="projects">
            <h1 className={styles.projectHeading} style={{color: nonThemeColor}}>My Projects</h1>
            <div className={styles.projectList}>
                {projects.map((item, index) => {
                    return <ProjectItem key={index} project={item}/>
                })}
            </div>
            <div className={styles.moreProject}>
                <a target="_blank" rel="noreferrer" href={`${SocialData.githubLink}?tab=repositories`}>
                    <Button>More Projects</Button>
                </a>
            </div>
        </div>
    )
};

export default Projects;
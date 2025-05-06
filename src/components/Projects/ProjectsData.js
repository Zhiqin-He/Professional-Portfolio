import canvasBotImg from "../asset/projectImg/canvas_bot_demo.png";
import frcImg from "../asset/projectImg/frc_demo.png";
import getKrakenImg from "../asset/projectImg/get_kraken_demo.png";
import tempoImg from "../asset/projectImg/tempo_demo.png";

const PROJECT_DATA = [
    {
        projectTitle: 'GetKraken – Search Engine for GitHub',
        description: 'Search engine that surfaces relevant GitHub repositories based on user queries.',
        sourceLink: 'https://github.com/RAdvika/getKraken',
        lastUpdated: 'May 2025',
        projectImage: getKrakenImg
    },
    {
        projectTitle: 'Canvas Bot',
        description: 'Bot that automated class monitoring within the Canvas Learning Management System (LMS) by leveraging the Canvas API.',
        sourceLink: 'https://github.com/Zhiqin-He/canvas-bot',
        lastUpdated: 'Apr 2025',
        projectImage: canvasBotImg
    },
    {
        projectTitle: 'Tempo – Music App',
        description: 'Android application for creating custom playlists.',
        sourceLink: 'https://github.com/Zhiqin-He/Tempo',
        lastUpdated: 'May 2022',
        projectImage: tempoImg
    },
    {
        projectTitle: 'Semi-autonomous Robot for FRC',
        description: 'As Coding Captain, coordinated with three other programmers to develop code in Java for a robot to use in competition.',
        sourceLink: 'https://github.com/rtr2421/DeepSpace',
        lastUpdated: 'Jan 2023',
        projectImage: frcImg
    }
];
const ProjectsData = {PROJECT_DATA: PROJECT_DATA};
export default ProjectsData;
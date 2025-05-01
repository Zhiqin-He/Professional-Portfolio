import {Amazon, Cornell, Palantir} from "../asset/svg/svg"

const ExperienceData = [
    {
        company: "Cornell",
        jobTitle: "Teaching Assistant",
        start: "8/2024",
        end: "12/2024",
        details: [
            'Led weekly sessions for 30-40 students in the Computer Science department, supporting faculty in delivering and enhancing course content. Took initiative to automate student task tracking by developing a Canvas bot that alerted students about upcoming and missing assignments, improving student engagement and reducing faculty workload.',
            'Designed and implemented an automated notification system using Python and the Canvas API, eliminating the need for manual oversight of assignment submissions.',
            'Collaborated closely with professors and teaching staff, demonstrating effective communication and leadership across academic and technical tasks.'
        ],
        logo: <Cornell/>
    },
    {
        company: "Palantir",
        jobTitle: "Software Engineering Intern",
        start: "5/2024",
        end: "8/2024",
        details: [
            'Spearheaded the design and implementation of a project to define synonyms for objects across two company products, enabling seamless data migration for multiple teams. To that end, also developed and deployed several API endpoints to ensure efficient integration',
            'Collaborated closely with internal customers to successfully deploy the project, leveraging AI tools and Java for optimized performance.',
            'Utilized Git for version control and contributed to the migration of internal teams off legacy databases by addressing various technical tickets.'
        ],
        logo: <Palantir/>
    },
    {
        company: "Amazon",
        jobTitle: "Software Engineering Intern",
        start: "5/2023",
        end: "8/2023",
        details: [
            'Led weekly sessions for 30-40 students in the Computer Science department, supporting faculty in delivering and enhancing course content. Took initiative to automate student task tracking by developing a Canvas bot that alerted students about upcoming and missing assignments, improving student engagement and reducing faculty workload.',
            'Designed and implemented an automated notification system using Python and the Canvas API, eliminating the need for manual oversight of assignment submissions.',
            'Collaborated closely with professors and teaching staff, demonstrating effective communication and leadership across academic and technical tasks.'
        ],
        logo: <Amazon/>
    }
]

export default ExperienceData;
import React from "react";
import { Link } from "react-router-dom";

import styles from "./ProjectsSection.module.scss";
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.jpg";
import project4 from "../../assets/project4.jpg";

import MediumContainer from "../../components/MediumContainer/MediumContainer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Title from "../../components/Title/Title";

const ProjectsSection = () => {
    const projects = [
        {
            image: project1,
            title: "Windows 10",
            description:
                "My first Pet-Project in which I went deep into JS and realized a lot of pet projects internally: 2 games (Dino game, Snake game), Weather App (work with API), Calculator.",
            technologies: ["Vanilla JS", "SCSS", "HTML", "API"],
            link_live: "https://prmakk.github.io/windows10/",
            link_github: "https://github.com/prmakk/windows10",
        },
        {
            image: project2,
            title: "Netclicks",
            description:
                "An interesting project in which I became more familiar with React and API. Made my first pagination.",
            technologies: ["React", "SCSS", "TMDB API"],
            link_live: "https://netclicks.netlify.app/",
            link_github: "https://github.com/prmakk/netclicks",
        },
        {
            image: project3,
            title: "Weekly Planner",
            description:
                "A project I developed for my own purposes. I still use it to plan my week with ease.",
            technologies: ["React", "SCSS"],
            link_live: "https://planyourweek.netlify.app/",
            link_github: "https://github.com/prmakk/weekly_planner",
        },
        {
            image: project4,
            title: "E-commerce shop",
            description:
                "One of the first projects to work with API. Learned basic things in React - state and conditional rendering.",
            technologies: ["React", "SCSS", "API"],
            link_live: "https://fashionshopprmak.netlify.app/",
            link_github: "https://github.com/prmakk/fashion_shop",
        },
    ];

    return (
        <MediumContainer>
            <section className={styles.projects} id="projects">
                <Title>{'<Projects />'}</Title>
                <div className={styles.grid}>
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.link_live}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            link_live={project.link_live}
                            link_github={project.link_github}
                        />
                    ))}
                </div>
                <div className={styles.more}>
                    <Link to='/projects'>
                        Show more
                        <svg
                            width="14.292236"
                            height="14.609863"
                            viewBox="0 0 14.2922 14.6099"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            xlink="http://www.w3.org/1999/xlink"
                        >
                            <defs />
                            <path
                                id="Vector"
                                d="M9.39453 3.55371C8.90063 2.93555 8.48096 2.43506 8.09619 1.91943C7.26025 0.814453 7.25391 -0.00341797 8.09009 0C9.48657 0.0112305 10.885 0.0341797 12.2856 0.0678711C12.531 0.0742188 12.801 0.111816 13.0754 0.196777C13.6958 0.397461 14.2805 1.17139 14.292 1.79541C14.2949 1.98291 14.2776 2.16113 14.2354 2.30908C13.9209 3.53516 13.9714 5.00146 14.1184 6.52979C14.1594 6.96533 14.2048 7.42285 14.166 7.80859C14.1042 8.49121 13.6296 8.43945 12.9429 7.69629C12.2375 6.93018 11.5547 6.13379 10.7898 5.27588C10.5615 5.40771 10.3206 5.47314 10.1599 5.63965C8.42725 7.40283 6.72559 9.20508 4.98682 10.9609C3.8335 12.1221 2.64355 13.2373 1.45337 14.3521C1.30688 14.4946 1.10913 14.5894 0.878174 14.6089C0.749512 14.623 0.507568 14.4873 0.339111 14.3433C0.0639648 14.1069 -0.0378418 13.7959 0.012207 13.5913C0.0722656 13.3662 0.179688 13.1665 0.319824 13.0166C1.09668 12.2188 1.896 11.4414 2.67285 10.6436C3.96411 9.32129 5.25146 8.00195 6.53638 6.67188C7.38232 5.79395 8.22217 4.9082 9.06177 4.02246C9.16357 3.91553 9.23218 3.78467 9.39453 3.55371ZM12.5266 5.49658C12.5256 4.14258 12.52 3.0835 12.5156 1.83398C11.5391 1.95557 10.4888 1.66748 9.70532 1.96387C10.6128 3.1001 11.4585 4.15918 12.5266 5.49658Z"
                                fill="#FFFFFF"
                                fillOpacity="1.000000"
                                fillRule="nonzero"
                            />
                        </svg>
                    </Link>
                </div>
            </section>
        </MediumContainer>
    );
};

export default ProjectsSection;

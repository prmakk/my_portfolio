import React, { useEffect } from 'react'

import styles from './AdditionalProjects.module.scss'

import MediumContainer from '../../components/MediumContainer/MediumContainer'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import Title from '../../components/Title/Title'

import project1 from '../../assets/add_project1.jpg'
import project2 from '../../assets/add_project2.jpg'

const AdditionalProjectsSection = () => {
    const projects = [
        {
            image: project1,
            title: "ClickerCoin",
            description:
                "An ironic game inspired by NotCoin. First time using Typescript.",
            technologies: ["React", "SCSS", "Typescript"],
            link_live: "https://bomjcoin.netlify.app",
            link_github: "https://github.com/prmakk/bomj_coin",
        },
        {
            image: project2,
            title: "PiedPiper",
            description:
                "My small platform where you can encode and decode your data, generate QR, modificate text and edit your images. I made it when I was watching the show Sillicon Valley.",
            technologies: ["React", "SCSS"],
            link_live: "https://piperencode.netlify.app",
            link_github: "https://github.com/prmakk/encode_decode",
        },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <MediumContainer>
            <section className={styles.projects}>
                <Title>{'<Other projects />'}</Title>
                <div className={styles.grid}>
                    {projects.map(project => (
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

            </section>
        </MediumContainer>
    )
}

export default AdditionalProjectsSection
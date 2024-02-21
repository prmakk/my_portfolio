import React from 'react'

import styles from './SkillsSections.module.scss'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import sass from '../../assets/sass.webp'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import rtk from '../../assets/redux.svg'
import typescript from '../../assets/typescript.png'
import git from '../../assets/git.png'

import SkillCard from '../../components/SkillCard/SkillCard'
import MediumContainer from '../../components/MediumContainer/MediumContainer'
import Title from '../../components/Title/Title'


const SkillsSection = () => {
    return (
        <MediumContainer>
            <section className={styles.skills} id="skills">
                <Title>{'<Skills />'}</Title>
                <div className={styles.grid}>
                    <SkillCard img={html} text="html" />
                    <SkillCard img={css} text="css" />
                    <SkillCard img={sass} text="sass" />
                    <SkillCard img={js} text="javascript" />
                    <SkillCard img={react} text="react" />
                    <SkillCard img={rtk} text="redux toolkit" />
                    <SkillCard img={typescript} text="typescript" />
                    <SkillCard img={git} text="git" />
                </div>
            </section>
        </MediumContainer>
    )
}

export default SkillsSection
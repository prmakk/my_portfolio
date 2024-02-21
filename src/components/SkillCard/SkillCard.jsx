import React from 'react'
import styles from './SkillCard.module.scss'

const SkillCard = ({img, text}) => {
    return (
        <div className={styles.skill}>
            <img src={img} alt="tech_logo" />
            <p>{text}</p> 
        </div>
    )
}

export default SkillCard
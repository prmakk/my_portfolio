import React from 'react'

import styles from './TechnologyCard.module.scss'

const TechnologyCard = ({tech}) => {
    return (
        <span className={styles.tech}>
            {tech}
        </span>
    )
}

export default TechnologyCard
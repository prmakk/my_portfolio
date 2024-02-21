import React from 'react'

import styles from './MediumContainer.module.scss'

const MediumContainer = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default MediumContainer
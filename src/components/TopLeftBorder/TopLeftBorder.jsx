import React from 'react'
import styles from './TopLeftBorder.module.scss'

const TopLeftBorder = () => {
    return (
        <div className={styles.topleft_border}>
            <span className={styles.topborder}></span>
            <span className={styles.leftborder}></span>
        </div>
    )
}

export default TopLeftBorder
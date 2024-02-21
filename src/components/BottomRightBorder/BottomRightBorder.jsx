import React from 'react'

import styles from './BottomRightBorder.module.scss'

const BottomRightBorder = () => {
    return (
        <div className={styles.bottomright_border}>
            <span className={styles.rightborder}></span>
            <span className={styles.bottomborder}></span>
        </div>
    )
}

export default BottomRightBorder
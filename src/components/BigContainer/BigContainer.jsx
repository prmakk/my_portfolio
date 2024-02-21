import React from 'react'

import styles from './BigContainer.module.scss'

const BigContainer = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default BigContainer
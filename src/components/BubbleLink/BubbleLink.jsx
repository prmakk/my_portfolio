import React from "react";

import styles from "./BubbleLink.module.scss";
import 'animate.css';

const BubbleLink = ({ link, image, left, top }) => {

    return (
        <div
            className={styles.bubble}
            style={{ left: `${left}%`, top: `${top}%` }}
        >
            <a href={link} rel='noopener' target="blank" className="animate__animated animate__rollIn">
                <img src={image} alt="site_logo" />
            </a>
        </div>
    );
};

export default BubbleLink;

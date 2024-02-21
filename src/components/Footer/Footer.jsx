import React from "react";
import { Link } from "react-scroll";

import styles from "./Footer.module.scss";
import github from '../../assets/github.svg'
import telegram from "../../assets/Telegram_logo.svg";
import linkedin from '../../assets/LinkedIn.webp'

import BigContainer from "../BigContainer/BigContainer";


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <BigContainer>
                <p className={styles.name}>Vlad Pryimak</p>
                <nav>
                    <ul>
                        <li>
                            <Link
                                to="about"
                                smooth={true}
                            >
                                About me
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="skills"
                                smooth={true}
                            >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="projects"
                                smooth={true}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="contact"
                                smooth={true}
                            >
                                Contact me
                            </Link>
                        </li>
                        <li onClick={() => window.scrollTo(0, 0)}>
                            Back to top
                        </li>
                    </ul>
                </nav>
                <div className={styles.links}>
                    <a href="https://github.com/prmakk" rel='noopener' target="blank">
                        <img src={github} alt="github" />
                    </a>
                    <a href="https://t.me/prmakk" rel='noopener' target="blank">
                        <img src={telegram} alt="telegram" />
                    </a>
                    <a href="https://www.linkedin.com/in/priymakvladislav/" rel='noopener' target="blank">
                        <img src={linkedin} alt="linkedin" />
                    </a>
                </div>
                <p className={styles.copyright}>Copyright © Vladyslav Pryimak. All rights reserved</p>
            </BigContainer>
        </footer>
    );
};

export default Footer;

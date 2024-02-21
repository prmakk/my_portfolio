import React, { useState } from "react";
import { Link } from "react-scroll";
import { Link as LinkRoute } from "react-router-dom";

import 'animate.css';
import styles from "./Header.module.scss";

import BigContainer from "../BigContainer/BigContainer";
import Arrow from "../../components/Arrow/Arrow";

const Header = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const handleMenu = () => {
        setIsMenuOpened(!isMenuOpened);
        //document.body.style.overflow = isMenuOpened ? null : 'hidden';
    };

    return (
        <header className={`animate__animated animate__fadeIn ${styles.header}`}>
            <BigContainer>
                <Arrow text="Open me"/>

                <nav className={styles.navbar}>
                    <LinkRoute
                        to="/"
                        className={styles["nav-branding"]}
                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: "smooth",
                            })
                        }
                    >
                        {'<PRMAK />'}
                    </LinkRoute>

                    <ul
                        className={
                            isMenuOpened
                                ? `${styles.nav__menu} ${styles.active}`
                                : styles["nav__menu"]
                        }
                    >
                        <li className={styles["nav__menu-item"]}>
                            <Link
                                onClick={handleMenu}
                                to="about"
                                smooth={true}
                                className={styles["nav__menu-link"]}
                            >
                                About me
                            </Link>
                        </li>
                        <li className={styles["nav__menu-item"]}>
                            <Link
                                onClick={handleMenu}
                                to="skills"
                                smooth={true}
                                className={styles["nav__menu-link"]}
                            >
                                Skills
                            </Link>
                        </li>
                        <li className={styles["nav__menu-item"]}>
                            <Link
                                onClick={handleMenu}
                                to="projects"
                                smooth={true}
                                className={styles["nav__menu-link"]}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className={styles["nav__menu-item"]}>
                            <Link
                                onClick={handleMenu}
                                to="contact"
                                smooth={true}
                                className={styles["nav__menu-link"]}
                            >
                                Contact me
                            </Link>
                        </li>
                    </ul>

                    <div
                        className={`${styles.hamburger} ${
                            isMenuOpened ? styles.active : ""
                        }`}
                        onClick={handleMenu}
                    >
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </div>
                </nav>
            </BigContainer>
        </header>
    );
};

export default Header;

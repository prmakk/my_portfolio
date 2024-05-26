import React from "react";

import styles from "./AboutSection.module.scss";

import MediumContainer from "../../components/MediumContainer/MediumContainer";
import TopLeftBorder from "../../components/TopLeftBorder/TopLeftBorder";
import BottomRightBorder from "../../components/BottomRightBorder/BottomRightBorder";
import Title from "../../components/Title/Title";

const AboutSection = () => {
    return (
        <MediumContainer>
            <section className={styles.about} id="about">
                <TopLeftBorder />
                <BottomRightBorder />

                <Title>{'<About me />'}</Title>
                <div className={styles.info}>
                    <div className={styles.text}>
                        <p>
                            <span style={{color: 'rgb(14, 230, 183)', fontWeight: '700'}}>Hello!</span> My name is Vlad and I enjoy creating things
                            that live on the Internet. My interest in web
                            development started back in <span style={{color: 'rgb(14, 230, 183)', fontWeight: '700'}}>2018</span> when I tried to
                            build my first web-site about favourite game using
                            HTML and CSS.
                        </p>

                        <p style={{ marginTop: "30px" }}>
                            Since then, I have tried my hand at different areas
                            of IT. I got a <span style={{color: 'rgb(14, 230, 183)', fontWeight: '700'}}>bachelor's degree in computer science </span>
                            and am now finishing my master's degree. I do what I
                            like to do and get a high from it 🚀
                        </p>
                    </div>
                    <div className={styles.json}>
                        <p className={styles.bracket}>&#123;</p>
                        <p style={{ marginLeft: "25px" }}>
                            <span className={styles.key}>"name"</span>:{" "}
                            <span className={styles.value}>"Vlad Pryimak"</span>
                            ,
                        </p>
                        <p style={{ marginLeft: "25px" }}>
                            <span className={styles.key}>"age"</span>:{" "}
                            <span className={styles.value}>22</span>,
                        </p>
                        <p style={{ marginLeft: "25px" }}>
                            <span className={styles.key}>"hobbies"</span>:{" "}
                            <span className={styles.value}>
                                [ "frontend", "gym", "games" ]
                            </span>
                            ,
                        </p>
                        <p style={{ marginLeft: "25px" }}>
                            <span className={styles.key}>"location"</span>:{" "}
                            <span className={styles.value}>
                                "Kryvyi Rih, Ukraine"
                            </span>
                            ,
                        </p>
                        <p style={{ marginLeft: "25px" }}>
                            <span className={styles.key}>"education"</span>:{" "}
                            <span className={styles.value}>
                                "Bachelor's Degree in Computer Science"
                            </span>
                            ,
                        </p>
                        <p style={{ marginLeft: "25px" }}>
                            <span className={styles.key}>"languages"</span>:{" "}
                            <span className={styles.value}>
                                [ "English", "Russian", "Ukrainian" ]
                            </span>
                            ,
                        </p>
                        <p style={{ marginLeft: "25px" }}>
                            <span className={styles.key}>"english_lvl"</span>:{" "}
                            <span className={styles.value}>
                                "B1"
                            </span>
                            ,
                        </p>
                        <p style={{ marginLeft: "25px" }}>
                            <span className={styles.key}>"favorite_movie"</span>:{" "}
                            <span className={styles.value}>
                                "Interstellar"
                            </span>
                            ,
                        </p>
                        <p style={{ marginLeft: "25px" }}>
                            <span className={styles.key}>"favorite_show"</span>:{" "}
                            <span className={styles.value}>
                                "Mr.Robot"
                            </span>
                            ,
                        </p>
                        <p className={styles.bracket}>&#125;</p>
                    </div>
                </div>
            </section>
        </MediumContainer>
    );
};

export default AboutSection;

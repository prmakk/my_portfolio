import React, { useState } from "react";
import { Link } from "react-scroll";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import 'animate.css';

import MediumContainer from "../../components/MediumContainer/MediumContainer";
import BubbleLink from "../../components/BubbleLink/BubbleLink";

import styles from "./HeroSection.module.scss";
import me from "../../assets/Me.png";
import me_bg from "../../assets/me_bg.png";
import telegram from "../../assets/Telegram_logo.svg";
import linkedin from "../../assets/LinkedIn.webp";
import github from "../../assets/github.svg";
import speech from '../../assets/speech_bubble.png';


const HeroSection = () => {
    const [text] = useTypewriter({
        words:['Front-End Developer'],
        loop: 3,
    });

    const [bubbleText, setBubbleText] = useState('Click me!');
    const phrases = ['How is your day going?', 'Check out my social media', 'Check my projects :)', 'Contact me', 'Check out my GitHub', 'Do you like coffee?)', 'Have a nice day!'];

    const randomPhrase = () => {
        setBubbleText(phrases[Math.floor(Math.random() * phrases.length)])
    }

    return (
        <MediumContainer>
            <section className={styles.hero} id="hero"> 
                <div className={styles.greeting}>
                    <div className={styles.text}>
                        <p className="animate__animated animate__bounceInLeft">Hi, my name is</p>
                        <h1 className="animate__animated animate__fadeIn">Vlad Pryimak</h1>
                        <span className="animate__animated animate__bounceInLeft">
                            and I'm{" "}
                            <span
                                style={{
                                    fontWeight: "900",
                                    fontSize: "45px",
                                }}
                            >
                                {text}
                                <Cursor cursorColor="rgb(14, 230, 183)" cursorStyle="<"/>
                            </span>
                        </span>
                    </div>
                    <div className={styles.links}>
                        <Link to="contact" smooth={true}>
                            Contact me
                        </Link>
                        <a href="https://drive.google.com/file/d/1TV5SWkUm9wTVPS6SNc4D2MzzbJw7vv4-/view" rel='noopener' target="blank">
                            Resume
                            <svg
                                width="14.292236"
                                height="14.609863"
                                viewBox="0 0 14.2922 14.6099"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                xlink="http://www.w3.org/1999/xlink"
                            >
                                <defs />
                                <path
                                    id="Vector"
                                    d="M9.39453 3.55371C8.90063 2.93555 8.48096 2.43506 8.09619 1.91943C7.26025 0.814453 7.25391 -0.00341797 8.09009 0C9.48657 0.0112305 10.885 0.0341797 12.2856 0.0678711C12.531 0.0742188 12.801 0.111816 13.0754 0.196777C13.6958 0.397461 14.2805 1.17139 14.292 1.79541C14.2949 1.98291 14.2776 2.16113 14.2354 2.30908C13.9209 3.53516 13.9714 5.00146 14.1184 6.52979C14.1594 6.96533 14.2048 7.42285 14.166 7.80859C14.1042 8.49121 13.6296 8.43945 12.9429 7.69629C12.2375 6.93018 11.5547 6.13379 10.7898 5.27588C10.5615 5.40771 10.3206 5.47314 10.1599 5.63965C8.42725 7.40283 6.72559 9.20508 4.98682 10.9609C3.8335 12.1221 2.64355 13.2373 1.45337 14.3521C1.30688 14.4946 1.10913 14.5894 0.878174 14.6089C0.749512 14.623 0.507568 14.4873 0.339111 14.3433C0.0639648 14.1069 -0.0378418 13.7959 0.012207 13.5913C0.0722656 13.3662 0.179688 13.1665 0.319824 13.0166C1.09668 12.2188 1.896 11.4414 2.67285 10.6436C3.96411 9.32129 5.25146 8.00195 6.53638 6.67188C7.38232 5.79395 8.22217 4.9082 9.06177 4.02246C9.16357 3.91553 9.23218 3.78467 9.39453 3.55371ZM12.5266 5.49658C12.5256 4.14258 12.52 3.0835 12.5156 1.83398C11.5391 1.95557 10.4888 1.66748 9.70532 1.96387C10.6128 3.1001 11.4585 4.15918 12.5266 5.49658Z"
                                    fill="#FFFFFF"
                                    fillOpacity="1.000000"
                                    fillRule="nonzero"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className={styles.me}>
                    <img src={me} alt="me" className={styles.avatar} />
                    <img
                        src={me_bg}
                        alt="background"
                        className={styles.background}
                    />
                    <div className={styles.speech_bubble} onClick={randomPhrase}>
                        <img src={speech} alt="" className={styles.speech}/>
                        <p className={styles.text}>{bubbleText}</p>
                    </div>
                </div>
                <BubbleLink link="https://t.me/prmakk" image={telegram} left={5} top={65}/>
                <BubbleLink link="https://www.linkedin.com/in/priymakvladislav/" image={linkedin} left={83} top={30}/>
                <BubbleLink link="https://github.com/prmakk" image={github} left={50} top={20}/>
            </section>
        </MediumContainer>
    );
};

export default HeroSection;

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import styles from './ContactForm.module.scss'

const ContactForm = () => {
    const form = useRef();
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_es7siwh", "template_77eho7j", form.current, {
                publicKey: "285ez_1YJD4slZEfq",
            })
            .then(
                () => {
                    setSuccess(true);
                },
                (error) => {
                    setSuccess(false);
                    console.log(error);
                }
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
            <input type="text" name="user_name" placeholder="Your name"/>
            <input type="email" name="user_email" placeholder="Your Email"/>
            <textarea name="message" placeholder="Hey👋, I've got a job for you."/>
            <input type="submit" value="Send" className={styles.button}/>
            <p className={styles.success}>{success ? 'Message sent successfuly!' : null}</p>
        </form>
    );
};

export default ContactForm;

import React from 'react'

import styles from './ContactSection.module.scss'

import MediumContainer from '../../components/MediumContainer/MediumContainer'
import ContactForm from '../../components/ContactForm/ContactForm'
import Title from '../../components/Title/Title'

const ContactSection = () => {
    return (
        <MediumContainer>
            <section className={styles.contact} id='contact'>
                <Title>{'<Contact me />'}</Title>
                <ContactForm />
            </section>
        </MediumContainer>
    )
}

export default ContactSection
import React, { FormEvent, ReactNode, useRef, useState } from "react";
import classes from './Contact2.module.css'
import { CiPhone, CiLinkedin, CiInstagram, CiMail } from "react-icons/ci";
import emailjs from '@emailjs/browser';

interface ContactListProp {
    icon: ReactNode
    info: string
    link?: string
}

const contactArr: ContactListProp[] = [
    {
        icon: <CiPhone size={50} />,
        info: '080-4292884'
    },
    {
        icon: <CiLinkedin size={50} />,
        info: 'Linkedin',
        link: 'https://www.linkedin.com/in/p-nitijarasrat/'
    },
    {
        icon: <CiInstagram size={50} />,
        info: 'qwertyadgsfhzxcvb',
        link: 'https://www.instagram.com/qwertyadgsfhzxcvb/'
    },
    {
        icon: <CiMail size={50} />,
        info: 'puriwatds@gmail.com',
    },
]

const ContactList: React.FC<ContactListProp> = ({ icon, info, link }) => {

    return (
        <li>
            {icon} {link ? <a href={link} target="_blank" rel="noreferrer">{info}</a> : <p>{info}</p>}
        </li>
    )
}

const Contact2: React.FC = () => {
    const [sendStatus, setSendStatus] = useState<'initial' | 'sent' | 'not-sent'>('initial')
    const [isSending, setIsSending] = useState<boolean>(false)

    const form = useRef<HTMLFormElement>(null);

    const formHeader = {
        'initial': 'Send Me Email !',
        'sent': 'Sent ! Thank You <3',
        'not-sent': 'Failed Sending ;-;'
    }

    const formHeaderColor = {
        'initial': 'white',
        'sent': '#00FF00',
        'not-sent': '#FF0000'
    }

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
        setIsSending(true)
        if (form.current) {
            emailjs.sendForm('service_moer4qg', 'template_ka9a1n8', form.current, 'uH4w39kVV7Armh-3T')
                .then((response) => {
                    setIsSending(false)
                    setSendStatus('sent')
                })
                .catch((error) => {
                    setIsSending(false)
                    setSendStatus('not-sent')
                    console.log(error)
                });
        } else {
            console.log('not sent')
        }
    };

    return (
        <section
            data-scroll-section
            id="contact-section"
            className={classes.contact}
        >
            <div
                className={classes.contactList}
            >
                <h1>Let's get in touch !</h1>
                <p>There are several ways for us to contact each other !</p>
                <br />
                <p>Here are my contacts.</p>
                <ul>
                    {
                        contactArr.map((contact) => <ContactList {...contact} />)
                    }
                </ul>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <h1 style={{ color: formHeaderColor[sendStatus] }}>
                    {isSending ? "Sending..." : formHeader[sendStatus]}
                </h1>
                <input type="text" name="user_name" placeholder="NAME" required />
                <input type="email" name="user_email" placeholder="EMAIL" required />
                <textarea name="message" placeholder="SEND ME SOMETHING" required />
                <button>Submit</button>
            </form>
        </section>
    )
}

export default Contact2
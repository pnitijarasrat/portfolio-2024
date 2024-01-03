import React, { ReactNode } from "react";
import classes from './AboutMe3.module.css'
import animate from '../Util/Util.module.css'
import { IoIosFitness, IoIosSchool, IoIosTrendingUp } from "react-icons/io";


interface AboutMeCardProp {
    icon: ReactNode
    header: string
    desc: string
}

const aboutMeArray: AboutMeCardProp[] = [
    {
        icon: <IoIosFitness size={150} />,
        header: 'Discipline',
        desc: "Discipline is the cornerstone of my approach—a guiding force that shapes every endeavor. With a structured mindset, I navigate complexities with precision, ensuring each project is a testament to the commitment I bring to my craft. It's not just about tasks; it's about infusing every effort with an unwavering focus on excellence."
    },
    {
        icon: <IoIosSchool size={150} />,
        header: 'Self-Educate',
        desc: "In the dynamic realm of technology, my journey reflects the power of self-education. As a self-taught coder, I've embraced the challenge of mastering intricate languages and frameworks independently, demonstrating not only technical proficiency but a relentless pursuit of knowledge and growth."
    },
    {
        icon: <IoIosTrendingUp size={150} />,
        header: 'Resilience',
        desc: "In the face of challenges, resilience becomes my secret weapon. Every setback is an opportunity to grow, every obstacle a chance to learn. Resilience, to me, is not just bouncing back; it's bouncing forward, armed with newfound knowledge and an unyielding determination to overcome, innovate, and create solutions that stand strong in the face of change."
    },
]

const AboutMeCard: React.FC<AboutMeCardProp> = ({ icon, header, desc }) => {

    return (
        <div
            data-scroll
            data-scroll-delay="1"
            data-scroll-class={animate.fadeUpAnimation}
            className={classes.aboutMeCard}
        >
            <h1>
                {header}
            </h1>
            <div
                className={classes.iconShadow}
            >
                {icon}
            </div>
            <p>{desc}</p>
        </div>
    )
}

const AboutMe3: React.FC = () => {

    return (
        <section
            data-scroll-section
            className={classes.aboutMe}
        >
            <div
                className={classes.aboutMeHeader}
            >
                <h1>
                    Personality
                </h1>
                <hr
                    data-scroll
                    data-scroll-delay="2"
                    data-scroll-class={animate.growAnimation}
                />
            </div>
            <div
                className={classes.aboutMeContainer}
            >
                {
                    aboutMeArray.map((el) => (<AboutMeCard {...el} />))
                }
            </div>
        </section>
    )
}

export default AboutMe3
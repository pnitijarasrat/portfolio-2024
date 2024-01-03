import React from "react";
import classes from './Skill.module.css'
import figma from '../Asset/img/Figma-1-logo.png'
import cjm from '../Asset/img/customer-journey-map-icon-design-free-vector.jpg'
import sb from '../Asset/img/229092-200.png'
import ut from '../Asset/img/de6636b11d5bbbd67b9c329a4a4c71a6.jpg'
import html from '../Asset/img/732212.png'
import css from '../Asset/img/css.png'
import js from '../Asset/img/JavaScript-logo.png'
import react from '../Asset/img/React-icon.svg.png'
import ts from '../Asset/img/Typescript_logo_2020.svg.png'

interface SkillBadgeProp {
    logoName: string
    name: string
}

const uxArr: SkillBadgeProp[] = [
    {
        logoName: figma,
        name: "Figma"
    },
    {
        logoName: cjm,
        name: "Customer Journey Map"
    },
    {
        logoName: sb,
        name: "Service Blueprint"
    },
    {
        logoName: ut,
        name: "Usability Testing"
    },
]

const devArr: SkillBadgeProp[] = [
    {
        logoName: html,
        name: "HTML"
    },
    {
        logoName: css,
        name: "CSS"
    },
    {
        logoName: js,
        name: "JavaScipt"
    },
    {
        logoName: react,
        name: "React"
    },
    {
        logoName: ts,
        name: "TypeScript"
    },
]

const SkillBadge: React.FC<SkillBadgeProp> = ({ logoName, name }) => {

    return (
        <div
            className={classes.skillBadge}
        >
            <img src={logoName} alt={name} />
            <h3>{name}</h3>
        </div>
    )
}

interface BadgeContainerProp {
    header: string
    badgeArr: SkillBadgeProp[]
}

const BadgeContainer: React.FC<BadgeContainerProp> = ({ header, badgeArr }) => {
    return (
        <>
            <h2>
                {header}
            </h2>
            <div
                className={classes.badgeContainer}
            >
                {
                    badgeArr.map((badge) => (<SkillBadge {...badge} />))
                }
            </div>
        </>
    )
}

const Skill: React.FC = () => {

    return (
        <section
            id="skill-section"
            data-scroll-section
            className={classes.skill}
        >
            <div
                className={classes.skillContainer}
            >
                <h1>what can i do ?</h1>
                <p>
                    As a passionate self-learner, my journey is fueled by an insatiable appetite to master every essential skill, from the intricacies of design
                    to the complexities of development. Driven by the belief that continuous learning is the gateway to innovation, I embrace the challenge
                    of expanding my skill set, not merely as a goal, but as a relentless pursuit of excellence in every facet of the creative and technical spectrum.
                </p>
                <br />
                <p>Following are tools I experienced.</p>
                <br />
                <BadgeContainer header="UX Tools" badgeArr={uxArr} />
                <BadgeContainer header="Dev Tools" badgeArr={devArr} />
                <p>
                    These tools are just the stepping stones in my journey of exploration. As I delve into the realm of possibilities, who's to say what extraordinary capabilities lie ahead in my future endeavors? The canvas of my potential remains boundless, awaiting the strokes of innovation and mastery yet to be unveiled !
                </p>
            </div>

        </section>
    )
}

export default Skill
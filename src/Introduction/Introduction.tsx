import React from "react";
import classes from './Introduction.module.css'

const Introduction: React.FC = () => {

    return (
        <section
            id="intro-section"
            data-scroll-section
            className={classes.intro}
        >
            <h1>About Me</h1>
            <p>
                Greetings! I'm Puriwat, a Frontend Developer with a background in Industrial Engineering. Despite my
                academic roots, I am a self-taught coder driven by a passion for creating and enhancing, be it in the
                realm of websites or personal growth. My primary goal is to leverage my skills to generate value for
                others, and I'm excited about the prospect of bringing that value to you!
            </p>
        </section>
    )
}

export default Introduction
import React from "react";
import classes from './Why.module.css'

const Why: React.FC = () => {

    return (
        <section
            data-scroll-section
            id="why-section"
            className={classes.why}
        >
            <div
                data-scroll
                className={classes.whyContainer}
            >
                <h1>Why we should work together ?</h1>
                <h2>📚    I'm can learn <i>anything</i>.</h2>
                <p>
                    I am not merely willing but eager to embrace the boundless opportunities for growth and enlightenment that learning presents.
                    My insatiable thirst for knowledge propels me forward, ready to absorb, adapt, and excel in the pursuit of mastery.
                </p>
                <br />
                <h2>👽    I'm not afraid of <i>responsibilities</i>.</h2>
                <p>
                    I fearlessly embrace and welcome responsibilities, recognizing them as stepping stones to my personal and professional evolution.
                    With unwavering courage, I stand ready to tackle challenges, demonstrating my resilience and leadership prowess in the face of any task
                    that comes my way.
                </p>
                <br />
                <h2>🧠    I like to <i>think</i>.</h2>
                <p>
                    I am not just a thinker; I am the architect of innovative ideas, the orchestrator of strategic visions. My mind is a powerhouse of creativity
                    and insight, weaving intellectual tapestries that shape the narrative of progress and success. In the realm of thought, I am not a passive
                    observer; I am the influential force propelling transformative ideas into reality.
                </p>
            </div>

        </section>
    )
}

export default Why
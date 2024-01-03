import React from "react";
import classes from './Home4.module.css'
import hero from '../Asset/img/hero.jpg'
import { useLocomotiveScroll } from "react-locomotive-scroll";


const Home4: React.FC = () => {
    const { scroll } = useLocomotiveScroll()
    const handleWorkScroll = () => {
        const target = document.querySelector("#contact-section")
        scroll.scrollTo(target)
    }
    const handleSeeScroll = () => {
        const target = document.querySelector("#intro-section")
        scroll.scrollTo(target)
    }

    return (
        <section
            data-scroll-section
            className={classes.home}
            id="home-section"
        >
            <div
                className={classes.homeContainer}

            >
                <div
                    className={classes.heroText}
                >
                    <h1>
                        Engineer
                    </h1>
                    <h1>
                        UX Designer
                    </h1>
                    <h1>
                        Frontend Developer
                    </h1>
                    <p>
                        Designing, developing. Puriwat is your all-in-one player.
                    </p>
                    <div className={classes.buttonSection}>
                        <button onClick={handleWorkScroll}>Work together</button>
                        <button onClick={handleSeeScroll}>See more</button>
                    </div>
                </div>
                <div
                    className={classes.heroContent}
                >
                    <img
                        src={hero}
                        alt="me"
                    />
                </div>

            </div>
        </section>
    )
}

export default Home4
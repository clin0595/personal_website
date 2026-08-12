import styles from "./Projects.module.css";
import { useEffect } from "react";
import { useLocation } from "react-router";
import ProjectIntro from "../components/ProjectIntro";

import heroBg from '../assets/heroBG.svg';

function Projects() {
    const { hash } = useLocation(); /* Extracts the "#BigRedPath" or "#BeeWitched" from the URL */

    useEffect(() => {
        if (hash) {
            /* Remove the "#" to get the exact matching element ID */
            const elementId = hash.replace("#", "");
            const element = document.getElementById(elementId);

            if (element) {
                /* Teleport/scroll directly to the section */
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [hash]); /* Runs every time you click a dropdown link that updates the #hash */

    return (
        <div>
            
            <section
                className={styles.projectHero} 
                style={{ backgroundImage: `url(${heroBg})` }}>

                <div className={`${styles.projectPgTitleContainer} glass_card`}>
                    <h1 className={styles.projectPgTitle}>Projects</h1>
                </div>
                
         
            </section>


            <div className={styles.projectsContainer}>
                <section id="BeeWitched">
                    <ProjectIntro name="BeeWitched" />
                </section>

                <section id="BigRedPath">
                    <ProjectIntro name="Big Red Path" />
                </section>

                <section id="Sustainabytes">
                    <ProjectIntro name="Sustainabytes" />
                </section>

                <section id="OhMyCamel">
                    <ProjectIntro name="Oh My Camel" />
                </section>
            </div>

        </div>
    )
}

export default Projects
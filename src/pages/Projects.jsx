import styles from "./Projects.module.css";
import BeeWitched from "../components/BeeWitched";
import BigRedPath from "../components/BigRedPath";

import OhMyCamel from "../components/OhMyCamel";
import { useEffect } from "react";
import { useLocation } from "react-router";
import Sustainabytes from "../components/Sustainabytes";

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
            <h1 className={styles.projectPgTitle}>Projects</h1>
            <div className={styles.projectsContainer}>
                <BeeWitched />
                <BigRedPath />
                <Sustainabytes />
                <OhMyCamel />
            </div>

        </div>
    )
}

export default Projects
import styles from "./BeeWitched.module.css";
// import { useOutletContext } from 'react-router';
import ProjectIntro from "./ProjectIntro";

function BeeWitched() {
    // const projects = useOutletContext();
    // const project = projects?.find((p) => p.title === "BeeWitched");
    // const { id, image, title, tools, description, page, titleGradient, toolboxColor } = project;
    
    return(
        <section id="BeeWitched">
            <ProjectIntro name="BeeWitched" />

            <h3 className={styles.beeWitchedCaption}>Check out our Steam Trailer!</h3>

            <h2>Check out our game here:</h2>

            <h2>Role: Project Lead & Programmer</h2>
            <h3>Description here</h3>
            <ul>
                <li>Coding & Figma</li>
                <li>Documentation</li>
                <li>Playtesting & Feedback</li>
                <li>Communication and Teamwork</li>
                <li>Extras Skills: Audio & Video Editing</li>
            </ul>

            
        </section>

    )
}

export default BeeWitched
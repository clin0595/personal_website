import { Link } from "react-router";
import styles from "./ProjectCard.module.css"
import Tools from "./Tools";

function ProjectCard({ image, title, tools, description, page, titleGradient, toolboxColor }) {
    return (
        <div className={`${styles.projectCard} floatOnceHigh`}>
            <Link to={page}>
                <img src={image} className={styles.projectImg}/>
            </Link>
            

            <h2 
                className={`${styles.projectTitle} leftRightGradient`} 
                style={{ '--gradient-colors': titleGradient }}
            >
                {title}
            </h2>

            <Tools 
                tools={tools}
                toolboxColor={toolboxColor}
            />

            <div className={styles.projectDescription}>
                {description}
            </div>

            <Link to={page} className={styles.learnMoreLayout}>
                <div className={`${styles.learnMore} floatOnceMedium`}>
                    Learn More
                </div>
            </Link>

        </div>
    )
}

export default ProjectCard;
import { Link } from "react-router";
import styles from "./ProjectCard.module.css"

function ProjectCard({ image, title, tools, description, page, titleGradient, toolboxColor }) {
    return (
        <div className={styles.projectCard}>
            <img src={image} className={styles.projectImg}/>

            <h2 
                className={`${styles.projectTitle} leftRightGradient`} 
                style={{ '--gradient-colors': titleGradient }}
            >
                {title}
            </h2>

            <div className={styles.toolCards}>
                {tools.map((tool, index) => {
                    return (
                        <div 
                            key={index} 
                            className={styles.toolBox}
                            style={{ '--tool-color': toolboxColor }}
                        >
                            {tool}
                        </div>
                    )
                })}
            </div>

            <div className={styles.projectDescription}>
                {description}
            </div>

            <Link to={page} className={styles.learnMoreLayout}>
                <div className={styles.learnMore}>
                    Learn More
                </div>
            </Link>

        </div>
    )
}

export default ProjectCard;
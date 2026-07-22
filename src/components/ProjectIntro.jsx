import styles from "./ProjectIntro.module.css";
import { useOutletContext } from 'react-router';
import Tools from "./Tools";

function ProjectIntro({ name }) {
    const projects = useOutletContext();
    const project = projects?.find((p) => p.title === name);
    const { title, tools, titleGradient, toolboxColor, media } = project;

    return (
        <div className={styles.projectIntroContainer}>
            <div className={styles.projectVidContainer}>
                <h1 className={`${styles.projectIntroTitle} leftRightGradient`} 
                    style={{ '--gradient-colors': titleGradient }}>
                        {title}
                </h1>

                <Tools 
                    tools={tools}
                    toolboxColor={toolboxColor} 
                    className={styles.toolsBoxes}   
                />
            </div>

            <div>
                {media.type === "video" ? (
                    <video 
                        src={media.src}
                        poster={media.poster}
                        controls
                        preload="metadata"
                        className={styles.projectIntroVidImg}
                    />
                ) : ( // else
                    <img 
                        src={media.src}
                        alt={media.alt || title}
                        className={styles.projectIntroVidImg}
                    />
                )}
            </div>
            
        </div>
    )
    
}

export default ProjectIntro;
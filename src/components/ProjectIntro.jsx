import styles from "./ProjectIntro.module.css";
import { useOutletContext } from 'react-router';
import Tools from "./Tools";
import { Link } from 'react-router';

function ProjectIntro({ name }) {
    const projects = useOutletContext();
    const project = projects?.find((p) => p.title === name);
    const { title, tools, titleGradient, toolboxColor, media, description, role, bullets, takeaway, link} = project;

    return (
        <section id="title">
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

                <div className={styles.videoText}>
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

                    <div className={styles.projectIntroText}>
                        <h2 className={styles.projectIntroTextTitle}style={{ '--titleColor': toolboxColor }}>
                            {description}
                        </h2>

                        <h4 className={styles.projectIntroTextRole}>⟢ Role: {role}</h4>

                        <ul className={styles.projectIntroTextList}>
                            {bullets && bullets.map((bullet, index) => (
                                <li key={index}>⤷ {bullet}</li>
                            ))}
                        </ul>

                        {takeaway && <h3 className={styles.projectIntroTextTakeaway}>{takeaway}</h3>}

                        {link && 
                            <Link to={link.url} target="_blank" rel="noopener noreferrer"> 
                                <h3 className={`${styles.projectIntroTextLink} floatOnceMedium`} >{link.btnTitle}</h3> 
                            </Link>
                        }
                    </div>   
                </div>

            </div>
        </section>
        
    )
    
}

export default ProjectIntro;
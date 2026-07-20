import heroBg from '../assets/heroBG.svg';
import styles from './Home.module.css';
import githubLogo from "../assets/githubLogo.svg";
import ProjectCard from '../components/ProjectCard';
import { useOutletContext } from 'react-router';
import { Link } from 'react-router';


function Home() {

    const projects = useOutletContext();

    return (
        <div>
            <section
                className={styles.hero} 
                style={{ backgroundImage: `url(${heroBg})` }}>

                <div className={styles.glass_card}>

                    <div className={styles.name}>
                        <div className={styles.leftside}>
                            <h1>CINNIE</h1>
                            <h3 className={styles.leftsideUni} >CS @ CORNELL</h3>
                        </div>

                        <div className={styles.rightside}>
                            <Link to='https://github.com/clin0595' target="_blank" rel="noopener noreferrer">
                                <img src={githubLogo} className={`${styles.githubLogo} floatOnce`}/>
                            </Link>
                            <h1 className={styles.rightsideName}>LIN</h1>
                        </div>
                    </div>

                    <div>
                        <h4 className={styles.heroDescription}>I am a 3rd year Computer Science student at Cornell University,
                            with interests in <strong>Web Development</strong>, <strong>Design</strong>, <strong>Game Development</strong>, and more!
                        </h4>
                    </div>

                </div>
            </section>


            <section className={styles.homeBody}>
                <h1>PROJECTS</h1>

                <div className={styles.projectCards}>
                    {projects.map((project) => {
                        
                        const { id, image, title, tools, description, page, titleGradient, toolboxColor } = project;

                        return (
                            <ProjectCard
                                key={id}
                                image={image}
                                title={title}
                                tools={tools} 
                                description={description} 
                                page={page}
                                titleGradient={titleGradient}
                                toolboxColor={toolboxColor}
                                
                            />
                        )

                    })}
                </div>

            </section>

        </div>
    )
}

export default Home
import styles from "./Footer.module.css"
import footerStars from "../assets/footerBg.png"
import githubLogo from "../assets/githubLogo.svg";
import emailSvg from "../assets/email.svg"
import { Link } from "react-router";

function Footer() {
    return (
        <footer className={styles.footerContainer}>

            <div className={styles.footerBg}>
                <img src={footerStars} className={styles.footerStars}/>
            </div>

            <div className={styles.footerContent}>
                <Link to="https://github.com/clin0595" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} className={`${styles.footerGithubLogo} floatOnceMedium`} alt="GitHub Profile" />
                </Link>
                
                <a href="mailto:cinnielin123@gmail.com">
                    <img src={emailSvg} className={`${styles.footerEmail} floatOnceMedium`} alt="Email" />
                </a>

               
            </div>
                


        </footer>
    )
}

export default Footer;
import styles from "./Navbar.module.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router";

function Navbar({ projects = [] }) {
    
    return (
        <div className={styles.navbar}>
            <Link to="/" className='floatInfinite'>
                <img src={logo} className={styles.logo}/>
            </Link>

            <div className={styles.rightsideLinks}>
                <div className={`${styles.projectsDropdownContainer}` }>

                    <Link to="/projects" className="floatOnceMedium"><h2>PROJECTS<span className={styles.arrow}>▾</span></h2></Link>

                    <div className={styles.projectsDropdown}>
                        {projects?.map((project) => {
                        const { id, title, page } = project;
                        return (
                            <Link key={id || title} to={page || "/projects"} className={styles.projectDropdownItem}>
                                {title}
                            </Link>
                        )
                        })}
                    </div>
                    
                </div>
                <Link to="https://github.com/clin0595" target="_blank" rel="noopener noreferrer" className="floatOnceMedium"> <h2>GITHUB</h2> </Link>
                <Link to="https://docs.google.com/document/d/1le9CuFLJigPDOaI2eiCH4Bwa89dVyhXo/edit?usp=sharing&ouid=109841823060625533006&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="floatOnceMedium"> <h2>RESUME</h2> </Link>
            </div>

            
        </div>
    )

}

export default Navbar
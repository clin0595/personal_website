import styles from "./Navbar.module.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router";

function Navbar() {
    return (
        <div className={styles.navbar}>
            <Link to="/" className='floatInfinite'>
                <img src={logo} className={styles.logo}/>
            </Link>

            <div className={styles.rightsideLinks}>
                <Link to="/projects" className="floatOnce"> <h2>PROJECTS</h2> </Link>
                <Link to="https://github.com/clin0595"  target="_blank" rel="noopener noreferrer" className="floatOnce"> <h2>GITHUB</h2> </Link>
                <Link to="/about" className="floatOnce"> <h2>ABOUT ME</h2> </Link>
            </div>

            
        </div>
    )

}

export default Navbar
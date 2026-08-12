
// import { useOutletContext } from 'react-router';
import ProjectIntro from "./ProjectIntro";

function BeeWitched() {
    // const projects = useOutletContext();
    // const project = projects?.find((p) => p.title === "BeeWitched");
    // const { id, image, title, tools, description, page, titleGradient, toolboxColor } = project;
    
    return(
        <section id="BeeWitched">
            <ProjectIntro name="BeeWitched" />
            
        </section>

    )
}

export default BeeWitched
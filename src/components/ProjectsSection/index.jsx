import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import styles from "./style.module.css"
import GitIcon from "../../assets/git-icon.png"

const ProjectSection = () => {
    return (
        <section className={`container ${styles.project}`}>
            <h1 className={`container ${styles.title__project} title1`}>Projetos</h1>
            <div className={`container ${styles.container__projects}`}>
            {projects.map((project) => (
                    <div className={`container ${styles.container_project}`}>
                        <ProjectCard name={project.name} description={project.description}/>
                        
                        <img className={`container ${styles.github_icon}`} src={GitIcon}/>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default ProjectSection
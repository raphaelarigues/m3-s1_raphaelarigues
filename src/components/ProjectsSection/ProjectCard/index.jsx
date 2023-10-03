import styles from "./style.module.css"
// import Banner from "../../assets/banner.png"

const ProjectCard = ({name, description}) => {
    // console.log(typeof Banner)
    return (
        <div className={`container ${styles.container__project}`}>
            <h3 className="title3">{name}</h3>
            <p>{description}</p>
            <button>Saiba mais</button>
        </div>
    )
}

export default ProjectCard;
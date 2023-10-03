import styles from "./style.module.css"

const TechnologyCard = ({image, title}) => {
    return (
        <div className={`container ${styles.div__list}`}>
            <img src={image} alt={`Tecnologia: ${title}`}/>
            <h3 className="title3">{title}</h3>
        </div>
    )
}

export default TechnologyCard;
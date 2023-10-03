import TechnologyCard from "./TechnologyCard";
import { technologies } from "../../data/technologies";
import styles from "./style.module.css"
const Technology = () => {
    return (

        <section className={`container ${styles.technology}`}>
            <h1 className={`container ${styles.title__technology} title1`}>Tecnologias</h1>
            <ul className={`container ${styles.list__technology}`}>
            {technologies.map((technology) => (
               <li>
                   <TechnologyCard image={technology.img} title={technology.name}/>
               </li>
            ))}

            </ul>
        </section>
   )
}

export default Technology;
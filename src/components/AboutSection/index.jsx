import styles from "./style.module.css"
const AboutSection = () => {
    return (
        <section className={`container ${styles.aboutSection}`}>
            <h1 className="title1">Sobre mim</h1>
            <p className={`container ${styles.paragraph__section} paragraph`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex magna, imperdiet sodales sem quis, sollicitudin lobortis purus. Etiam a ipsum finibus, dictum leo non, ultrices dui. Nunc id felis pharetra, vehicula enim in, suscipit nisi. Mauris eget sapien a velit facilisis ullamcorper feugiat nec orci. Duis ac iaculis turpis, at feugiat orci.</p>
        </section>
    )
}

export default AboutSection;
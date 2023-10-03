import { username } from "../../data/user";
import styles from "./style.module.css"
import Banner from "../../assets/banner.png"

const WelcomeSection = () => {
        return (
            <section className={`container ${styles.welcomeSection}`}>
                <div>
                    <p className="label">{username}</p>
                    <h1 className={`container ${styles.h1} title1`}>Bem vindo ao meu portfólio</h1>
                    <p className="paragraph">Uma frase interessante sobre mim</p>
                    <button>Saiba mais</button>
                </div>
                    <img className={styles['img__welcomeSection']}src={Banner} alt="Banner de programação" />
            </section>
        )
}

export default WelcomeSection;
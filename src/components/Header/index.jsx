import styles from "./style.module.css"

const Header = () => {
    return (
        <header className={`container ${styles.header}`}>
            <h1>Portfólio</h1>
            <ul className={`container ${styles.ul}`}>
                {/* <a href="#"> */}
                    <li>
                       <p>Sobre</p>
                    </li>
                {/* </a> */}
                {/* <a href="#"> */}
                    <li>
                      <p>Stack</p> 
                    </li>
                {/* </a> */}
                {/* <a href="#"> */}
                    <li>
                        <p>Projetos</p>
                    </li>
                 {/* </a> */}
            </ul>
            <button className="button-text">Contato</button>
        </header>
    )
}

export default Header;
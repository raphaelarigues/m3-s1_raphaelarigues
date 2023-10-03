import styles from "./style.module.css"
import WhatsappIcon from "../../assets/whatsapp-icon.png"
import  LinkedinIcon from "../../assets/linkedin-icon.png"
import  GithubIcon from "../../assets/github-icon.png"
import { user } from "../../data/user"
export default function Footer() {
  return (
    <section className={styles.footer} id="footer">
      <h1 className={`${styles.footer__text} title1`}>
        Contato
      </h1>
      <p className={styles['footer__text-warn']}>Todos os direitos reservados - {user}</p>
      <div className={styles['container_images']}>
        <img src={WhatsappIcon} alt="Icone do Whatsapp"/>
        <img src={LinkedinIcon} alt="Icone do Linkedin"/>
        <img src={GithubIcon} alt="Icone do Github"/>
      </div>
    </section>
  );
}
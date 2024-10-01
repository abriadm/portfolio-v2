import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/profile-3.jpeg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import { FaInstagram } from "react-icons/fa";
import cv from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile Picture" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="icon theme"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Abriansyah
          <br />
          Adam
        </h1>
        <h2>Web Developer</h2>
        <span>
          <a href="https://www.instagram.com/strzqper" target="_blank">
            {theme === 'light' ? <FaInstagram className={styles.ig} /> : <FaInstagram className={styles.ig2} />}
          </a>
          <a href="https://github.com/abriadm" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a href="https://www.linkedin.com/in/abriansyahadam/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
        </span>
        <p className={styles.description}>
          Exploring new technology stacks to build dynamic and innovative
          websites.
        </p>
        <a href={cv} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;

import React from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile Picture" />
        <img className={styles.colorMode} src={themeIcon} alt="icon theme" />
      </div>
      <div className={styles.info}>
        <h1>Abriansyah<br/>Adam</h1>
        <h2>Web Developer</h2>
        <span>
            <a href="#"></a>
        </span>
      </div>
    </section>
  );
}

export default Hero;

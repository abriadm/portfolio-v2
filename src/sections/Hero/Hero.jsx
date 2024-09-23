import React from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import twitterIcon from "../../assets/twitter-light.svg";
import githubIcon from "../../assets/github-light.svg";
import linkedinIcon from "../../assets/linkedin-light.svg";
import cv from "../../assets/cv.pdf";

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile Picture" />
        <img className={styles.colorMode} src={themeIcon} alt="icon theme" />
      </div>
      <div className={styles.info}>
        <h1>
          Abriansyah
          <br />
          Adam
        </h1>
        <h2>Web Developer</h2>
        <span>
          <a href="#" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="#" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a href="#" target="_blank">
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

import React from "react";
import styles from "./About.module.css";
import ulm from "../../assets/about/ULM.png";
import html from "../../assets/about/html.png";
import css from "../../assets/about/css.png";
import javascript from "../../assets/about/javascript.png";
import java from "../../assets/about/java.png";
import react from "../../assets/about/react.png";
import python from "../../assets/about/python.png";
import wordpress from "../../assets/about/wordpress.jpeg";
import django from "../../assets/about/django.png";
import jva from "../../assets/about/java.png";
import csr from "../../assets/about/csrp.jpeg";
import ang from "../../assets/about/angualar.png";
import spri from "../../assets/about/spring.png";
import ql from "../../assets/about/mysql.png";
import mon from "../../assets/about/mongodb.png";
import altr from "../../assets/about/alteryx.png";
import git from "../../assets/about/git.png";
import aws from "../../assets/about/aws.png";
import figma from "../../assets/about/figma.png";
import bi from "../../assets/about/bii.jpg";
import strap from "../../assets/about/bootstrap.png";

export const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.skill}>
        {/* Education Section */}
        <div>
          <h1>Education</h1>
          <div className={styles.educationSection}>
            <img src={ulm} alt="ULM Logo" className={styles.ulmLogo} />
            <div className={styles.educationInfo}>
              <h2>University of Louisiana Monroe (ULM)</h2>
              <h3>Bachelor of Science in Computer Science (Jan 2021 - May 2025)</h3>
              <p>
                Related Coursework: Data Structures, Algorithms, Object-Oriented Design,
                Database Design, Operating Systems, Networking, Internet Programming,
                Principles of Software Engineering, Cloud Computing.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <h1>My Skills</h1>
        <div className={styles.toolsRow}>
          <div className={styles.tool}>
            <img src={html} alt="HTML Logo" />
            <p>HTML</p>
          </div>
          <div className={styles.tool}>
            <img src={css} alt="CSS Logo" />
            <p>CSS</p>
          </div>
          <div className={styles.tool}>
            <img src= {javascript} alt="JavaScript Logo" />
            <p>JavaScript</p>
          </div>
          <div className={styles.tool}>
            <img src= {java} alt="Java Logo" />
            <p>Java</p>
          </div>
          <div className={styles.tool}>
            <img src={react} alt="React Logo" />
            <p>React</p>
          </div>
          <div className={styles.tool}>
            <img src= {python} alt="Python Logo" />
            <p>Python</p>
          </div>
          <div className={styles.tool}>
            <img src= {wordpress} alt="WordPress Logo" />
            <p>WordPress</p>
          </div>
          <div className={styles.tool}>
            <img src={ang} alt="Node.js Logo" />
            <p>Angular</p>
          </div>
          <div className={styles.tool}>
            <img src={django} alt="Django Logo" />
            <p>Django</p>
          </div>
          <div className={styles.tool}>
            <img src={jva} alt="Node.js Logo" />
            <p>Java</p>
          </div>
          <div className={styles.tool}>
            <img src={csr} alt="Django Logo" />
            <p>C#</p>
          </div>
          <div className={styles.tool}>
            <img src={spri} alt="Django Logo" />
            <p>Spring Boot</p>
          </div>
          <div className={styles.tool}>
            <img src={ql} alt="Django Logo" />
            <p>MySQL</p>
          </div>
          <div className={styles.tool}>
            <img src={ mon} alt="Django Logo" />
            <p>MongoDB</p>
          </div>
          <div className={styles.tool}>
            <img src={altr} alt="Django Logo" />
            <p>Alteryx</p>
          </div>
          <div className={styles.tool}>
            <img src={git} alt="Django Logo" />
            <p>Git</p>
          </div>
          <div className={styles.tool}>
            <img src={aws} alt="Django Logo" />
            <p>AWS</p>
          </div>
          <div className={styles.tool}>
            <img src={figma} alt="Django Logo" />
            <p>Figma</p>
          </div>
          <div className={styles.tool}>
            <img src={bi} alt="Django Logo" />
            <p>Power BI</p>
          </div>
          <div className={styles.tool}>
            <img src={strap} alt="Django Logo" />
            <p>Bootstrap</p>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from "react";
import styles from "./Don.module.css";
import donImage from "../../assets/don/don.jpeg";
import donImage2 from "../../assets/don/don1.png"; 
import resume from "../../assets/don/Ruman's_resume.pdf";

export const Don = () => {
  const [activeImage, setActiveImage] = useState(0);
  const images = [donImage, donImage2];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 10000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <section className={styles.container} id="about">
      
      <div className={styles.content}>
       
        <h1 className={styles.title}>Hello, I'm Ruman</h1>
        <p className={styles.description}>
          Computer Science graduate seeking an entry-level position in web
          development or software development.
        </p>
        <a
          href={resume}
          className={styles.resumeBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          My Resume
        </a>
        <a href="mailto:ghimirerum@gmail.com" className={styles.contactBtn}>
          Get in touch
        </a>
      </div>
  
      <div className={styles.imageFlipper}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Ruman ${index + 1}`}
            className={`${styles.donImg} ${activeImage === index ? styles.active : ""}`}
          />
        ))}
      </div>
  
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
  
};

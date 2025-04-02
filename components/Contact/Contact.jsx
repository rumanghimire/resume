import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faGoogle  } from "@fortawesome/free-brands-svg-icons";




export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
        <FontAwesomeIcon icon={faGoogle} />
          <a href="mailto:ghimirerum@gmail.com">ghimirerum@gmail.com</a>
        </li>
        <li className={styles.link}>
        <FontAwesomeIcon icon={faLinkedin} />
          <a href="https://www.linkedin.com/in/ruman-ghimire-123372220/">linkedin.com/in/ruman-ghimire</a>
        </li>
        <li className={styles.link}>
        <FontAwesomeIcon icon={faGithub} />
          <a href="https://github.com/rumanghimire">github.com/rumanghimire</a>
        </li>
      </ul>
    </footer>
  );
};
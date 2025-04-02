import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Projects.module.css';

import image from '../../assets/project/image.jpeg';
import image1 from '../../assets/project/image1.jpeg';
import image2 from '../../assets/project/image2.jpeg';
import image3 from '../../assets/project/image3.jpeg';
import image4 from '../../assets/project/image4.jpg';
import image5 from '../../assets/project/image5.jpeg';

export const Projects = () => {
  const images = [image, image1, image2, image3];
  const imageSetTwo = [image4, image5]; // renamed to avoid confusion

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className={styles.container} id="projects">
      <h1 className={styles.title}>Browse My Recent Works</h1>

      <div className={styles.projectItem}>
        <ul className={styles.projectList}>
        <li className={styles.projectItems1}>
            <div className={styles.sliderContainer}>
              <h2 className={styles.projectheading}>ULM PMAC Project</h2>
              <div className={styles.info}>
                <p className={styles.projectDescription}>
                  * As part of a Software Development class project, I, along with a team of five students,
developed a comprehensive web application for the ULM Pre-Medical Advisory Committee. The application
streamlined medical school applications and facilitated communication, scheduling, and document
management between candidates and the committee.
                </p>
                <p className={styles.more}>
                  * Tools Used: HTML, CSS, TypeScript, MySQL, C#, Figma
                </p>
              </div>
            </div>
          </li>
          <li className={styles.projectItems1}>
            <div className={styles.sliderContainer}>
              <h2 className={styles.projectheading}>ULM Baseball Project</h2>
              <div className={styles.info}>
                <p className={styles.projectDescription}>
                  * Engaged in developing a system to extract data from a file server, populate the
                database with file information, and visually present insights through graph representations.
                </p>
                <p className={styles.more}>
                  * Tools: Python, Microsoft Power BI.
                </p>
              </div>
            </div>
          </li>
          <li className={styles.projectItems1}>
            <div className={styles.sliderContainer}>
              <h2 className={styles.projectheading}>Arise, Grill & Eat BBQ Project</h2>
              <div className={styles.info}>
                <p className={styles.projectDescription}>
                  * Our LED Tech Grant team developed a website for a local business,
                based on the client’s plan.
                </p>
                <p className={styles.more}>
                  * Tools Used: HTML, CSS, JavaScript, Figma
                </p>
                <div className={styles.a}>
                  <a href="https://arisegrilleatbbq.com/" className={styles.link} target="_blank" rel="noopener noreferrer">
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          </li>
          {/* Project 1 */}
          <li className={styles.projectItems1}>
            <div className={styles.sliderContainer}>
              <h2 className={styles.projectheading}>Liz's Angels Project</h2>
              <div className={styles.slider}>
                <Slider {...settings}>
                  {images.map((imageUrl, index) => (
                    <div key={index}>
                      <img
                        src={imageUrl}
                        alt={`Liz's Angels Slide ${index}`}
                        className={styles.lizPhoto}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className={styles.info}>
                <p className={styles.projectDescription}>
                  * Made a website using WordPress for the non-profit organization, based on the client's requirements and design details.
                </p>
                <p className={styles.more}>
                  * Implemented responsive design principles for optimal viewing across various devices and screen sizes.
                </p>
                <div className={styles.a}>
                  <a href="https://lizangels.com" className={styles.link} target="_blank" rel="noopener noreferrer">
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          </li>

          

          {/* Project 2 */}
          <li className={styles.projectItems1}>
            <div className={styles.sliderContainer}>
              <h2 className={styles.projectheading}>To-Do List</h2>
              <div className={styles.slider}>
                <Slider {...settings}>
                  {imageSetTwo.map((imageUrl, index) => (
                    <div key={index}>
                      <img
                        src={imageUrl}
                        alt={`To-Do Slide ${index}`}
                        className={styles.Photo}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className={styles.info}>
                <p className={styles.projectDescription}>
                  * Keep track of tasks. Users can mark tasks as done, and the system can either display a "done" sign or allow users to delete tasks based on their preferences.
                </p>
                <p className={styles.more}>
                  * Tools: HTML, CSS, JavaScript, React.
                </p>
                <div className={styles.a}>
                  <a href="https://github.com/rumanghimire/ToDoList.git" className={styles.link} target="_blank" rel="noopener noreferrer">
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          </li>

          
          
        </ul>
      </div>
       <div className={styles.marquee}>
                <span> Open to Work — Hire Me! </span>
              </div>
    </section>
  );
};

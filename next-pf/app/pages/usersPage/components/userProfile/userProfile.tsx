'use client'

import Image from 'next/image';
import styles from './userProfile.module.scss';
import img from '@/public/image/myImage1.webp'

const UserProfile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.name}>shmagi narsavidze</h1>
        <nav>
          <ul className={styles.navigation}>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div className={styles.content}>
        <div className={styles.intro}>
          <h2 className={styles.jobTitle}>FRONT-END DEVELOPER</h2>
          <h1 className={styles.name}>shmagi narsavidze</h1>
          <p className={styles.description}>
            Hi, I'm shmagi narsavidze, a passionate front-end developer specializing in
            translating design concepts into seamless and interactive web experiences
            using HTML, CSS, and JavaScript.
          </p>
          <div className={styles.buttons}>
            <button className={styles.resumeButton}>Download CV</button>
            <button className={styles.projectsButton}>View Projects</button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageCircle} />
          <Image
            src={img}
            alt="Kate Miller"
            className={styles.image}
           
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
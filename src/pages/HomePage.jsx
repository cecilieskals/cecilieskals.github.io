import { Link } from "react-router";
import projects from "../data/projects";
import styles from "./HomePage.module.css";

const profileImage = `${import.meta.env.BASE_URL}photos/mig.svg`;

function HomePage() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className={styles.homePage}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h3 className={styles.heroText}>
            Jeg er Cecilie Thykjær Skals og jeg arbejder med
          </h3>
          <h1>design af digitale produkter</h1>
        </div>
        <div className={styles.imageContainer}>
          <img src={profileImage} alt="Profilbillede" />
        </div>
        {/* <button className="hero-arrow" onClick={scrollToProjects} aria-label="Gå til projekter">
          ↓
        </button> */}
      </section>
      <section className={styles.projectsSection} id="section">
        {/* <h2>Projekter</h2> */}
        <div className={styles.projectGrid}>
          {featuredProjects.map((project) => (
            <article className={styles.projectCard} key={project.slug}>
              <img src={project.image} alt={`Preview af ${project.title}`} />
              <div className={styles.projectCardContent}>
                <p className={styles.eyebrow}>{project.year}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <Link to={`/projects/${project.slug}`}>Læs mere</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;

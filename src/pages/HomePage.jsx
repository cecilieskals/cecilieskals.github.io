import { Link } from "react-router";
import ToolsSection from "../components/ToolsSection";
import projects from "../data/projects";
import styles from "./HomePage.module.css";

const profileImage = `${import.meta.env.BASE_URL}photos/header.svg`;

function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className={styles.homePage}>
      <section className={styles.heroSection}>
        <div className={styles.imageContainer}>
          <img src={profileImage} alt="Profilbillede" />
        </div>
      </section>

      <section className={styles.projectsSection} id="section">
        <div className={styles.sectionHeader}>
          <div className={styles.divider} />
          <div className={styles.sectionTitleRow}>
            <h2 className={styles.sectionHeading}>Mine projekter</h2>
          </div>
          <div className={styles.divider} />
        </div>

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
          <Link to="/projects" className={styles.viewAllButton}>
            Se alle projekter
          </Link>
        </div>

        <div className={styles.sectionHeader}>
          <div className={styles.divider} />
          <div className={styles.sectionTitleRow}>
            <h2 className={styles.sectionHeading}>Værktøjer</h2>
          </div>
          <div className={styles.divider} />
          <ToolsSection />
        </div>
      </section>
    </div>
  );
}

export default HomePage;

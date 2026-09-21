import { Link } from "react-router";
import projects from "../data/projects";
import styles from "./ProjectsPage.module.css";

function ProjectsPage() {
  return (
    <div className={styles.projectsPage}>
      <section className={styles.heroSection}>
        <h1>Mine projekter</h1>
      </section>

      <section className={styles.projectGrid} aria-label="Projektliste">
        {projects.map((project) => (
          <article className={styles.projectCard} key={project.slug}>
            <img src={project.image} alt={`Preview af ${project.title}`} />
            <div className={styles.projectCardContent}>
              <p className={styles.eyebrow}>{project.year}</p>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              {/* <ul className="tag-list">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul> */}
              <Link to={`/projects/${project.slug}`}>Se projekt</Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default ProjectsPage;

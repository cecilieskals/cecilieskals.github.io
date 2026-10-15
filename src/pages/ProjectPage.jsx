import { Link, useParams } from "react-router";
import projects from "../data/projects";
import styles from "./ProjectPage.module.css";

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className={styles.page}>
        <p className={styles.eyebrow}>404</p>
        <h1>Projektet blev ikke fundet</h1>
        <p className={styles.lead}>Det projekt findes ikke i listen endnu.</p>
        <Link className={styles.primaryButton} to="/projects">
          Tilbage til projekter
        </Link>
      </div>
    );
  }

  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <section className={styles.heroInfo}>
          <div className={styles.heroText}>
            <h1>{project.title}</h1>
            <p className={styles.kicker}>{project.tags.join(" • ")}</p>
            <p className={styles.description}>{project.description}</p>
          </div>

          <section className={styles.infoSection}>
            <div className={styles.infoRow}>
              <div className={styles.infoBlock}>
                <p className={styles.label}>Fokus</p>
                <p className={styles.value}>{project.focus}</p>
              </div>
            </div>
            <div className={styles.infoRow}>
              <div className={styles.infoBlock}>
                <p className={styles.label}>Metoder</p>
                <p className={styles.value}>{project.methods}</p>
              </div>
            </div>
          </section>

          <div className={styles.ctaRow}>
            {project.links?.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={styles.primaryButton}
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>

        <div className={styles.mockupWrap}>
          <img src={project.image} alt={project.title} />
        </div>
      </header>

      <section className={styles.section}>
        {project.process?.map((step, index) => (
          <div key={`${step.title}-${index}`} className={styles.processItem}>
            <div className={styles.processText}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {step.image ? (
                <div className={styles.processImage}>
                  <img src={step.image} alt={step.title} />
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </section>

      <section className={styles.section}>
        {project.reflections?.map((reflection, index) => (
          <div key={reflection.title} className={styles.reflectionRow}>
            <h3>{reflection.title}</h3>
            <p>{reflection.description}</p>
          </div>
        ))}
      </section>
    </article>
  );
}

export default ProjectPage;

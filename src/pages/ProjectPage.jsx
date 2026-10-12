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
        <div className={styles.heroText}>
          <h1>{project.title}</h1>
          <p className={styles.kicker}>{project.tags.join(" • ")}</p>
          <p className={styles.description}>{project.description}</p>

          <section className={styles.infoRow}>
            <div className={styles.infoBlock}>
              <p className={styles.label}>Fokus</p>
              <p className={styles.value}>{project.focus}</p>
            </div>

            <div className={styles.infoBlock}>
              <p className={styles.label}>Metoder</p>
              <p className={styles.value}>{project.methods}</p>
            </div>
          </section>
        </div>

        <div className={styles.mockupWrap}>
          <img src={project.image} alt={project.title} />
        </div>

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
      </header>

      <section className={styles.section}>
        <h3>Arbejdsprocessen</h3>

        {project.process?.map((step, index) => (
          <div
            key={step.title}
            className={
              index % 2 === 0 ? styles.processRow : styles.processRowReverse
            }
          >
            <div className={styles.processImageWrap}>
              <img src={step.image} alt="" className={styles.processImage} />
            </div>

            <div className={styles.processText}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <h3>Refleksion</h3>
        <p>
          Projektet blev udviklet med fokus på at skabe en tydelig og
          engagerende brugeroplevelse, hvor funktionalitet, visuel klarhed og
          brugbarhed gik hånd i hånd. Det gav mulighed for at teste idéer,
          iterere på designet og forfine løsningen gennem feedback og
          evaluering.
        </p>
      </section>
    </article>
  );
}

export default ProjectPage;

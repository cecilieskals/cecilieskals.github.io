import { Link, useParams } from "react-router";
import projects from "../data/projects";
import { useState } from "react";
import styles from "./ProjectPage.module.css";

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  const [currentImage, setCurrentImageIndex] = useState(0);

  if (!project) {
    return (
      <div className={`${styles.page} ${styles.narrow}`}>
        <p className={styles.eyebrow}>404</p>
        <h1>Projektet blev ikke fundet</h1>
        <p className={styles.lead}>Det projekt findes ikke i listen endnu.</p>
        <Link className={styles.button} to="/projects">
          Tilbage til projekter
        </Link>
      </div>
    );
  }

  return (
    <article className={styles.projectPage}>
      {/* <section className="hero-section">
        <h1>{project.title}</h1>
      </section> */}

      <section className={styles.heroSection}>
        <Link className={styles.backLink} to="/projects">
          Tilbage til projekter
        </Link>
        {/* <img className="detail-image" src={project.detailImage} alt="" /> */}
        <h1>{project.title}</h1>
        {/* <p className="lead">{project.description}</p> */}
      </section>

      <section className={styles.finishedProductSection}>
        <h2>Det færdige produkt</h2>
        <p className={styles.lead}>{project.description}</p>
        <div className={styles.actions}>
          {project.links.map((link) => (
            <a
              className={`${styles.button} ${styles.secondaryButton}`}
              href={link.href}
              key={link.href}
              rel="noreferrer"
              target="_blank"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className={styles.imageSliderProduct}>
          <button
            className={styles.sliderButton}
            aria-label="Forrige billede"
            onClick={() => {
              setCurrentImageIndex(
                (currentImage - 1 + project.images.length) %
                  project.images.length,
              );
            }}
          >
            <img src="/photos/left-arrow.svg" alt="Venstre pil" />
          </button>

          <img
            src={project.images[currentImage]}
            alt=""
            className={styles.sliderImage}
          />

          <button
            className={styles.sliderButton}
            aria-label="Næste billede"
            onClick={() => {
              setCurrentImageIndex((currentImage + 1) % project.images.length);
            }}
          >
            <img src="/photos/right-arrow.svg" alt="Højre pil" />
          </button>
        </div>
        <div className={styles.someImagesContainer}>
          {project.someImages?.map((img, index) => (
            <img key={index} src={img} alt="" className={styles.someImage} />
          ))}
        </div>
      </section>

      <section className={styles.processSection}>
        <h2>Processen bag</h2>
        {/* <p className="text">Projektet er udarbejdet efter Double Diamond modellen.</p>
        <div className="double-diamond-container">
          {project.doubleDiamond?.map((step, index) => (
            <div key={index} className="process-card">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div> */}
        <div className={styles.processContainer}>
          {project.process?.map((step) => (
            <article className={styles.processCard} key={step.title}>
              <img src={step.image} alt="" className={styles.processImage} />

              <div className={styles.processText}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* <div className="image-slider-process">
          <button
            className="button-left"
            aria-label="Forrige billede"
            onClick={() => {
              setCurrentProcessImageIndex(
                (currentProcessImage - 1 + project.processImages?.length) %
                  project.processImages?.length,
              );
            }}
          >
            <img src="/photos/left-arrow.svg" alt="Venstre pil" />
          </button>

          <img
            src={project.processImages?.[currentProcessImage]}
            alt=""
            className="slider-image"
          />

          <button
            className="button-right"
            aria-label="Næste billede"
            onClick={() => {
              setCurrentProcessImageIndex(
                (currentProcessImage + 1) % project.processImages?.length,
              );
            }}
          >
            <img src="/photos/right-arrow.svg" alt="Højre pil" />
          </button>
        </div> */}

      {/* <div className="process-images-container">
          {project.processImages?.map((img, index) => (
            <img key={index} src={img} alt="" className="process-images" />
          ))}
        </div> */}

      {/* <ul className="tag-list">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul> */}
    </article>
  );
}

export default ProjectPage;

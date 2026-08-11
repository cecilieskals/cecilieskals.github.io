import { Link, useParams } from "react-router";
import projects from "../data/projects";
import "./ProjectPage.css";
import { useState } from "react";

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  const [currentImage, setCurrentImageIndex] = useState(0);

  if (!project) {
    return (
      <div className="page narrow">
        <p className="eyebrow">404</p>
        <h1>Projektet blev ikke fundet</h1>
        <p>Det projekt findes ikke i listen endnu.</p>
        <Link className="button" to="/projects">
          Tilbage til projekter
        </Link>
      </div>
    );
  }

  return (
    <article className="detail-page">
      {/* <section className="hero-section">
        <h1>{project.title}</h1>
      </section> */}

      <section className="hero-section">
        <Link className="back-link" to="/projects">
          Tilbage til projekter
        </Link>
        {/* <img className="detail-image" src={project.detailImage} alt="" /> */}
        <h1>{project.title}</h1>
        <p className="lead">{project.description}</p>
      </section>

      <h2>Det færdige produkt</h2>
      <div className="image-slider">
        <button
          className="button-left"
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
          className="slider-image"
        />

        <button
          className="button-right"
          aria-label="Næste billede"
          onClick={() => {
            setCurrentImageIndex((currentImage + 1) % project.images.length);
          }}
        >
          <img src="/photos/right-arrow.svg" alt="Højre pil" />
        </button>
      </div>

      <h2>Processen bag</h2>

      <ul className="tag-list">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <div className="actions">
        {project.links.map((link) => (
          <a
            className="button secondary"
            href={link.href}
            key={link.href}
            rel="noreferrer"
            target="_blank"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}

export default ProjectPage;

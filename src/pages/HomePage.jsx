import { Link } from "react-router";
import projects from "../data/projects";
import "./HomePage.css";

const profileImage = `${import.meta.env.BASE_URL}photos/mig.svg`;

function HomePage() {
  const featuredProjects = projects.slice(0, 2);
  const scrollToProjects = () => {
    document
      .getElementById("section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Hej, jeg hedder Cecilie.</h1>
          <p className="hero-text">
            Jeg arbejder med frontend, design og digitale produkter. Her samler
            jeg projekter, proces og det, jeg lærer undervejs.
          </p>
        </div>
        <div className="image-container">
          <img src={profileImage} alt="Profilbillede" />
        </div>
        {/* <button className="hero-arrow" onClick={scrollToProjects} aria-label="Gå til projekter">
          ↓
        </button> */}
      </section>
      <section className="section" id="section">
        {/* <h2>Projekter</h2> */}
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.slug}>
              <img src={project.image} alt={`Preview af ${project.title}`} />
              <div className="project-card-content">
                <p className="eyebrow">{project.year}</p>
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

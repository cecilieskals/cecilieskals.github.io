import { Link, useParams } from "react-router";
import about from "../data/about";
import "./AboutPage.css";

function AboutPage() {
  const { id } = useParams();

  return (
    <div className="about-page">
      <section className="hero-section">
        <h1>Hvem er jeg?</h1>
      </section>

      <section className="about-section">
        <div className="about-info">
          <h2>Hvad jeg elsker at lave</h2>
          <p>UX/UI Design, Mockups, Prototyper, Frontend design.</p>
          <h2>Værktøjer jeg arbejder med</h2>
          <p>
            React, HTML, CSS, JavaScript, GitHub, Figma, Adobe Illustrator,
            Adobe Photoshop.
          </p>
        </div>

        <div className="image-collage">
          {about.aboutImages.map((img, index) => (
            <img key={index} src={img} alt="" className="about-image" />
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutPage;

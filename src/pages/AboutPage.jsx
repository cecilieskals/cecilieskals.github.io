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
          <p>
            Jeg er Cecilie, en UX-UI designer under uddannelse. Jeg elsker at
            teste grænser af, prøve krudt med nye ting og løse problemer. Jeg
            trives med struktur og detaljer men samtidig lege og eksperimentere
            med løsnigner. Jeg har en passion for at skabe intuitive og æstetisk
            tiltalende brugeroplevelser, der gør en forskel i folks digitale
            liv. Jeg har fra tidligere erfaring med at arbejde i teams og med
            kunder, hvilket har styrket mine kommunikationsevner og evnen til at
            forstå forskellige perspektiver. Jeg er altid på udkig efter nye
            udfordringer og muligheder for at udvikle mine færdigheder inden for
            digitalt design, branding og visuelle identiteter.
          </p>
          <section className="info-list">
            <div className="info-card">
              <h2>Hvad jeg elsker at lave</h2>
              <p>UX/UI Design, Mockups, Prototyper, Frontend design.</p>
            </div>
            <div className="info-card">
              <h2>Værktøjer jeg arbejder med</h2>
              <p>
                React, HTML, CSS, JavaScript, GitHub, Figma, Adobe Illustrator,
                Adobe Photoshop.
              </p>
            </div>
          </section>
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

import { Link } from "react-router";
import about from "../data/about";
import styles from "./AboutPage.module.css";

function AboutPage() {
  return (
    <section className={styles.aboutPage}>
      <div className={styles.aboutHeader}>
        <h1>Hvem er jeg?</h1>
      </div>

      <section className={styles.aboutContent}>
        <div className={styles.aboutText}>
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
          <section className={styles.infoList}>
            <div className={styles.infoCard}>
              <h3>Hvad jeg elsker at lave</h3>
              <p>UX/UI Design, Mockups, Prototyper, Frontend design.</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Værktøjer jeg arbejder med</h3>
              <p>
                React, HTML, CSS, JavaScript, GitHub, Figma, Adobe Illustrator,
                Adobe Photoshop.
              </p>
            </div>
          </section>
        </div>

        <div className={styles.imageCollage}>
          {about.aboutImages.map((img, index) => (
            <img key={index} src={img} alt="" className={styles.aboutImage} />
          ))}
        </div>
      </section>
    </section>
  );
}

export default AboutPage;

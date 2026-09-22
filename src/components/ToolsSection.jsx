import styles from "./ToolsSection.module.css";

const portraitImage = `${import.meta.env.BASE_URL}photos/toolsPhoto.svg`;

const tools = [
  { label: "Github", top: "8%", left: "33%" },
  { label: "Adobe Illustrator", top: "12%", left: "76%" },
  { label: "CSS", top: "33%", left: "92%" },
  { label: "React", top: "51%", left: "75%" },
  { label: "JavaScript", top: "82%", left: "84%" },
  { label: "Prototyping", top: "24%", left: "11%" },
  { label: "Adobe Photoshop", top: "49%", left: "24%" },
  { label: "Figma", top: "79%", left: "10%" },
  { label: "HTML", top: "88%", left: "34%" },
];

function ToolsSection() {
  return (
    <section className={styles.toolsSection} aria-labelledby="tools-heading">
      <div className={styles.canvas}>
        <img
          className={styles.portrait}
          src={portraitImage}
          alt="Cecilie stående"
        />

        {tools.map((tool) => (
          <span
            className={styles.toolsTag}
            key={tool.label}
            style={{ top: tool.top, left: tool.left }}
          >
            {tool.label}
          </span>
        ))}
      </div>
    </section>
  );
}

export default ToolsSection;

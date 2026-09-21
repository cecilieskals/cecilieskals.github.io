import styles from "./Footer.module.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="kontakt">
      <div className={styles.inner}>
        <div className={styles.titleWrap}>
          <h2 className={styles.heading}>
            KONTAKT
            <br />
            MIG
          </h2>
        </div>

        <div className={styles.details}>
          <div className={styles.item}>
            <p className={styles.label}>Mail</p>
            <a className={styles.value} href="mailto:cskals@hotmail.dk">
              cskals@hotmail.dk
            </a>
          </div>

          <div className={styles.item}>
            <p className={styles.label}>Telefon</p>
            <a className={styles.value} href="tel:+4551877001">
              +45 51 87 70 01
            </a>
          </div>

          <div className={styles.item}>
            <p className={styles.label}>LinkedIn</p>
            <a
              className={styles.value}
              href="https://www.linkedin.com/in/cecilie-skals-bb2891427/"
              target="_blank"
              rel="noreferrer"
            >
              Cecilie Skals
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© {year} Cecilie Thykjær Skals</p>
      </div>
    </footer>
  );
}

export default Footer;

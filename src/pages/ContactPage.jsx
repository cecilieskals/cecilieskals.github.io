import styles from "./ContactPage.module.css";

function ContactPage() {
  return (
    <>
      <section className={styles.contactCard}>
        <div className={styles.contactCardContainer}>
          <p className={styles.contactHeading}>KONTAKT</p>
          <div className={styles.contactCardInfo}>
            <div className={styles.contactCardImage}>
              <img
                src={`${import.meta.env.BASE_URL}photos/contact-photo.svg`}
                alt="Profilbillede"
              />
            </div>
            <div className={styles.contactDetails}>
              <a href="mailto:cskals@hotmail.dk">cskals@hotmail.dk</a>
              <a href="tel:+4551877001">+45 51 87 70 01</a>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.bottomSection}></section>
    </>
  );
}

export default ContactPage;

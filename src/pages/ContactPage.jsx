function ContactPage() {
  return (
    <div className="page narrow">
      <section className="content-card">
        <p className="eyebrow">Kontakt</p>
        <div className="contact-details">
          <a href="mailto:cskals@hotmail.dk">cskals@hotmail.dk</a>
          <a href="tel:+4551877001">+45 51 87 70 01</a>
          <a href="https://www.linkedin.com" rel="noreferrer" target="_blank">LinkedIn</a>
        </div>
        <div className="contact-card-image">
          <img src={`${import.meta.env.BASE_URL}public/portfolio-placeholder.svg`} alt="Profilbillede" />
        </div>
      </section>
    </div>
  );
}

export default ContactPage;

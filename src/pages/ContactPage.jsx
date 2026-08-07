import "./ContactPage.css";

function ContactPage() {
  return (
    <>
    <section className="contact-card">
      <div className="contact-card-container">
        <p className="contact-heading">KONTAKT</p>
        <div className="contact-card-info">
          <div className="contact-card-image">
            <img
              src={`${import.meta.env.BASE_URL}photos/contact-photo.svg`}
              alt="Profilbillede"
            />
          </div>
          <div className="contact-details">
            <a href="mailto:cskals@hotmail.dk">cskals@hotmail.dk</a>
            <a href="tel:+4551877001">+45 51 87 70 01</a>
            <a href="https://www.linkedin.com" rel="noreferrer" target="_blank">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="bottom-section"></section>
    </>
  );
}

export default ContactPage;

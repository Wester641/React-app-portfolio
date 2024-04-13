import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const Contacts = () => {
  return (
    <>
      <Navbar />
      <main className="section">
        <div className="container">
          <h1 className="title-1">Contacts</h1>
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Location</h2>
              <p>Hamburg, Germany</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Telegram / WhatsApp</h2>
              <p>
                <a href="tel:+79051234567">+996 (500) 37-00-02</a>
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Email</h2>
              <p>
                <a href="mailto:shakirowww@inbox.ru">shakirowww@inbox.ru </a>
              </p>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contacts;

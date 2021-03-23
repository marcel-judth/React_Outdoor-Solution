import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import { Colors } from '../styles/Colors';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <ContactSect id="contact">
      <div className="contact-text">
        <h2>Kontakt</h2>

        <p className="contactInfoText">
          Wir sind für Sie da und freuen uns auf Ihren Anruf!
        </p>
        <div className="contact-info">
          <div className="info">
            <i className="fas fa-phone-alt"></i>
            <a href="tel:+436607398100">+43 660 739 81 00</a>
          </div>
          <div className="info">
            <i className="fas fa-envelope"></i>
            <a href="mailto:office@outdoorsolution.at">
              office@outdoorsolution.at
            </a>
          </div>
          <div className="info">
            <i className="fas fa-map-marker-alt"></i>
            <a href="https://goo.gl/maps/ftXdCLQSvUAHjcXeA" target="_blank">
              Villach, AT
            </a>
          </div>
        </div>
      </div>

      <ContactForm />

      {/* <FooterSocialMediaIcons>
        <a href="https://www.google.com">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.google.com">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.google.com">
          <i className="fab fa-youtube"></i>
        </a>

        <a href="http://www.lgbau.com/index.html">
          <img src={lgbaulogo} alt="LG Bau logo" />
        </a>
      </FooterSocialMediaIcons> */}

      <FooterPrivacy>
        <Link to="/Terms">Impressum</Link> <p>&copy; Outdoor Solution 2021</p>
      </FooterPrivacy>

      <Footer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1369.648830556576!2d13.87505710061962!3d46.64063589313596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47708055371c03cd%3A0x17cd60b5ba54aade!2sMillst%C3%A4tter%20Str.%2052%2C%209523%20Villach!5e0!3m2!1sen!2sat!4v1613837143439!5m2!1sen!2sat"
          loading="lazy"
        ></iframe>
        <div className="footer-text">
          <h4>Outdoor Solution</h4>
          <p>Daniel Wedam</p>
          <p>Millstätter Straße 52</p>
          <p>9523 Villach, AT</p>
          <br />
          <p>Mo-Fr 09:00-17:00</p>
          <div className="footer-contact">
            <label>Büro:</label>
            <a href="tel:+436607398100">+43 660 739 81 00</a>
          </div>
          <div className="footer-contact">
            <label>Mobil:</label>
            <a href="tel:+436607398446">+43 660 739 84 46</a>
          </div>

          <a href="mailto:office@outdoorsolution.at">
            office@outdoorsolution.at
          </a>
        </div>
      </Footer>
    </ContactSect>
  );
};

const ContactSect = styled.div`
  position: relative;
  height: auto;
  min-height: 100vh;
  padding-top: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .contactInfoText {
    margin: 1rem 0rem;
  }

  .contact-text {
    height: 100%;
    min-height: 20rem;
    padding: 2rem 0rem;
    margin-left: 5rem;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .info {
    display: flex;
    align-items: center;
    i {
      font-size: 1.5rem;
      color: ${Colors.primaryColor};
      margin: 1rem;
    }
    a {
      color: ${Colors.textColor};
      &:hover {
        text-decoration: underline;
      }
    }
  }
  @media (max-width: 800px) {
    .contact-text {
      margin-left: 2.5rem;
      width: 80%;
    }
  }
`;

const Footer = styled.div`
  background: ${Colors.footerColor};
  min-height: 40vh;
  max-height: auto;
  max-width: 100vw;
  display: flex;
  align-items: center;
  padding: 2.5rem 0rem;
  h4 {
    color: white;
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
  a {
    display: block;
    font-size: 1rem;
    color: white;
    font-weight: 300;
    margin: 0.2rem;
    &:hover {
      text-decoration: underline;
    }
  }
  label {
    display: block;
    font-size: 1rem;
    color: white;
    font-weight: 300;
    margin: 0.2rem;
  }
  p {
    color: white;
    font-size: 1rem;
    font-weight: 300;
    margin: 0.2rem;
  }
  iframe {
    border: none;
    margin-left: 5rem;
    margin-right: 3rem;
    height: 35vh;
    width: 35vh;
  }

  .footer-contact {
    display: flex;
  }

  @media (max-width: 1100px) {
    iframe {
      display: none;
    }
    .footer-text {
      margin-left: 5rem;
    }
  }
  @media (max-width: 800px) {
    .footer-text {
      margin-left: 2.5rem;
    }
  }
`;

const FooterPrivacy = styled.div`
  position: absolute;
  bottom: 0%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  a {
    color: white;
    font-size: 0.8rem;
    margin-right: 1rem;
    opacity: 0.5;
  }
  p {
    color: white;
    font-size: 0.8rem;
    opacity: 0.5;
  }
`;

export default ContactSection;

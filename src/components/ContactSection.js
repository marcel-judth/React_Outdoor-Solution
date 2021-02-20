import styled from 'styled-components';
import { Colors } from '../styles/Colors';

const ContactSection = () => {
  return (
    <ContactSect>
      <div className="contact-text">
        <h2>Kontakt</h2>
        <ContactContainer>
          <h3>Schreiben Sie uns</h3>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Tel. oder Email" />
          <input type="text" placeholder="PLZ" />
          <input type="text" placeholder="Nachricht" />
          <button>Senden</button>
        </ContactContainer>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iste
          ratione, voluptates nobis ipsum unde ipsam eaque quasi quia natus!
        </p>
        <div className="contact-info">
          <div className="info">
            <i class="fas fa-phone-alt"></i>
            <a href="tel:+43 578828">+43 676 894 2849</a>
          </div>
          <div className="info">
            <i class="fas fa-envelope"></i>
            <a href="mailto:office@outdoorsolution.at">
              office@outdoorsolution.at
            </a>
          </div>
          <div className="info">
            <i class="fas fa-map-marker-alt"></i>
            <a href="">Villach, AT</a>
          </div>
        </div>
      </div>

      <FooterSocialMediaIcons>
        <a href="https://www.google.com">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.google.com">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.google.com">
          <i class="fab fa-youtube"></i>
        </a>
      </FooterSocialMediaIcons>

      <FooterPrivacy>
        <a href="/Terms">Impressum</a> <p>&copy; Outdoor Solution 2021</p>
      </FooterPrivacy>

      <Footer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1369.648830556576!2d13.87505710061962!3d46.64063589313596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47708055371c03cd%3A0x17cd60b5ba54aade!2sMillst%C3%A4tter%20Str.%2052%2C%209523%20Villach!5e0!3m2!1sen!2sat!4v1613837143439!5m2!1sen!2sat"
          width="250"
          height="250"
          loading="lazy"
        ></iframe>
        <div className="footer-text">
          <h4>Outdoor Solution</h4>
          <p>Daniel Wedam</p>
          <p>Millstätter Straße 52</p>
          <p>9523 Villach, AT</p>
          <br />
          <p>Mo-Fr 08:00-17:00</p>
          <a href="tel:+43 578828">+43 676 894 2849</a>
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

const ContactContainer = styled.div`
  -webkit-box-shadow: 10px 10px 37px -16px rgba(0, 0, 0, 0.82);
  -moz-box-shadow: 10px 10px 37px -16px rgba(0, 0, 0, 0.82);
  box-shadow: 10px 10px 37px -16px rgba(0, 0, 0, 0.82);
  position: absolute;
  right: 3%;
  top: 25%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 25%;
  min-width: 25rem;
  min-height: 20rem;
  height: 50%;
  input {
    border: none;
    border: 0.1rem solid ${Colors.primaryColor};
    height: 2rem;
    width: 70%;
    padding: 0rem 1rem;
  }
  button {
    border: none;
    background: ${Colors.primaryColor};
    padding: 0.7rem 0rem;
    width: 70%;
    color: white;
    cursor: pointer;
    transition: 1s ease;
    &:hover {
      transform: scale(1.1);
      transition: 1s ease;
    }
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

const Footer = styled.div`
  background: ${Colors.footerColor};
  height: 40vh;
  min-height: 45vh;
  width: 100vw;
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

const FooterSocialMediaIcons = styled.div`
  color: white;
  position: absolute;
  bottom: 0%;
  right: 0%;
  padding: 0.5rem 0rem;
  a {
    color: white;
    font-size: 1.8rem;
    margin: 0rem 3rem;
  }
  i {
    transition: 0.75s ease;
    &:hover {
      transform: scale(1.1);
      transition: 0.75s ease;
    }
  }
  @media (max-width: 800px) {
    display: none;
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

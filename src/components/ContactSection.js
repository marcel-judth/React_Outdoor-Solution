import styled from 'styled-components';
import { Colors } from '../styles/Colors';

const ContactSection = () => {
  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        console.log('SUCCESS');
      } else {
        console.log('ERROR', xhr);
      }
    };
    xhr.send(data);
  };

  return (
    <ContactSect id="contact">
      <div className="contact-text">
        <h2>Kontakt</h2>

        <ContactContainer>
          <form
            onSubmit={submitForm}
            action="https://formspree.io/f/mzbklnpk"
            method="POST"
          >
            <h3>Schreiben Sie uns</h3>
            <input
              id="txtName"
              placeholder="Name"
              type="text"
              name="Name"
              onKeyPress={(e) => {
                e.key === 'Enter' && e.preventDefault();
              }}
              required
            />
            <input
              id="txtContact"
              name="Kontakt"
              type="text"
              placeholder="Tel. oder Email"
              onKeyPress={(e) => {
                e.key === 'Enter' && e.preventDefault();
              }}
              required
            />
            <input
              id="txtPLZ"
              name="PLZ"
              type="text"
              placeholder="PLZ"
              onKeyPress={(e) => {
                e.key === 'Enter' && e.preventDefault();
              }}
            />
            <textarea
              id="txtMessage"
              name="Nachricht"
              placeholder="Nachricht"
              onKeyPress={(e) => {
                e.key === 'Enter' && e.preventDefault();
              }}
            />
            <button type="submit">Senden</button>
          </form>
        </ContactContainer>

        <p className="contactInfoText">
          Wir sind für Sie da und freuen uns auf Ihren Anruf!
        </p>
        <div className="contact-info">
          <div className="info">
            <i class="fas fa-phone-alt"></i>
            <a href="tel:+436607398100">+43 660 739 81 00</a>
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
          loading="lazy"
        ></iframe>
        <div className="footer-text">
          <h4>Outdoor Solution</h4>
          <p>Daniel Wedam</p>
          <p>Millstätter Straße 52</p>
          <p>9523 Villach, AT</p>
          <br />
          <p>Mo-Do 08:00-17:00 | Fr 08:00-12:00</p>
          <a href="tel:+436607398446">+43 660 739 84 46</a>
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

const ContactContainer = styled.div`
  form {
    -webkit-box-shadow: 10px 10px 37px -16px rgba(0, 0, 0, 0.82);
    -moz-box-shadow: 10px 10px 37px -16px rgba(0, 0, 0, 0.82);
    box-shadow: 10px 10px 37px -16px rgba(0, 0, 0, 0.82);
    position: absolute;
    right: 10%;
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

    textarea {
      width: 70%;
      height: 20%;
      font-family: 'montserrat', sans-serif;
      padding: 0.5rem 1rem;
      border: none;
      border: 0.1rem solid ${Colors.primaryColor};
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

    @media (max-width: 1150px) {
      right: 3%;
    }
    @media (max-width: 800px) {
      display: none;
    }
  }
`;

const Footer = styled.div`
  background: ${Colors.footerColor};
  height: 40vh;
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
    height: 35vh;
    width: 35vh;
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

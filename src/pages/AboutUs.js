import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { useScroll } from '../components/useScroll';
import AboutUsImage from '../img/about-us-image.jpg';
import { fade, lineAnimAboutUs } from '../Animation';
import { Colors } from '../styles/Colors';
import ScrollTop from '../components/ScrollTop';

function AboutUs() {
  return (
    <About>
      <AboutUsSection>
        <h2>Über uns</h2>
        <motion.div
          className="line"
          initial="hidden"
          animate="show"
          variants={lineAnimAboutUs}
        ></motion.div>
        <AboutUsWrapper>
          <img src={AboutUsImage} alt="about us image" />
          <AboutUsText>
            <p>
              Outdoor Solution ist ein{' '}
              <span>Garten- und Landschaftsbauunternehmen.</span> Wir
              beschäftigen uns vorwiegend mit der Neu- und Umgestaltung von
              Gärten. Gerne kümmern wir uns um die Planung, Durchführung und
              Nachbetreuung Ihres persönlichen Feriendomizils „Garten“.
            </p>
            <br />
            <br />

            <p>
              Wir von Outdoor Solution unterstützen Sie bei die Verwirklichung
              Ihres <span>biologischen Naturpools</span>, sowie Teiche,
              Wasserspiel, Bachläufe, Whirlpools und vieles mehr….
            </p>
            <br />
            <br />

            <p>
              Wir von Outdoor Solution stehen für den Einbau von{' '}
              <span>nachhaltigen Materialien</span> wie Holz, Naturstein und
              Metall. Dabei setzen wir auf qualitativ hochwertige Produkte
              welche vorwiegend aus Österreich und Deutschland stammen.
            </p>
            <br />
            <br />

            <p>
              Es ist uns und ein wichtiges Anliegen, auf Ihre individuellen
              Wünsche einzugehen. Des Weiteren legen wir großen Wert auf{' '}
              <span>persönliche Betreuung</span> und schaffen in Ihrem Garten
              eine Oase der Entspannung.
            </p>
          </AboutUsText>
        </AboutUsWrapper>
        <ScrollTop />
      </AboutUsSection>
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
          <p>Mo-Fr 08:00-17:00</p>
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
    </About>
  );
}

const About = styled.div`
  position: relative;
`;

const AboutUsSection = styled.div`
  padding-top: 15vh;
  height: auto;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  img {
    flex: 1 1 40rem;
    width: 35vw;
    object-fit: cover;
  }
  .line {
    height: 0.2rem;
    background: ${Colors.primaryColor};
    opacity: 0.8;
    margin-left: 5rem;
    margin-right: 5rem;
    margin-top: 1rem;
    margin-bottom: 3rem;
  }

  h2 {
    margin-left: 5rem;
    margin-right: 5rem;
  }

  span {
    font-weight: bold;
  }

  @media (max-width: 1200px) {
    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 600px) {
    h2 {
      margin-left: 2.5rem;
      margin-right: 2.5rem;
    }
    .line {
      margin-left: 2.5rem;
      margin-right: 2.5rem;
    }
  }
`;

const AboutUsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 5rem;
  margin-bottom: 2rem;

  @media (max-width: 950px) {
    display: block;
    img {
      width: 100%;
      max-height: 30vh;
      float: center;
      display: block;
      margin: 1rem auto;
    }
  }

  @media (max-width: 600px) {
    padding: 0rem 2.5rem;
  }
`;

const AboutUsText = styled.div`
  flex: 1 1 40rem;
  margin: 0rem 2rem 0rem 2rem;
  h2 {
    margin-bottom: 5vh;
  }
  p {
    line-height: 1.7rem;
  }

  @media (max-width: 950px) {
    margin: 0rem;
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

export default AboutUs;

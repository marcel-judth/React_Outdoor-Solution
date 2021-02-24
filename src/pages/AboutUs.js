import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { useScroll } from '../components/useScroll';
import AboutUsImage from '../img/about-us-image.jpg';
import { fade, lineAnimAboutUs } from '../Animation';
import { Colors } from '../styles/Colors';

function AboutUs() {
  return (
    <AboutUsSection>
      <img src={AboutUsImage} alt="about us image" />
      <AboutUsText>
        <h2>Über uns</h2>
        <motion.div
          className="line"
          initial="hidden"
          animate="show"
          variants={lineAnimAboutUs}
        ></motion.div>
        <p>
          Bei Outdoorsolutions handelt es sich um ein GALA-Bau-Unternehmen
          (Garten und Landschaftstbauunternehmen), dass sich vorwiegend mit Neu-
          als auch Umgeschtaltungen vorhandener Grünflächen beschäftigt.
        </p>
        <br />
        <p>
          Ferner kümmern wir uns um die Planung, Durchführung und Nachbetreueung
          Ihres persönlichen Feriendomizils “Garten”. Abgerundet werden unsere
          Leistungen durch die Verwirklichung Ihres biologischen Naturpools
          (Teiche, Wasserspiele, Bachläufe, Whirlpools, u.v.m.).
        </p>
        <br />
        <p>
          Es ist uns ein wichtiges Anliegen, ganz auf Ihre individuellen
          Vorstellungen einzugehen! Des Weiteren legen wir großen Wert auf
          persönliche Betreuung, um für Sie die perfekte Dienstleistung zu
          gewährleisten.
        </p>
      </AboutUsText>
    </AboutUsSection>
  );
}

const AboutUsSection = styled.div`
  padding: 0rem 5rem;
  padding-top: 15vh;

  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;
  img {
    flex: 1 1 40rem;
    width: 35vw;
    object-fit: cover;
  }
  .line {
    height: 0.4rem;
    background: ${Colors.primaryColor};
    opacity: 0.8;
    margin-top: 1rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 1200px) {
    p {
      font-size: 0.9rem;
    }
  }

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
    padding-top: 15vh;
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

export default AboutUs;

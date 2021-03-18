import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import AboutUsImage from '../img/about-us-image.jpg';
import { lineAnimAboutUs } from '../Animation';
import { Colors } from '../styles/Colors';
import ScrollTop from '../components/ScrollTop';
import Footer from '../components/Footer';

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
      <Footer />
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

export default AboutUs;

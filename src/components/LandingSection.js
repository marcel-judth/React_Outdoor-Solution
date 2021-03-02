import styled from 'styled-components';
import { Hide } from '../styles/Styles';
import landingImage from '../img/home_landing_image.jpg';
import logoImage from '../img/logo_outdoor_solution.png';
import { motion } from 'framer-motion';
import { titleAnim } from '../Animation';

const LandingSection = () => {
  return (
    <HomeLanding>
      {/* <img src={landingImage} alt="Bild Teich" /> */}

      <HomeLandingText
        transition={{ duration: 1 }}
        initial={{ transform: 'translateX(100%)', opacity: 0 }}
        animate={{ transform: 'translateX(0%)', opacity: 1 }}
      >
        <Hide>
          <motion.img
            src={logoImage}
            loading="lazy"
            alt="logo Outdoor Solution"
          />
        </Hide>
        <Hide>
          <motion.p variants={titleAnim} initial="hidden" animate="show">
            Stell dir vor, Bäume würden gratis WLAN aussenden! Wir würden Sie
            überall pflanzen! Ein Jammer, dass sie nur die Luft produzieren, die
            wir atmen...
          </motion.p>
        </Hide>
      </HomeLandingText>
    </HomeLanding>
  );
};

const HomeLanding = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: #cccccc;
  background: url(${landingImage}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HomeLandingText = styled(motion.div)`
  width: 30rem;
  height: auto;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  top: 35%;
  right: 10%;
  padding: 3rem 2.5rem 2.5rem 2.5rem;
  background: rgba(0, 0, 0, 0.8);
  img {
    position: relative;
    max-width: 20rem;
    height: auto;
    margin-bottom: 2rem;
  }
  p {
    color: white;
    opacity: 0.7;
    text-align: justify;
    font-weight: 400;
  }
  @media (max-width: 800px) {
    padding: 1rem 2rem;
    width: 80%;
  }
`;

export default LandingSection;

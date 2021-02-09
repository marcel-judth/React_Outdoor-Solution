import styled from 'styled-components';
import landingImage from '../img/home_landing_image.jpg';
import logoImage from '../img/logo_outdoor_solution.png';
import { motion } from 'framer-motion';
import { flyInAnim } from '../Animation';
const LandingSection = () => {
  return (
    <HomeLanding>
      <img src={landingImage} alt="Bild Teich" />

      <HomeLandingText variants={flyInAnim}>
        <img src={logoImage} alt="logo Outdoor Solution" />
        <p>
          Stell dir vor, Bäume würden gratis WLAN aussenden! Wir würden Sie
          überall pflanzen! Ein Jammer, dass sie nur die Luft produzieren, die
          wir atmen...
        </p>
      </HomeLandingText>
    </HomeLanding>
  );
};

const HomeLanding = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HomeLandingText = styled(motion.div)`
  width: 40vw;
  height: 35vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 0rem 5rem;
  top: 40%;
  right: 0%;
  background: rgba(0, 0, 0, 0.7);
  img {
    position: relative;
    max-width: 30rem;
    height: auto;
  }
  p {
    color: white;
    opacity: 0.8;
  }
`;

export default LandingSection;

import styled from 'styled-components';
import { Hide } from '../styles/Styles';
import landingImage from '../img/home_landing_image.jpg';
import logoImage from '../img/logo_outdoor_solution.png';
import { motion } from 'framer-motion';

const LandingSection = () => {
  return (
    <HomeLanding>
      <HomeLandingText
        transition={{ duration: 1.5, delay: 2 }}
        initial={{ transform: 'translateX(100%)', opacity: 0 }}
        animate={{ transform: 'translateX(0%)', opacity: 1 }}
      >
        <Hide>
          <img src={logoImage} loading="lazy" alt="logo Outdoor Solution" />
        </Hide>
        <Hide>
          <p>
            Stell dir vor, <span>Bäume</span> würden gratis <span>WLAN </span>
            aussenden! Wir würden Sie
            <span> überall pflanzen</span>! Ein <span>Jammer</span>, dass sie
            nur die <span>Luft</span> produzieren, die wir <span>atmen</span>...
          </p>
        </Hide>
      </HomeLandingText>
    </HomeLanding>
  );
};

const HomeLanding = styled.div`
  max-width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: #cccccc;
  background: url(${landingImage}) no-repeat center center fixed;
  background-size: cover;
  /* img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  } */
  @media (max-width: 800px) {
    background-size: auto;
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
  padding: 3rem 2rem 2rem 2rem;
  background: rgba(0, 0, 0, 0.8);
  img {
    position: relative;
    max-width: 20rem;
    height: auto;
    margin-bottom: 2rem;
  }
  p {
    color: white;
    text-align: justify;
    font-weight: 400;

    span {
      font-weight: bold;
      opacity: 1;
    }
  }
  @media (max-width: 800px) {
    padding: 1rem 2rem;
    width: 80%;
  }
`;

export default LandingSection;

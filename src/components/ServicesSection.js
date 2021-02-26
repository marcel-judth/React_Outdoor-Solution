import styled from 'styled-components';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import ImageSlider from './ImageSlider';
import { GiFruitTree, GiSeedling, GiPencilRuler } from 'react-icons/gi';
import { FaSeedling, FaWater } from 'react-icons/fa';
import { SliderData } from './SliderData';
import { motion } from 'framer-motion';
import { fade, lineAnim } from '../Animation';
import { useScroll } from './useScroll';
import { Colors } from '../styles/Colors';

const ServicesSection = () => {
  const [element, controls] = useScroll(0.3);
  const [lineElement, lineControls] = useScroll(0.5);

  return (
    <ServicesBody
      variants={fade}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>Leistungen</h2>
      <motion.div
        className="line"
        animate={lineControls}
        ref={lineElement}
        variants={lineAnim}
      ></motion.div>
      <ServicesContainer>
        <ImageSlider className="image-slider" slides={SliderData} />
        <div className="services">
          <AnimateSharedLayout>
            <ToggleContainer>
              <Toggle title="Planung von Gärten" iconName="fas fa-pencil-ruler">
                <div className="answer">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quos, tempore?
                  </p>
                </div>
              </Toggle>
            </ToggleContainer>

            <ToggleContainer>
              <Toggle title="Gestaltung von Gärten" iconName="fas fa-seedling">
                <div className="answer">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quos, tempore?
                  </p>
                </div>
              </Toggle>
            </ToggleContainer>

            <ToggleContainer>
              <Toggle title="Pool- & Teichbau" iconName="fas fa-water">
                <div className="answer">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quos, tempore?
                  </p>
                </div>
              </Toggle>
            </ToggleContainer>

            <ToggleContainer>
              <Toggle title="Gartenpflege" iconName="fas fa-seedling">
                <div className="answer">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quos, tempore?
                  </p>
                </div>
              </Toggle>
            </ToggleContainer>

            <ToggleContainer>
              <Toggle title="Baumschnitt" iconName="fas fa-seedling">
                <div className="answer">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quos, tempore?
                  </p>
                </div>
              </Toggle>
            </ToggleContainer>
          </AnimateSharedLayout>
        </div>
      </ServicesContainer>
    </ServicesBody>
  );
};

const ServicesBody = styled(motion.div)`
  background: white;
  height: 100vh;
  padding-top: 12rem;
  padding-left: 5rem;

  .line {
    height: 0.4rem;
    background: ${Colors.primaryColor};
    opacity: 0.8;
    margin-top: 1rem;
    margin-bottom: 3rem;
  }

  img {
    height: 50vh;
    width: 35vw;
  }

  span {
    display: block;
  }

  h4 {
    font-size: 1.5rem;
  }

  .fa-angle-up,
  .fa-angle-down {
    margin-left: auto;
    margin-right: 1rem;
    font-size: 1.5rem;
    opacity: 0.5;
  }

  .faq-line {
    background: #cccccc;
    height: 0.15rem;
    margin: 0.5rem 0rem;
    padding-left: 5rem;
    width: 100%;
  }

  .question {
    padding: 1rem 0rem;
    cursor: pointer;
    width: 40vw;
  }

  .answer {
    padding: 1rem 0rem;
    margin-left: 5rem;
    p {
      padding: 0.5rem 0rem;
      font-size: 0.8rem;
    }
  }

  .services {
    margin: 0rem auto;
    max-width: 100%;
  }

  .toggle-title {
    display: flex;
    align-items: center;
  }

  .toggle-icon-container {
    margin-right: 2rem;
    background: ${Colors.primaryColor};
    /* padding: 0.7rem 0.7rem; */
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 1.2rem;
    color: white;
  }

  .toggle-arrow-container {
    margin-left: auto;
  }

  @media (max-width: 800px) {
    .question {
      width: 30rem;
      max-width: 80%;
    }
    .line {
      max-width: 70%;
    }
    h4 {
      font-size: 1rem;
    }
    .services {
      margin: 0rem 0rem;
    }
    padding: auto;
  }
`;

const ServicesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 70vh;
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
`;

export default ServicesSection;
import { useState } from 'react';
import { RiArrowDropLeftFill, RiArrowDropRightFill } from 'react-icons/ri';
import styled from 'styled-components';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  //functions
  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  //check array
  if (!Array.isArray(slides) || slides.legh <= 0) return null;

  return (
    <ImageSliderSection>
      <RiArrowDropLeftFill className="left-arrow" onClick={nextSlide} />
      <RiArrowDropRightFill className="right-arrow" onClick={prevSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slider active' : 'slider'}
            key={index}
          >
            {index === current && <img src={slide.image} alt={slide.altText} />}
          </div>
        );
      })}
    </ImageSliderSection>
  );
};

const ImageSliderSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 0.2rem;
    object-fit: cover;
  }
  .right-arrow {
    position: absolute;
    top: 50%;
    right: 0%;
    font-size: 3rem;
    cursor: pointer;
    user-select: none;
    z-index: 10;
    color: #969696;
  }

  .left-arrow {
    position: absolute;
    top: 50%;
    left: 0%;
    font-size: 3rem;
    cursor: pointer;
    user-select: none;
    z-index: 10;
    color: #969696;
  }

  .slider {
    opacity: 0;
    transition-duration: 1s ease;
  }

  .slider.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.02);
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

export default ImageSlider;

import React, { useState } from 'react';
import styled from 'styled-components';
import Project from './Project';
import { Colors } from '../styles/Colors';

//data
import { ProjectsData } from './ProjectsData';

function ProjectsGrid() {
  const [modalImg, setModalImg] = useState('');
  const [modalCaption, setModalCaption] = useState('test');

  const onModalClick = (e) => {
    if (e.target.classList.contains('modal'))
      document.querySelector('.modal').classList.remove('open');
    document.querySelector('.modal img').classList.remove('open');
  };

  return (
    <ProjectsWrapper>
      <ImageGallery>
        {ProjectsData.map((project, index) => {
          return (
            <Project
              image={project.image}
              text={project.text}
              altText={project.altText}
              key={index}
              setImage={setModalImg}
              setCaption={setModalCaption}
            />
          );
        })}
      </ImageGallery>
      <Modal className="modal" onClick={onModalClick}>
        <img src={modalImg} loading="lazy" alt="modal image" />
        <p className="caption">{modalCaption}</p>
      </Modal>
    </ProjectsWrapper>
  );
}

const Modal = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0;
  transition: all 0.25s ease-out;

  p {
    color: white;
    font-size: 2rem;
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 500;
  }
  img {
    position: absolute;
    height: 70%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.5);
    transition: all 0.25s ease-out;
  }
  img.open {
    transform: translate(-50%, -50%) scale(1);
  }

  @media (max-width: 1000px) {
    p {
      font-size: 1.5rem;
    }
  }
`;

const ProjectsWrapper = styled.div`
  width: 100%;
  height: auto;
  .modal.open {
    opacity: 1;
    pointer-events: all;
  }
`;

const ImageGallery = styled.div`
  img {
    max-width: 100%;
    height: auto;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
      transform: scale(1.1);
      transition: all 0.5s ease;
    }
  }

  .gallery-item {
    height: auto;
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:hover {
      .gallery-item-text-wrapper {
        opacity: 0.8;
      }
    }
  }

  .gallery-item-text-wrapper {
    position: absolute;
    background: ${Colors.primaryColor};
    opacity: 0.5;
    bottom: 0%;
    width: 100%;
    height: 5vh;
    min-height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    opacity: 0;
    p {
      opacity: 1;
      color: white;
      font-size: 1rem;
      font-weight: 400;
    }
  }

  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: repeat() (auto-flow);
    grid-row-gap: 1rem;
    grid-column-gap: 1rem;
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat() (auto-flow);
    grid-row-gap: 1rem;
    grid-column-gap: 1rem;

    .gallery-item:nth-child(1) {
      grid-column: span 2;
      grid-row: span 2;
    }

    .gallery-item:nth-child(2) {
      grid-column: span 2;
      grid-row: span 1;
    }

    .gallery-item:nth-child(9) {
      grid-column: span 2;
      grid-row: span 1;
    }
    .gallery-item:nth-child(10),
    .gallery-item:nth-child(13),
    .gallery-item:nth-child(16),
    .gallery-item:nth-child(17),
    .gallery-item:nth-child(18),
    .gallery-item:nth-child(20) {
      grid-column: span 2;
      grid-row: span 1;
    }

    .gallery-item:nth-child(19),
    .gallery-item:nth-child(25) {
      grid-row: span 2;
      grid-column: span 2;
    }
    .gallery-item:nth-child(4),
    .gallery-item:nth-child(8) {
      grid-row: span 2;
    }
  }
`;

export default ProjectsGrid;

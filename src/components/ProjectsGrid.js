import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import { Colors } from '../styles/Colors';
//data
import { ProjectsData } from './ProjectsData';

function ProjectsGrid() {
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
            />
          );
        })}
        {/* <Project image={gartenfaser} text="hello" />
        <Project image={Teich} text="343" />
        <Project image={logo} text="h32ello" />
        <Project image={gartenfaser} text="h34ello" />
        <Project image={lake} text="hel34lo" />
        <Project image={Teich} text="h34ello" />
        <Project image={Teich} text="he341llo" /> */}
      </ImageGallery>
    </ProjectsWrapper>
  );
}

const ProjectsWrapper = styled.div`
  width: 100%;
  height: auto;
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
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat() (5, 300px);
    grid-auto-flow: row dense;

    .gallery-item {
      margin: 0.5rem;
    }

    .gallery-item::first-child {
      grid-row: span 1;
    }

    .gallery-item:nth-child(2) {
      grid-column: 2/3;
      grid-row: span 2;
    }

    .gallery-item:nth-child(6),
    .gallery-item:nth-child(6) {
      grid-row: span 2;
    }
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat() (3, auto-flow);

    .gallery-item::first-child .gallery-item:nth-child(7),
    .gallery-item:nth-child(8) {
      grid-column: span 2;
      grid-row: span 1;
    }

    .gallery-item:nth-child(2) {
      grid-column: span 2;
      grid-row: span 2;
    }
  }
`;

export default ProjectsGrid;

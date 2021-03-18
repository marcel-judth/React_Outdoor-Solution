import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import ProjectsGrid from '../components/ProjectsGrid';
import ScrollTop from '../components/ScrollTop';

function Projects() {
  return (
    <>
      <ProjectsWrapper>
        <h2>Projekte</h2>
        <p className="projects-text">
          Egal ob es sich um ein größeres oder kleineres Projekt handelt – wir
          kümmern uns um die <span> Verwirklichung Ihrer Ideen</span>, Ihrer
          lang ersehnten Wünsche! Wir haben für Sie eine Auswahl unserer
          Projekte zusammengestellt. Lassen Sie sich durch unsere Vorschläge für
          Ihr nächstes Projekt mit Outdoor Solution inspirieren.
        </p>
        <ProjectsGrid />
        <ScrollTop />
      </ProjectsWrapper>
      <Footer />
    </>
  );
}

const ProjectsWrapper = styled.div`
  padding-top: 15vh;
  padding-left: 5rem;
  padding-right: 5rem;
  h2 {
    margin-bottom: 2rem;
  }
  .projects-text {
    line-height: 2rem;
    margin-bottom: 1.5rem;
    span {
      font-weight: bold;
    }
  }

  @media (max-width: 500px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export default Projects;

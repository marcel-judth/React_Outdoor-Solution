import React from 'react';
import styled from 'styled-components';
import ProjectsGrid from '../components/ProjectsGrid';

function Projects() {
  return (
    <ProjectsWrapper>
      <h2>Projekte</h2>
      <p>
        Egal ob es sich um ein größeres oder kleineres Projekt handelt – wir
        kümmern uns um die Verwirklichung Ihrer Ideen, Ihrer lang ersehnten
        Wünsche! Wir haben für Sie eine Auswahl unserer Projekte
        zusammengestellt. Lassen Sie sich durch unsere Vorschläge für Ihr
        nächstes Projekt mit Outdoor Solution inspirieren.
      </p>
      <ProjectsGrid />
    </ProjectsWrapper>
  );
}

const ProjectsWrapper = styled.div`
  padding-top: 15vh;
  padding-left: 5rem;
  padding-right: 5rem;
  h2 {
    margin-bottom: 2rem;
  }
  p {
    line-height: 2rem;
  }
`;

export default Projects;

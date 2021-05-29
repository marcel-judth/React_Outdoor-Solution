import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { lineAnimAboutUs } from '../Animation';
import { useScroll } from '../components/useScroll';
import { Colors } from '../styles/Colors';
import ScrollTop from '../components/ScrollTop';
import { Route, Switch } from 'react-router';
import Impressum from './Impressum';
import DSGVO from './DSGVO';
import AGBS from './AGBS';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Info from './Info';

function Terms() {
  const [lineElement, lineControls] = useScroll(0.1);

  return (
    <TermWrapper>
      <TermsSection>
        <h1>Rechtliches</h1>
        <motion.div
          className="line"
          initial="hidden"
          animate="show"
          variants={lineAnimAboutUs}
        ></motion.div>
        <TermsNav>
          <Link to="/terms/impressum">
            <button>Impressum</button>
          </Link>
          <Link to="/terms/dsgvo">
            <button>Datenschutzverordnung</button>
          </Link>
          <Link to="/terms/info">
            <button>Informationspflicht</button>
          </Link>
          {/* <Link to="/terms/agbs">
            <button>AGBs</button>
          </Link> */}
        </TermsNav>
        <Switch>
          <Route path="/terms/impressum" exact>
            <Impressum />
          </Route>
          <Route path="/terms/dsgvo" exact>
            <DSGVO />
          </Route>
          <Route path="/terms/agbs" exact>
            <AGBS />
          </Route>
          <Route path="/terms/info" exact>
            <Info />
          </Route>
        </Switch>
      </TermsSection>
      <ScrollTop />
      <Footer />
    </TermWrapper>
  );
}

const TermWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TermsSection = styled.div`
  padding-top: 15vh;
  padding-left: 5rem;
  margin-bottom: 3rem;
  .line {
    height: 0.2rem;
    background: ${Colors.primaryColor};
    opacity: 0.8;
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
  p {
    line-height: 2rem;
  }
  h1 {
    font-size: 2rem;
    font-weight: 400;
  }
  h2 {
    word-wrap: break-word;
  }
  span {
    font-weight: bold;
  }

  button {
    border: none;
    background: ${Colors.primaryColor};
    padding: 0.7rem 2rem;
    font-size: 1rem;
    width: auto;
    color: white;
    cursor: pointer;
    transition: 1s ease;
    margin: 1rem 1rem;
    &:hover {
      transform: scale(1.1);
      transition: 1s ease;
    }
  }

  @media (max-width: 1000px) {
    padding-left: 2rem;
    h2 {
      font-size: 1.5rem;
    }
  }
`;

const TermsNav = styled.div``;

export default Terms;

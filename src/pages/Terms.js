import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { lineAnimAboutUs } from '../Animation';
import { useScroll } from '../components/useScroll';
import { Colors } from '../styles/Colors';
import ScrollTop from '../components/ScrollTop';

function Terms() {
  const [lineElement, lineControls] = useScroll(0.1);

  return (
    <TermsSection>
      <h1>Rechtliches</h1>
      <motion.div
        className="line"
        initial="hidden"
        animate="show"
        variants={lineAnimAboutUs}
      ></motion.div>
      <h2>Impressum</h2>
      <p>Outdoor Solution</p>
      <p>Daniel Tino Wedam</p>
      <p>Millstätter Straße 52</p>
      <p>9532 Villach, AT</p>
      <br />
      <p>
        <span>Unternehmensgegenstand: </span>Landschaftsgärnterei
      </p>
      <p>
        <span>UID-Nummer: </span>ATU71987503
      </p>
      <br />
      <p>
        <span>E-Mail: </span>office@outdoorsolution.at
      </p>
      <p>
        <span>Tel: </span>0660 739 81 00
      </p>
      <ScrollTop />
    </TermsSection>
  );
}

const TermsSection = styled.div`
  padding-top: 15vh;
  padding-left: 5rem;
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
    font-size: 2.2rem;
    font-weight: 400;
  }
  span {
    font-weight: bold;
  }
`;

export default Terms;

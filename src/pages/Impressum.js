import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { lineAnimAboutUs } from "../Animation";
import { Colors } from "../styles/Colors";

function Impressum(props) {
  return (
    <TermsSection>
      <h2>Impressum</h2>
      <p>Outdoor Solution</p>
      <p>Daniel Tino Wedam</p>
      <p>Millstätter Straße 52</p>
      <p>9532 Villach, AT</p>
      <br />
      <p>
        <span>Unternehmensgegenstand: </span>Garten- und Landschaftsgestaltung,
        Landschaftsgärtnerei
      </p>
      <p>
        <span>Gewerbeart: </span>reglementiertes Gewerbe
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
      <br />
      <p>Mitglied der Wirtschaftskammer Kärnten</p>
      <p>
        <span>Gewerbebehörde: </span>Bezirkshauptmannschaft Villach Land
      </p>
      <br />
      <p>
        <span>Anwendbare Rechtsvorschriften: </span>GewO, ECG: abrufbar unter
        <a href=" http://ris.bka.gv.at/bundesrecht">
          {" "}
          http://ris.bka.gv.at/bundesrecht
        </a>
      </p>
    </TermsSection>
  );
}

const TermsSection = styled.div`
  padding-top: 5vh;
  padding-left: 0rem;

  p {
    line-height: 2rem;
  }
  h1 {
    font-size: 2rem;
    font-weight: 400;
  }
  span {
    font-weight: bold;
  }
`;

export default Impressum;

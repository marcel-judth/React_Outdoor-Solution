import React from 'react';
import styled from 'styled-components';

export default function Info() {
  return (
    <TermsSection>
      <h2>
        Informationspflicht der Online Reservierungen bei Outdoor Solution
      </h2>
      <li>1. Online Reservierung- so funktioniert es</li>
      <p>
        Schritt 1 online oder telefonisch reservieren und Termin zur Abholung
        auswählen
      </p>
      <p>Schritt 2 Waren abholen</p>
      <p>Schritt 3 Bezahlen (Bar oder auf Rechnung, vor Ort)</p>
      <li>2. Name, Anschrift und Kontaktdaten des Unternehmens</li>
      <p>Outdoor Solution</p>
      <p>Daniel Wedam</p>
      <p>Millstätter Straße 52</p>
      <p>9523 Villach- Landskron</p>
      <p>0660/ 73 98 100</p>
      <p>Info@outdoorsolution.at</p>

      <li>3. Zu unseren Produkten</li>
      <p>
        Wir verkaufen Erden und Gartenfaser der Firma Florissa. Nähere
        Informationen zu den Produkten finden Sie auf der Homepage
        <a href="https://www.florissa.at/"> www.florissa.at</a>. Alle Preise
        unserer Produkte sind inkl. Umsatzsteuer. Der Gesamtpreis richtet sich
        ausschließlich auf die reservierte Ware. Es werden keine zusätzlichen
        Kosten verrechnet. Die Bezahlung erfolgt, bei Abholung in der
        Millstätter Straße 52, 9523 Villach- Landskron, bar oder auf Rechnung.
      </p>

      <li>4. Allgemeine Bedingungen</li>
      <p>
        Die Produkte können online über unser Formular oder telefonisch
        reserviert werden. Bei Online Reservierungen bitte alle Felder
        ausfüllen. Die Ware ist in 2-4 Tagen abholbereit. Die Termine für die
        Online Reservierung können, innerhalb von den festgelegten Zeiten von
        Montag bis Freitag, ausgewählt werden. Bei der Online- Reservierung
        erhalten Sie in wenigen Minuten eine Bestätigung über Ihre Bestellung.
        Sollten die Ware nicht abgeholt werden, verfällt die Reservierung
        automatisch. Erneute Reservierungen werden nicht entgegengenommen.
      </p>

      <li>5. Beschwerden</li>
      <p>
        Beschwerden richten Sie bitte an unsere Mailadresse
        office@outdoorsolution.at.
      </p>

      <li>6. Rücktrittsrecht</li>
      <p>
        Die Widerrufsfrist beträgt 14 Tage ab dem Tag, an dem Sie die Ware in
        Besitz genommen haben. Um Ihr Widerrufsrecht auszuüben müssen Sie uns
        mittels einer eindeutigen Erklärung (per Mail an
        office@outdoorsolution.at) über Ihren Entschluss, diesen Vertrag zu
        wiederrufen, informieren. Das Rücktrittsrecht verfällt, wenn die Ware
        beschädigt oder entsiegelt worden sind.
      </p>
      <button>
        <a
          href="Widerrufsbelehrung_und_Widerrufsformular.pdf"
          download="Widerrufsbelehrung_und_Widerrufsformular.pdf"
          className="white-text"
        >
          Widerrufsformular
        </a>
      </button>
      <li>7. Eigentumsvorbehalt</li>
      <p>
        Die Ware bleibt bis zur vollständigen Bezahlung Eigentum von Outdoor
        Solution.
      </p>
    </TermsSection>
  );
}

const TermsSection = styled.div`
  padding-top: 5vh;
  padding-left: 0rem;

  p {
    line-height: 2rem;
    margin: 1rem 2rem;
  }
  h1 {
    font-size: 2rem;
    font-weight: 400;
  }
  span {
    font-weight: bold;
  }
  li {
    font-weight: bold;
    font-size: 1rem;
    margin: 2rem 0rem;
  }
  .white-text {
    color: white;
    font-size: 1rem;
  }
`;

const TextCenter = styled.p`
  text-align: center;
`;

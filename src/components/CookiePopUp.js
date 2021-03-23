import React from 'react';
import styled from 'styled-components';
import { Colors } from '../styles/Colors';

function CookiePopUp() {
  const onCookiesAccept = () => {
    sessionStorage.setItem('jdc_consent', true);
    const popup = document.querySelector('.cookiePopUp');
    popup.style.opacity = '0';
    popup.style.pointerEvents = 'none';
  };

  return (
    <PopUp className="cookiePopUp">
      <p>
        Diese Website verwendet Cookies – nähere Informationen dazu und zu Ihren
        Rechten als Benutzer finden Sie in unserer Datenschutzerklärung am Ende
        der Seite. Klicken Sie auf „Ich stimme zu“, um Cookies zu akzeptieren
        und direkt unsere Website besuchen zu können.
      </p>
      <button onClick={onCookiesAccept}>Ich stimme zu</button>
    </PopUp>
  );
}

const PopUp = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0%;
  left: 0%;
  min-height: 8vh;
  height: auto;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1;
  padding: 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: white;
    font-size: 0.9rem;
    flex: 3 1 30rem;
  }

  button {
    padding: 1rem 2rem;
    margin-left: 5rem;
    background: ${Colors.primaryColor};
    border: none;
    color: white;
    font-family: 'montserrat', sans-serif;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
      transform: scale(1.1);
      transition: all 0.5s ease;
    }
  }
  @media (max-width: 800px) {
    button {
      margin-left: 1rem;
      padding: 1rem 1rem;
      white-space: nowrap;
    }
  }
`;

export default CookiePopUp;

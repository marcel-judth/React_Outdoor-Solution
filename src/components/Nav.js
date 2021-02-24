//styles
import styled from 'styled-components';
import { Colors } from '../styles/Colors';
//images
import logoImg from '../img/logo_outdoor_solution.png';
//icons
import { FaBars, FaTimes } from 'react-icons/fa';
//router
import { Link, useLocation } from 'react-router-dom';
//animation
import { motion } from 'framer-motion';
import { useState } from 'react';

const Nav = () => {
  const location = useLocation();
  const [navStatus, setNavStatus] = useState(false);
  return (
    <StyledNav>
      <img src={logoImg} alt="logo Outdoor Solution" />

      <Burger
        className={`burger ${navStatus ? 'toggle' : ''}`}
        onClick={() => setNavStatus(!navStatus)}
      >
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </Burger>

      {/* <FaBars className="burger" onClick={() => setNavStatus(!navStatus)} />
      <FaTimes className="burger" onClick={() => setNavStatus(!navStatus)} /> */}

      <ul className={`${navStatus ? 'active' : ''}`}>
        <li>
          <Link to="/">Home</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: location.pathname === '/' ? '50%' : '0%' }}
          />
        </li>
        <li>
          <Link to="/offers">Leistungen</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: location.pathname === '/offers' ? '50%' : '0%' }}
          />
        </li>
        <li>
          <Link to="/overview">Überblick</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{
              width: location.pathname === '/overview' ? '50%' : '0%',
            }}
          />
        </li>
        <li>
          <Link to="/projects">Projekte</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{
              width: location.pathname === '/projects' ? '50%' : '0%',
            }}
          />
        </li>
        <li>
          <Link to="/contact">Kontakt</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: location.pathname === '/contact' ? '50%' : '0%' }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  width: 100vw;
  max-width: 100vw;
  display: flex;
  position: fixed;
  background: rgba(0, 0, 0, 0.66);
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 5rem;
  z-index: 10;
  img {
    height: 5vh;
    cursor: pointer;
  }
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    width: 60%;
  }
  li {
    position: relative;
  }
  a {
    color: white;
    font-weight: 300;
  }

  /* .burger {
    color: white;
    font-size: 2rem;
    display: none;
    z-index: 10;
  } */

  .toggle {
    .line1 {
      transform: rotateZ(45deg) translateY(480%);
    }
    .line3 {
      transform: rotateZ(-45deg) translateY(-480%);
    }
    .line2 {
      opacity: 0;
    }
  }

  @media (max-width: 800px) {
    padding: 0rem 2.5rem;

    ul {
      transform: translateX(100%);
      flex-direction: column;
      justify-content: space-evenly;
      position: absolute;
      right: 0%;
      top: 0%;
      height: 100vh;
      background: black;
      opacity: 0.95;
      align-items: center;
      width: 80%;
      transition: 0.5s ease;
    }
    ul.active {
      transform: translateX(0%);
      transition: 0.5s ease;
    }
    .burger {
      display: block;
    }
  }
`;

const Burger = styled.div`
  position: relative;
  display: block;
  cursor: pointer;
  z-index: 10;

  span {
    padding: 0.1rem 1.2rem;
    background: white;
    margin: 0.5rem 0rem;
    display: block;
    transition: all 0.5s ease;
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: ${Colors.primaryColor};
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 55%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;

export default Nav;

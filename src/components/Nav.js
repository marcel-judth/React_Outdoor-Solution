//styles
import styled from 'styled-components';
import { Colors } from '../styles/Colors';
//images
import logoImg from '../img/logo_outdoor_solution.png';
//router
import { Link, useLocation } from 'react-router-dom';
//animation
import { motion } from 'framer-motion';

const Nav = () => {
  const location = useLocation();
  return (
    <StyledNav>
      <img src={logoImg} alt="logo Outdoor Solution" />
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: location.pathname === '/' ? '60%' : '0%' }}
          />
        </li>
        <li>
          <Link to="/offers">Leistungen</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: location.pathname === '/offers' ? '60%' : '0%' }}
          />
        </li>
        <li>
          <Link to="/overview">Überblick</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{
              width: location.pathname === '/overview' ? '60%' : '0%',
            }}
          />
        </li>
        <li>
          <Link to="/projects">Projekte</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{
              width: location.pathname === '/projects' ? '60%' : '0%',
            }}
          />
        </li>
        <li>
          <Link to="/contact">Kontakt</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: location.pathname === '/contact' ? '60%' : '0%' }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  width: 100vw;
  display: flex;
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 5rem;
  z-index: 10;
  img {
    height: 5vh;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 5rem;
    position: relative;
  }
  a {
    color: white;
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #00652f;
  width: 0%;
  position: absolute;
  bottom: -60%;
  left: 50%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;

export default Nav;

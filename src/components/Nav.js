//styles
import styled from "styled-components";
import { Colors } from "../styles/Colors";
//images
import logoImg from "../img/logo_outdoor_solution.png";
//router
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

//animation
import { motion } from "framer-motion";
import { useState } from "react";

const Nav = () => {
  const location = useLocation();
  const [navStatus, setNavStatus] = useState(false);

  return (
    <StyledNav>
      <Link to="/">
        <img src={logoImg} alt="logo Outdoor Solution" />
      </Link>

      <Burger
        className={`burger ${navStatus ? "toggle" : ""}`}
        onClick={() => setNavStatus(!navStatus)}
      >
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </Burger>

      <ul className={`${navStatus ? "active" : ""}`}>
        <li onClick={() => setNavStatus(!navStatus)}>
          <Link to="/">Home</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: location.pathname === "/" ? "100%" : "0%" }}
          />
        </li>
        <li onClick={() => setNavStatus(!navStatus)}>
          <Link to="/aboutus">Über uns</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{
              width: location.pathname === "/aboutus" ? "100%" : "0%",
            }}
          />
        </li>
        <li onClick={() => setNavStatus(!navStatus)}>
          <Link to="/products">Produkte</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{
              width: location.pathname === "/products" ? "100%" : "0%",
            }}
          />
        </li>
        <li onClick={() => setNavStatus(!navStatus)}>
          <Link to="/projects">Projekte</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{
              width: location.pathname === "/projects" ? "100%" : "0%",
            }}
          />
        </li>
        <li onClick={() => setNavStatus(!navStatus)}>
          <Link to="/#contact">Kontakt</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{
              width: location.pathname === "#contact" ? "100%" : "0%",
            }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 5rem;
  height: 10vh;
  max-height: auto;
  max-width: 100vw;
  width: 100%;
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
    min-height: 2rem;
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
  display: none;
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
  bottom: -70%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;

export default Nav;

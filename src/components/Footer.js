import React from "react";
import styled from "styled-components";
import { Colors } from "../styles/Colors";
import logo from "../img/logo_outdoor_solution.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <CustomFooter>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1369.648830556576!2d13.87505710061962!3d46.64063589313596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47708055371c03cd%3A0x17cd60b5ba54aade!2sMillst%C3%A4tter%20Str.%2052%2C%209523%20Villach!5e0!3m2!1sen!2sat!4v1613837143439!5m2!1sen!2sat"
          loading="lazy"
        ></iframe>
        <div className="footer-text">
          <h4>Outdoor Solution</h4>
          <p>Daniel Wedam</p>
          <p>Millstätter Straße 52</p>
          <p>9523 Villach, AT</p>
          <br />
          <p>Mo-Fr 09:00-17:00</p>
          <div className="footer-contact">
            <label>Büro:</label>
            <a href="tel:+436607398100">+43 660 739 81 00</a>
          </div>
          <div className="footer-contact">
            <label>Mobil:</label>
            <a href="tel:+436607398446">+43 660 739 84 46</a>
          </div>
          <a href="mailto:office@outdoorsolution.at">
            office@outdoorsolution.at
          </a>
        </div>

        <FooterPrivacy>
          <Link to="/Terms">Rechtliches</Link>
          <p>&copy; Outdoor Solution {new Date().getFullYear()}</p>
        </FooterPrivacy>

        <LogoFooter>
          <img src={logo} alt="" />
        </LogoFooter>

        <FooterSocialMediaIcons>
          <a
            className="social-media-footer"
            href="https://www.facebook.com/outdoorsolution.at"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            className="social-media-footer"
            href="https://www.facebook.com/outdoorsolution.at"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            className="social-media-footer"
            href="https://www.youtube.com/channel/UC1oXd9VKuHJnw-eXBoQpzhQ"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </FooterSocialMediaIcons>
      </CustomFooter>
    </div>
  );
}

const FooterSocialMediaIcons = styled.div`
  color: white;
  position: absolute;
  bottom: 0;
  right: 5%;
  padding: 0.5rem 0rem;
  display: flex;
  justify-content: space-between;
  width: 20vw;

  i {
    transition: 0.75s ease;
    font-size: 2rem;
    &:hover {
      transform: scale(1.1);
      transition: 0.75s ease;
    }
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

const LogoFooter = styled.div`
  position: absolute;
  right: 5%;
  top: 50%;

  transform: translateY(-50%);
  img {
    width: 30vw;
    max-width: 20rem;
  }
`;

const CustomFooter = styled.div`
  position: relative;
  background: ${Colors.footerColor};
  min-height: 40vh;
  max-height: auto;
  max-width: 100vw;
  display: flex;
  align-items: center;
  padding: 2.5rem 0rem;
  h4 {
    color: white;
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
  a {
    display: block;
    font-size: 1rem;
    color: white;
    font-weight: 300;
    margin: 0.2rem;
    &:hover {
      text-decoration: underline;
    }
  }
  label {
    display: block;
    font-size: 1rem;
    color: white;
    font-weight: 300;
    margin: 0.2rem;
  }
  p {
    color: white;
    font-size: 1rem;
    font-weight: 300;
    margin: 0.2rem;
  }
  iframe {
    border: none;
    margin-left: 5rem;
    margin-right: 3rem;
    height: 35vh;
    width: 35vh;
  }

  .footer-contact {
    display: flex;
  }

  @media (max-width: 1100px) {
    iframe {
      display: none;
    }
    .footer-text {
      margin-left: 5rem;
    }
  }
  @media (max-width: 800px) {
    .footer-text {
      margin-left: 2.5rem;
    }
  }
`;

const FooterPrivacy = styled.div`
  position: absolute;
  bottom: 0%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  a {
    color: white;
    font-size: 0.8rem;
    margin-right: 1rem;
    opacity: 0.5;
  }
  p {
    color: white;
    font-size: 0.8rem;
    opacity: 0.5;
  }
`;

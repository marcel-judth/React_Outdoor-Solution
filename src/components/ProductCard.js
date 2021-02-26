import React from 'react';
import styled from 'styled-components';
import { Colors } from '../styles/Colors';

const ProductCard = ({ image, title, price, options, link }) => {
  return (
    <Card>
      <img src={image} alt="product image" />
      <h3>{title}</h3>
      <h4>{price}</h4>
      <a href="/">mehr Infos</a>
      <select name="" id="">
        <option value="5liter">5 Liter</option>
      </select>
      <button>Bestellen</button>
    </Card>
  );
};

const Card = styled.div`
  -webkit-box-shadow: 0px 9px 49px -13px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 9px 49px -13px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 9px 49px -13px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0rem;
  justify-content: space-around;
  background: white;
  min-width: 20rem;
  height: 60vh;
  min-height: 30rem;
  margin-right: 2rem;
  img {
    border-radius: 50%;
    height: 20vh;
    min-height: 10rem;
  }

  h4 {
    font-size: 1.7rem;
  }

  a {
    text-decoration: underline;
    opacity: 0.7;
    font-size: 1rem;
  }

  button {
    border: none;
    background: ${Colors.primaryColor};
    color: white;
    padding: 0.5rem 3rem;
    font-size: 1.2rem;
    transition: 0.5s ease;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      transition: 0.5s ease;
    }
  }

  select {
    padding: 0.5rem 2rem;
    font-size: 1rem;
  }

  @media (max-width: 1000px) {
    h4 {
      font-size: 1rem;
    }
    h3 {
      font-size: 1.2rem;
    }
    img {
      height: 15vh;
    }
    a {
      font-size: 0.8rem;
    }
    select {
      padding: 0.2rem 1rem;
    }

    button {
      padding: 0.5rem 2rem;
      font-size: 1rem;
    }
  }
`;

export default ProductCard;

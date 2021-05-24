import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const ProductsList = ({ ProductsData }) => {
  return (
    <ProductsWrapper>
      {ProductsData.map((card, index) => {
        return (
          <ProductCard
            image={card.image}
            title={card.title}
            price={card.price}
            infoText={card.infoText}
            options={card.options}
            link={card.link}
            key={index}
          />
        );
      })}
    </ProductsWrapper>
  );
};

const ProductsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  height: auto;
  width: 100%;
  min-height: 35rem;
  padding: 1.5rem 5rem 5rem 5rem;
  overflow: scroll;
  @media (max-width: 700px) {
    padding: 1.5rem 2.5rem 2.5rem 2.5rem;
  }
`;

export default ProductsList;

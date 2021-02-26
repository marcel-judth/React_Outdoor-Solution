import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import { ProductsData } from './ProductsData';
const ProductsList = () => {
  return (
    <ProductsWrapper>
      {ProductsData.map((card, index) => {
        return (
          <ProductCard
            image={card.image}
            title={card.title}
            price={card.price}
            options={card.options}
            key={index}
          />
        );
      })}
    </ProductsWrapper>
  );
};

const ProductsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  height: 70vh;
  min-height: 40rem;
  padding: 1.5rem 5rem 5rem 5rem;
  overflow: scroll;
  @media (max-width: 700px) {
    padding: 1.5rem 2.5rem 2.5rem 2.5rem;
  }
`;

export default ProductsList;

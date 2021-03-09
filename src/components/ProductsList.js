import React from 'react';
import styled from 'styled-components';
import { Colors } from '../styles/Colors';
import ProductCard from './ProductCard';
import { ProductsData } from './ProductsData';
const ProductsList = () => {
  return (
    // <ComingSoon>
    //   <div className="icon-wrapper">
    //     <i class="far fa-clock"></i>
    //   </div>
    //   <h1>Coming soon...</h1>
    // </ComingSoon>
    <ProductsWrapper>
      {ProductsData.map((card, index) => {
        return (
          <ProductCard
            image={card.image}
            title={card.title}
            price={card.price}
            infoText={card.infoText}
            options={card.options}
            key={index}
          />
        );
      })}
    </ProductsWrapper>
  );
};

// const ComingSoon = styled.div`
//   height: 70vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   .icon-wrapper {
//     background: ${Colors.primaryColor};
//     width: 6rem;
//     height: 6rem;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border-radius: 50%;
//   }
//   i {
//     font-size: 4rem;
//     color: white;
//   }
// `;

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

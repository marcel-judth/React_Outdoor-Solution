import React, { useState } from 'react';
import styled from 'styled-components';
import ProductsList from '../components/ProductsList';
import { Colors } from '../styles/Colors';
import { ProductsData } from '../components/ProductsData';

function Products() {
  const filters = [...new Set(ProductsData.map((item) => item.category))];
  filters.unshift('Alle');
  const [products, setproducts] = useState(ProductsData);

  const selectionChanged = (e) => {
    console.log(e.target.value);

    if (e.target.value === 'Alle') setproducts(ProductsData);
    else setproducts(ProductsData.filter((p) => p.category === e.target.value));
  };

  return (
    <ProductsSection>
      <ProductsHeader>
        <h2>Unsere Produkte</h2>
        <select onChange={selectionChanged} name="filterBox" id="filterBox">
          {filters.map((option) => {
            return <option value={option}>{option}</option>;
          })}
        </select>
      </ProductsHeader>
      <ProductsList ProductsData={products} />
    </ProductsSection>
  );
}

const ProductsSection = styled.div`
  padding-top: 15vh;

  h1 {
    font-size: 2.5rem;
    color: ${Colors.primaryColor};
    font-weight: 500;
    margin-top: 2rem;
    transition: all 0.5s ease;
    transform: scale(1.1);
  }
`;

const ProductsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10vw;
  margin-bottom: 2rem;
  select {
    padding: 0.7rem 3rem;
  }
  padding-left: 5rem;
  @media (max-width: 1000px) {
    h2 {
      font-size: 2rem;
    }
    select {
      padding: 0.5rem 1rem;
    }
  }
  @media (max-width: 700px) {
    padding-right: 5vw;
    padding-left: 2.5rem;
  }
`;

export default Products;

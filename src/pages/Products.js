import React, { useState } from 'react';
import styled from 'styled-components';
import ProductsList from '../components/ProductsList';
import { Colors } from '../styles/Colors';
import { ProductsData } from '../components/ProductsData';
import ScrollTop from '../components/ScrollTop';
import Footer from '../components/Footer';

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
          {filters.map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </ProductsHeader>
      <p className="products-text">
        Ab sofort können Sie hier unsere Produkte reservieren und anschließend
        in unserem Büro abholen. (Abholbereit in 2 Tagen, Bezahlung: Bar oder
        auf Rechnung)
      </p>
      <ProductsList ProductsData={products} />
      <ScrollTop />
      <Footer />
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
  .products-text {
    margin-left: 5rem;
  }
  @media (max-width: 700px) {
    .products-text {
      margin-left: 2.5rem;
      margin-right: 2.5rem;
      text-align: justify;
      font-size: 0.8rem;
    }
  }
`;

const ProductsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10vw;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  select {
    padding: 0.7rem 3rem;
    margin: 1rem 0rem;
  }
  padding-left: 5rem;
  @media (max-width: 1000px) {
    h2 {
      font-size: 2rem;
    }
    select {
      padding: 0.5rem 1rem;
    }

    margin-bottom: 0.5rem;
  }
  @media (max-width: 700px) {
    padding-right: 5vw;
    padding-left: 2.5rem;
  }
`;

export default Products;

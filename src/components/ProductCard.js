import React, { useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../styles/Colors';
import { fade } from '../Animation';

const ProductCard = ({ image, title, price, infoText, options, link }) => {
  const [infoOpen, setInfoOpen] = useState(false);
  const [buyOpen, setbuyOpen] = useState(false);

  const openModal = () => {
    setInfoOpen(!infoOpen);
  };

  const openBuy = () => {
    setbuyOpen(!buyOpen);
  };

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        console.log('SUCCESS');
      } else {
        console.log('ERROR', xhr);
      }
    };
    xhr.send(data);
    openBuy();
  };

  return (
    <Card>
      <img src={image} loading="lazy" alt="product image" />
      <h3>{title}</h3>
      <h4>{price}</h4>
      <a onClick={openModal}>mehr Infos</a>
      <select name="" id="">
        {options.map((option) => {
          return <option value={option}>{option}</option>;
        })}
        <option value="5liter">5 Liter</option>
      </select>
      <button onClick={openBuy}>Bestellen</button>
      <ProductDetails className={'details-modal ' + (infoOpen ? 'active' : '')}>
        <img src={image} alt="product image" />
        <h3>{title}</h3>
        <p>{infoText}</p>
        <button onClick={openModal}>Schließen</button>
      </ProductDetails>

      <BuyProduct className={'buy-modal ' + (buyOpen ? 'active' : '')}>
        <h3>{title}</h3>
        <form
          onSubmit={submitForm}
          action="https://formspree.io/f/mzbklnpk"
          method="POST"
        >
          <div className="input-wrapper">
            <label>Name</label>

            <input
              id="txtName"
              placeholder="Name"
              type="text"
              name="Name"
              onKeyPress={(e) => {
                e.key === 'Enter' && e.preventDefault();
              }}
              required
            />
          </div>
          <div className="input-wrapper">
            <label>Telefonnummer</label>

            <input
              id="txtContact"
              name="Kontakt"
              type="tel"
              placeholder="Tel."
              onKeyPress={(e) => {
                e.key === 'Enter' && e.preventDefault();
              }}
              required
            />
          </div>
          <div className="input-wrapper">
            <label>Email (für die Bestätigung)</label>

            <input
              id="txtName"
              placeholder="Email"
              type="email"
              name="Email"
              onKeyPress={(e) => {
                e.key === 'Enter' && e.preventDefault();
              }}
              required
            />
          </div>
          <input type="hidden" name="Ware" value={title} />
          <div className="input-wrapper">
            <label>Menge</label>

            <select name="Menge" id="buy-amount">
              <option value="5liter">5 Liter</option>
              <option value="5liter">8 Liter</option>
            </select>
          </div>
          <div className="input-wrapper">
            <label>Uhrzeit Abholung</label>
            <input type="datetime-local" name="Abholdatum" required />
          </div>
          <button type="submit">Bestellen</button>
        </form>

        <div className="buy-buttons">
          <button className="buy-close-btn" onClick={openBuy}>
            Schließen
          </button>
          <button className="buy-call-btn" onClick={openBuy}>
            Rückruf
          </button>
        </div>
      </BuyProduct>

      <BlurryBackground className={infoOpen || buyOpen ? 'active' : ''} />
    </Card>
  );
};

const BuyProduct = styled.div`
  -webkit-box-shadow: 10px 10px 44px -16px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 44px -16px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 44px -16px rgba(0, 0, 0, 0.75);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 30rem;
  height: 80%;
  min-height: 40rem;
  max-height: 40rem;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 2rem 2rem;
  transition: all 0.5s ease-in-out;
  z-index: 1;
  opacity: 0;
  pointer-events: none;

  h3 {
    font-size: 2rem !important;
    font-weight: 500;
  }
  p {
    text-align: justify;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 80%;
    width: 70%;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    label {
      font-size: 0.8rem;
      margin-bottom: 0.2rem;
    }

    input {
      border: none;
      border: 0.1rem solid ${Colors.primaryColor};
      padding: 0.5rem 0.8rem;
      font-size: 1rem;
      font-family: 'Montserrat', sans-serif;
    }

    select {
      padding: 0.5rem 0.8rem;
      font-size: 1rem;
    }
  }

  .buy-close-btn {
    background: none;
    border: 0.2rem solid #7e4a4a;
    color: #7e4a4a;
    margin-right: 1rem;
    padding: 0.3rem 1.5rem;
  }

  .buy-call-btn {
    background: none;
    border: 0.2rem solid ${Colors.primaryColor};
    color: ${Colors.primaryColor};
    padding: 0.2rem 1.5rem;
  }

  @media (max-height: 600px) {
    transform: translate(-50%, 0%);
  }
`;

const BlurryBackground = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 0.9;
  backdrop-filter: blur(2px);
  pointer-events: none;
  opacity: 0;
  left: 0;
  top: 0;
`;

const ProductDetails = styled.div`
  -webkit-box-shadow: 10px 10px 44px -16px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 44px -16px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 44px -16px rgba(0, 0, 0, 0.75);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 35rem;
  height: auto;
  max-height: auto;
  min-height: 25rem;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 1rem 2rem;
  transition: all 0.5s ease-in-out;
  z-index: 1;
  opacity: 0;
  pointer-events: none;

  p {
    text-align: justify;
    margin: 2rem 0rem;
  }

  @media (max-height: 600px) {
    transform: translate(-50%, 0%);
  }
`;

const Card = styled.div`
  -webkit-box-shadow: 10px 10px 44px -16px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 44px -16px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 44px -16px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0rem;
  justify-content: space-around;
  background: white;
  min-width: 22rem;
  height: auto;
  min-height: auto;
  margin-right: 4rem;
  img {
    /* border-radius: 50%; */
    height: 20vh;
    min-height: 10rem;
  }

  h3 {
    text-align: center;
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.7rem;
  }

  a {
    text-decoration: underline;
    opacity: 0.7;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      text-decoration: none;
    }
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

  .active {
    opacity: 1;
    pointer-events: all;
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

import React from 'react';
import styled from 'styled-components';
import { Colors } from '../styles/Colors';

export default function ContactForm() {
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
        const button = document.querySelector('.btn-contact');
        button.disabled = true;
        button.innerText = 'Vielen Dank!';
        button.classList.add('btn-sent');
        console.log('SUCCESS');
      } else {
        console.log('ERROR', xhr);
      }
    };
    xhr.send(data);
  };
  return (
    <ContactContainer>
      <form
        onSubmit={submitForm}
        action="https://formspree.io/f/mzbklnpk"
        method="POST"
      >
        <h3>Schreiben Sie uns</h3>
        <input type="hidden" name="Typ" value="Neue Anfrage" />
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
        <input
          id="txtContact"
          name="Kontakt"
          type="text"
          placeholder="Tel. oder Email"
          onKeyPress={(e) => {
            e.key === 'Enter' && e.preventDefault();
          }}
          required
        />
        <input
          id="txtPLZ"
          name="PLZ"
          type="text"
          placeholder="PLZ"
          onKeyPress={(e) => {
            e.key === 'Enter' && e.preventDefault();
          }}
        />
        <textarea
          id="txtMessage"
          name="Nachricht"
          placeholder="Nachricht"
          onKeyPress={(e) => {
            e.key === 'Enter' && e.preventDefault();
          }}
        />
        <button className="btn-contact" type="submit">
          Senden
        </button>
      </form>
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
  form {
    -webkit-box-shadow: 10px 10px 37px -16px rgba(0, 0, 0, 0.82);
    -moz-box-shadow: 10px 10px 37px -16px rgba(0, 0, 0, 0.82);
    box-shadow: 10px 10px 37px -16px rgba(0, 0, 0, 0.82);
    position: absolute;
    right: 10%;
    top: 25%;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 25%;
    min-width: 25rem;
    min-height: 25rem;
    height: 50%;
    input {
      border: none;
      border: 0.1rem solid ${Colors.primaryColor};
      height: 2rem;
      width: 70%;
      padding: 0rem 1rem;
    }

    textarea {
      width: 70%;
      height: 20%;
      font-family: 'montserrat', sans-serif;
      padding: 0.5rem 1rem;
      border: none;
      border: 0.1rem solid ${Colors.primaryColor};
    }

    button {
      border: none;
      background: ${Colors.primaryColor};
      padding: 0.7rem 0rem;
      width: 70%;
      color: white;
      cursor: pointer;
      transition: 1s ease;
      &:hover {
        transform: scale(1.1);
        transition: 1s ease;
      }
    }

    .btn-sent {
      border: none;
      border: 0.1rem solid grey;
      background: unset;
      color: grey;
      background: unset;

      &:hover {
        transform: scale(1);
        transition: 1s ease;
      }
    }

    @media (max-width: 1150px) {
      right: 3%;
    }
    @media (max-width: 800px) {
      position: relative;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 3rem;
    }
  }
`;

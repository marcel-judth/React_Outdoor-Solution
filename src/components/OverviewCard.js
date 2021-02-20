import styled from 'styled-components';
import { Colors } from '../styles/Colors';

const OverviewCard = ({ image, title, text, link }) => {
  return (
    <Card>
      <img src={image} alt="" />
      <div className="card-line"></div>
      <h3>{title}</h3>
      <p>{text}</p>
      <button>
        <a href={link}>mehr</a>
      </button>
    </Card>
  );
};

const Card = styled.div`
  -webkit-box-shadow: 10px 10px 37px -16px rgba(0, 0, 0, 0.82);
  -moz-box-shadow: 10px 10px 37px -16px rgba(0, 0, 0, 0.82);
  box-shadow: 10px 10px 37px -16px rgba(0, 0, 0, 0.82);
  width: 20vw;
  min-width: 20rem;
  height: 65vh;
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.4rem;
  margin: 0rem 1rem;
  cursor: pointer;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.02);
    transition: 0.5s ease;
  }

  img {
    width: 100%;
    height: 40%;
    object-fit: cover;
  }

  .card-line {
    height: 0.2rem;
    width: 20%;
    background: ${Colors.primaryColor};
    opacity: 0.8;
  }

  p {
    padding: 0rem 2rem;
    text-align: justify;
    margin-bottom: 3vh;
  }
  button {
    margin-bottom: 2rem;
    border: none;
    background: ${Colors.primaryColor};
    padding: 0.4rem 2rem;
    transition: 0.75s ease;
    border-radius: 0.2rem;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      transition: 0.75s ease;
    }
  }

  a {
    color: white;
    font-weight: 300;
    font-size: 1rem;
  }
`;

export default OverviewCard;

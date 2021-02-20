import styled from 'styled-components';
import OverviewCard from './OverviewCard';
import { OverviewData } from './OverviewData';

const OverviewSection = () => {
  return (
    <OverviewSect>
      <h2>Überblick</h2>
      <OvervieCardsWrapper>
        {OverviewData.map((card, index) => {
          return (
            <OverviewCard
              image={card.image}
              title={card.title}
              text={card.text}
              link={card.link}
              key={index}
            />
          );
        })}
      </OvervieCardsWrapper>
    </OverviewSect>
  );
};

const OverviewSect = styled.div`
  background: white;
  height: auto;
  min-height: 100vh;
  padding-top: 15rem;
  h2 {
    margin-bottom: 5vh;
    margin-left: 5rem;
  }

  @media (max-width: 1000px) {
    h2 {
      margin-left: 2.5rem;
    }
  }
`;

const OvervieCardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: auto;
  overflow-x: auto;
  margin-bottom: 1rem;
  padding-left: 5rem;
  @media (max-width: 1000px) {
    padding: 1rem 2.5rem;
  }
`;

export default OverviewSection;

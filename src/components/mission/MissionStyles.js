import styled from "styled-components";

export const MissionContainer = styled.section`
  height: 70vh;
  width: 100vw;
  background-color: var(--main-color-navy);
  border-top: 1px dotted var(--main-color-beige);
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

  @media (max-width: 768px) {
    height: auto;
    border: none;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

export const MissionTitle = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-column-end: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 80px;
  h3 {
    color: white;
    font-family: var(--hero-title);
    text-align: center;
    letter-spacing: 6px;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    grid-row-start: 1;
    grid-column-start: 1;
    grid-row-end: 2;
    grid-column-end: 6;
    margin: 0;
    padding: 0 20px;

    h3 {
      font-size: 20px;
      letter-spacing: 5px;
    }
  }
`;

export const MissionText = styled.div`
  grid-row-start: 2;
  grid-column-start: 1;
  grid-row-end: 5;
  grid-column-end: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 80px;
  p {
    color: var(--main-color-beige);
  }
  h4 {
    text-align: center;
    color: white;
    font-weight: bolder;
    font-family: var(--hero-title);
    font-size: 25px;
  }

  @media (max-width: 768px) {
    grid-row-start: 2;
    grid-column-start: 1;
    grid-row-end: 4;
    grid-column-end: 6;
    margin: 0;
    padding: 0 20px;

    h4 {
      text-align: center;
      color: white;
      font-weight: bolder;
      font-family: var(--hero-title);
      font-size: 20px;
    }

    p {
      line-height: 22px;
      text-align: center;
    }
  }
`;

export const MissionTextAttention = styled.span`
  font-weight: bold;
  color: red;
`;

export const MissionImageContainer = styled.div`
  grid-row-start: 1;
  grid-column-start: 4;
  grid-row-end: 5;
  grid-column-end: 7;
  margin: 50px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MissionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

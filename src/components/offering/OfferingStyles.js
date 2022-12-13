import styled from "styled-components";

export const OfferingContainer = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: var(--main-color-beige);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 6fr;

  @media (max-width: 768px) {
    height: auto;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

export const OfferingTitle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  h2 {
    text-transform: uppercase;
    letter-spacing: 15px;
    font-family: VacationsInParadise;
    font-size: 30px;
  }

  @media (max-width: 768px) {
    grid-row-start: 1;
    grid-column-start: 1;
    grid-row-end: 2;
    grid-column-end: 6;
    border: none;

    h2 {
      text-align: center;
      margin: 0;
    }
  }
`;
export const OfferingDisplayWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    grid-row-start: 2;
    grid-column-start: 1;
    grid-row-end: 6;
    grid-column-end: 6;
  }
`;
export const OfferingDisplayContainer = styled.div`
  width: 80%;
  height: 70%;
  background-color: var(--main-color-navy);
  border-radius: 10px;
  margin-top: 130px;
  display: grid;
  margin: 0;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    height: 170vh;
    margin: 0 0 50px 0;
    width: 80vw;
  }
`;

export const OfferingCard = styled.div`
  height: 90%;
  width: 90%;
  background-color: var(--secondary-color-offwhite);
  margin: 20px 20px 20px 20px;
  border-radius: 10px;
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  gid-template-columns: 1fr;

  @media (max-width: 768px) {
    margin: auto;
  }
`;

export const OfferingCardTitle = styled.h3`
  color: black;
  text-align: center;
  text-transform: uppercase;
  border-bottom: 1px solid black;
`;

export const OfferingCardList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
  li {
    list-style: none;
  }
`;
export const OfferingCardButton = styled.button`
  background-color: var(--main-color-navy);
  border: none;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
  a {
    color: var(--main-color-beige);
    text-decoration: none;
  }
`;

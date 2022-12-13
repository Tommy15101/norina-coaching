import styled from "styled-components";

export const AboutContainer = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: var(--main-color-beige);
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* MOBILE */
  @media (max-width: 768px) {
    grid-template-rows: 1fr 1fr auto;
    grid-template-columns: 1fr;
    height: auto;
  }
`;
export const GreetingContainer = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-column-end: 5;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 25px;
  /* MOBILE */
  @media (max-width: 768px) {
    grid-row-start: 1;
    grid-column-start: 1;
    grid-row-end: 2;
    grid-column-end: 2;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;
export const Greeting = styled.h3`
  font-weight: none;
  font-size: 40px;
  font-family: var(--page-title);
  letter-spacing: 10px;
  color: var(--main-color-navy);
  margin: 0;
  line-height: 50px;
`;
export const Intro = styled.p`
  font-size: 17px;
  margin: 35px 30px 0 30px;
  text-align: center;
  font-weight: 530;
  font-family: Apple Chancery;
  line-height: 30px;
  letter-spacing: 3px;
`;

export const LeftSide = styled.div`
  height: auto;
  width: 90%;
  margin: 80px 80px 80px 80px;
  grid-row-start: 2;
  grid-column-start: 1;
  grid-row-end: 3;
  grid-column-end: 2;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 2px solid var(--main-color-navy);
  /* MOBILE */
  @media (max-width: 768px) {
    grid-row-start: 2;
    grid-column-start: 1;
    grid-row-end: 3;
    grid-column-end: 2;
    border: none;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

export const AboutImg = styled.img`
  height: 330px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 200px;
  border-top-right-radius: 200px;
  object-fit: contain;
  @media (max-width: 768px) {
    border-radius: 70%;
    height: 350px;
  }
`;

export const RoseImg = styled.img`
  height: 330px;
  z-index: 1;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const RightSide = styled.div`
  height: 90%;
  width: 90%;
  grid-row-start: 2;
  grid-column-start: 2;
  grid-row-end: 5;
  grid-column-end: 5;
  padding-top: 15px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    grid-row-start: 3;
    grid-column-start: 1;
    grid-row-end: 4;
    grid-column-end: 2;

    width: 100%;
    padding: 0;
  }
`;

export const RightSideBottom = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 20px 0 20px;
  line-height: 23px;
  @media (max-width: 768px) {
    margin: 20px 30px 0 30px;
  }
`;
export const Text = styled.p`
  font-size: 16px;
  color: var(--main-color-navy);
  line-height: 24px;
  padding: 20px;
`;

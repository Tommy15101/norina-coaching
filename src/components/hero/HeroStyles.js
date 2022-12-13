import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 230px;
  width: 100vw;
  background-color: var(--main-color-navy);
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding-bottom: 35px;
  }
`;
export const HeroElement = styled.div`
  height: 80%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const HeroTitle = styled.h2`
  font-size: 40px;
  color: var(--main-color-beige);
  font-family: var(--hero-title);

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;
export const HeroIcon = styled.span`
  color: white;
  font-size: 40px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

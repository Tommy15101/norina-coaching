import styled from "styled-components";

export const HeroTwoContainer = styled.section`
  height: 30vh;
  width: 100vw;
  background-color: var(--main-color-navy);
  display: grid;
  grid-temaplate-rows: 1fr 3fr;
  grid-temaplate-columns: 1fr;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const HeroTopContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: center;
`;
export const HeroTwoHeading = styled.h2`
  color: white;
  font-size: 40px;
  font-family: var(--hero-title);
  margin: 0;
`;
export const HeroBottomContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
`;
export const HeroTwoText = styled.p`
  color: var(--main-color-beige);
  font-family: VacationsInParadise;
  letter-spacing: 10px;
  text-align: center;
`;

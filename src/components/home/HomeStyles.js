import styled from "styled-components";

export const HomeWrapper = styled.main`
  height: auto;
`;

export const HomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)),
    url(./background.jpg);
  background-size: cover;
  background-position: center center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: -110px;
  z-index: -1;
  font-size: 25px;
`;

export const HomeWelcomeMessageContainer = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  h3 {
    color: var(--main-color-beige);
    letter-spacing: 20px;
    line-height: 55px;
    text-align: center;
    font-size: 45px;
    font-family: Apple Chancery;
  }
`;

export const CustomNavbar = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

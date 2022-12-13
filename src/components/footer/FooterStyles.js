import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100vw;
  height: 30vh;
  background-color: darkgrey;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr;
  h4 {
    text-align: center;
  }
`;

export const FooterLinksContainer = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 3;
  grid-column-end: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FooterLinks = styled.div`
  height: 80%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0;
    li {
      list-style-type: none;
      a {
        color: black;
        font-size: 30px;
      }
    }
  }
`;

export const FooterCopy = styled.div`
  grid-row-start: 3;
  grid-column-start: 1;
  grid-row-end: 4;
  grid-column-end: 2;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: red;
    padding: 0 7px;
  }

  a {
    font-weight: bold;
    text-decoration: none;
    padding: 0 7px 0 7px;
    color: black;
    transition: all 0.2s ease;
    &:hover {
      transform: scale(1.01);
      border-bottom: 1px solid black;
    }
  }
`;

import styled from "styled-components";
import { Link } from "react-scroll";

export const NavContainer = styled.nav`
  width: 100vw;
  height: ${(props) => (props.mobile ? "100vh" : "130px")};
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index; 100;
  @media (max-width: 768px) {
    background-color: var(--main-color-beige);
  }
`;

export const NavBranding = styled.div`
  width: 20%;
  height: 100%;
  display: ${(props) => (props.mobile ? "none" : "flex")};
  align-items: center;
  justify-content: end;
  font-size: 30px;
  letter-spacing: 2px;
  line-height: 50px;
  text-align: center;
  transform: rotateY(0deg) rotate(-11.25deg);
  font-family: var(--page-title);
  z-index; 100;
  margin-top: 100px;
  @media (max-width: 1125px) {
    font-size: 25px;
  }
  @media (max-width: 992px) {
    width: 30%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLinksContainer = styled.ul`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  li {
    text-transform: uppercase;
    list-style: none;
  }
  @media (max-width: 1125px) {
    font-size: 15px;
  }
  @media (max-width: 992px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 13px;
  z-index: -1;
`;
export const NavbarLinkBranding = styled(Link)`
  background-color: rgba(251, 232, 189, 0.5);
  padding: 10px;
  border-radius: 5px;
  color: var(--main-color-navy);
  text-decoration: none;
  font-size: 35px;
`;

export const ToggleMobileMenuButton = styled.button`
  color: black;
  background-color: transparent;
  border: none;
  font-size: 40px;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50px;
  right: 30px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavbarMobileContainer = styled.ul`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 70px 0 0 0;
  li {
    text-transform: uppercase;
    list-style: none;
    padding: 15px 100%;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileBranding = styled.a`
  color: black;
  font-family: Apple Chancery;
  font-size: 30px;
  position: absolute;
  top: 25px;
  text-align: center;
  @media (min-width: 768px) {
    display: none;
  }
`;
/* 
X-Small	None	<576px
Small	sm	≥576px
Medium	md	≥768px
Large	lg	≥992px
Extra large	xl	≥1200px
Extra extra large	xxl	≥1400px
*/

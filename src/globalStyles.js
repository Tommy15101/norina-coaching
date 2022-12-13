import { createGlobalStyle } from "styled-components";
import VeganStyle from "./fonts/VeganStylePersonalUse-5Y58.ttf";
import VacationsInParadise from "./fonts/VacationsInParadisePersonalUse-qwml.ttf";
import Bulgatti from "./fonts/Bulgatti-xgMV.ttf";

const GlobalStyle = createGlobalStyle`
  :root {
    --main-color-navy: #25363e;
    --main-color-beige: #fbe8bd;
    --secondary-color-offwhite: #f7f7e7;

    --page-title: VacationsInParadise;
    --hero-title: Apple Chancery;
  }

  html {
  scroll-behaviour: smooth; 
  }
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  @font-face {
    font-family: VeganStyle;
    src: url(${VeganStyle}) format('truetype');
  }
  @font-face {
    font-family: VacationsInParadise;
    src: url(${VacationsInParadise}) format('truetype');
  }
  @font-face {
    font-family: Bulgatti;
    src: url(${Bulgatti}) format('truetype');
  }
`;

export default GlobalStyle;

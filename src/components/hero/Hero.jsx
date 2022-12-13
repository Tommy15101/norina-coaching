import React from "react";
import { HeroContainer, HeroElement, HeroTitle, HeroIcon } from "./HeroStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandsPraying,
  faSun,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroElement>
        <HeroTitle>Yoga Teacher</HeroTitle>
        <HeroIcon>
          <FontAwesomeIcon icon={faHandsPraying} />
        </HeroIcon>
      </HeroElement>
      <HeroElement>
        <HeroTitle>Reiki Teacher</HeroTitle>
        <HeroIcon>
          <FontAwesomeIcon icon={faSun} />
        </HeroIcon>
      </HeroElement>
      <HeroElement>
        <HeroTitle>World Traveller</HeroTitle>
        <HeroIcon>
          <FontAwesomeIcon icon={faEarthAmericas} />
        </HeroIcon>
      </HeroElement>
    </HeroContainer>
  );
};

export default Hero;

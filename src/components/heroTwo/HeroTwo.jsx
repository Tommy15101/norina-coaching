import React from "react";
import {
  HeroTwoContainer,
  HeroTopContainer,
  HeroTwoHeading,
  HeroBottomContainer,
  HeroTwoText,
} from "./HeroTwoStyles";

const HeroTwo = () => {
  return (
    <HeroTwoContainer id="mission">
      <HeroTopContainer>
        <HeroTwoHeading>
          What I Have Learnt Travelling Over Fifty Countries
        </HeroTwoHeading>
      </HeroTopContainer>
      <HeroBottomContainer>
        <HeroTwoText>
          Through experiencing all these cultures, different belief systems{" "}
          <br /> and perspectives, I was reaffirmed that there is something that
          connects us all
        </HeroTwoText>
      </HeroBottomContainer>
    </HeroTwoContainer>
  );
};

export default HeroTwo;

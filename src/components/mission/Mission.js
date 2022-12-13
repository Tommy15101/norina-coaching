import React from "react";
import {
  MissionContainer,
  MissionTitle,
  MissionText,
  MissionTextAttention,
  MissionImageContainer,
  MissionImage,
} from "./MissionStyles";

const Mission = () => {
  return (
    <MissionContainer>
      <MissionTitle>
        <h3>
          Do you experience confusion and overwhelm? I know that I did. And I
          also know why.
        </h3>
      </MissionTitle>
      <MissionText>
        <p>
          We are living in a would that tell us how we should and shouldn’t be,
          gives tips and advice, guides how to be successful and happy. It seems
          like there is only that one right path and you just have to step on
          it.
        </p>
        <MissionTextAttention>That is NOT true.</MissionTextAttention>
        <p>
          What is right for your neighbour is not automatically right for you.
          It is so much easier if there would be a recipe for happiness and the
          world pretends there is one. And we look into the world to find
          inspiration but more often than not it turns into confusion and a loss
          of the connection to yourself.
        </p>
        <h4>
          My mission is to guide you back to yourself and return to your innate
          inner knowing. Living from that place gives you an unshakable inner
          stability and a fulfilled life.
        </h4>
      </MissionText>
      <MissionImageContainer>
        <MissionImage src="Norina.png" />
      </MissionImageContainer>
    </MissionContainer>
  );
};

export default Mission;

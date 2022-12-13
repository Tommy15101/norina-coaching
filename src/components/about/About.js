import React from "react";
import {
  AboutContainer,
  AboutImg,
  RoseImg,
  GreetingContainer,
  Greeting,
  Intro,
  LeftSide,
  RightSide,
  RightSideTop,
  RightSideBottom,
  Text,
} from "./AboutStyles";

const About = () => {
  return (
    <AboutContainer id="about">
      <GreetingContainer>
        <Greeting>Nice to meet you!</Greeting>
        <Intro>
          My life’s journey is about reclaiming freedom and joy. That means I
          was born in an environment where that was not present.
          <br /> After leaving my dysfunctional family in my mid teens I have
          been carving my own path.
        </Intro>
      </GreetingContainer>

      <LeftSide>
        <AboutImg src="./Norina.png" />
        <RoseImg src="./gold-rose.png" />
      </LeftSide>

      <RightSide>
        <RightSideBottom>
          <Text>
            In my early twenties I discovered yoga which gave my inner seeking a
            shape and form. I was lucky enough to find teachers that helped me
            to understand the deeper layers of Yoga and its connection to
            Ayurveda, so I eventually started teaching yoga especially according
            to Ayurvedic principles. <br /> <br />
            My next step was helping people with Reiki energy healing and
            getting a teaching degree in order to dive deeper into the science
            of learning and real change. Since 2015, I’ve been teaching
            internationally and travelled 50+ countries. Through experiencing
            all these cultures, different belief systems and perspectives, I was
            reaffirmed that there is something that connects us all. <br />{" "}
            <br />I spent time at a monastery, met spiritual leaders like Mooji
            or the Dalai Lama and expanded my horizon through plant medicine.
            All of my life experience speaks one clear message. The answers are
            within. Transformation comes from inside out, not outside in.
            Therefore, my mission is not to be anybody's guru, but to be the
            helping hand to find that truth within yourself.
          </Text>
        </RightSideBottom>
      </RightSide>
    </AboutContainer>
  );
};

export default About;

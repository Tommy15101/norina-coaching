import React from "react";
import {
  OfferingCard,
  OfferingContainer,
  OfferingTitle,
  OfferingDisplayContainer,
  OfferingDisplayWrapper,
  OfferingCardTitle,
  OfferingCardList,
  OfferingCardButton,
} from "./OfferingStyles";

const Offering = () => {
  return (
    <OfferingContainer id="offering">
      <OfferingTitle>
        <h2>If you feel the calling</h2>
      </OfferingTitle>
      <OfferingDisplayWrapper>
        <OfferingDisplayContainer>
          <OfferingCard>
            <OfferingCardTitle>1:1 Coaching</OfferingCardTitle>
            <OfferingCardList>
              <li>Stressed / Confused?</li>
              <li>Unsure where to start?</li>
              <li>Let's walk the path of transformation</li>
              <li>Discover your inner knowing</li>
            </OfferingCardList>
            <OfferingCardButton>
              <a
                href="https://calendly.com/norinabramke/30min?month=2022-11"
                target="_blank"
                rel="noreferrer"
              >
                Book A Call
              </a>
            </OfferingCardButton>
          </OfferingCard>
          <OfferingCard>
            <OfferingCardTitle>Tools Of Yoga</OfferingCardTitle>
            <OfferingCardList>
              <li>Asana ( postures )</li>
              <li>Pranayama ( breath )</li>
              <li>Meditation</li>
              <li>Lifestyle</li>
            </OfferingCardList>
            <OfferingCardButton>
              <a
                href="https://calendly.com/norinabramke/30min?month=2022-11"
                target="_blank"
                rel="noreferrer"
              >
                Book A Call
              </a>
            </OfferingCardButton>
          </OfferingCard>
          <OfferingCard>
            <OfferingCardTitle>Ayurvedic Yoga Course</OfferingCardTitle>
            <OfferingCardList>
              <li>Ayurvedic Principles</li>
              <li>Discover Ayurvedic Tendancies</li>
              <li>Create Balance in your being</li>
              <li>Lifetime Access & Growth</li>
            </OfferingCardList>
            <OfferingCardButton>Join The Waitlist</OfferingCardButton>
          </OfferingCard>
        </OfferingDisplayContainer>
      </OfferingDisplayWrapper>
    </OfferingContainer>
  );
};

export default Offering;

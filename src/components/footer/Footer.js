import React from "react";
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinks,
  FooterCopy,
} from "./FooterStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinks>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/nori.the.light/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/norina-bramke-49a79a101/?originalSubdomain=id"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>{" "}
            </li>
            <li>
              <a
                href="mailto:norina.bramke@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
          </ul>
        </FooterLinks>
      </FooterLinksContainer>
      <FooterCopy>
        Made with{" "}
        <span>
          <FontAwesomeIcon icon={faHeart} />
        </span>{" "}
        by{" "}
        <a
          href="https://tommy-atkins.on.fleek.co/"
          target="_blank"
          rel="noreferrer"
        >
          Tommy Atkins
        </a>
        &copy;
      </FooterCopy>
    </FooterContainer>
  );
};

export default Footer;

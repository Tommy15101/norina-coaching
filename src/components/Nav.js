import React, { useState } from "react";
import {
  NavContainer,
  NavBranding,
  NavLinksContainer,
  NavbarLink,
  ToggleMobileMenuButton,
  NavbarMobileContainer,
  MobileBranding,
  NavbarLinkBranding,
} from "./NavStyles";

const Nav = () => {
  const [mobile, setMobile] = useState(false);

  return (
    <header>
      <NavContainer mobile={mobile}>
        <NavBranding mobile={mobile}>
          <NavbarLinkBranding to="/">
            Norina Bramke
            <br />
            Coaching
          </NavbarLinkBranding>
        </NavBranding>
        <NavLinksContainer>
          <li>
            <NavbarLink to="about" smooth={true} duration={700}>
              About
            </NavbarLink>
          </li>
          <li>
            <NavbarLink to="mission" smooth={true} duration={1000}>
              Mission
            </NavbarLink>
          </li>
          <li>
            <NavbarLink to="offering" smooth={true} duration={1400}>
              Offering
            </NavbarLink>
          </li>
          <li>
            <NavbarLink to="contact" smooth={true} duration={1700}>
              Contact
            </NavbarLink>
          </li>
        </NavLinksContainer>
        <ToggleMobileMenuButton
          onClick={() => {
            setMobile((curr) => !curr);
          }}
        >
          {mobile ? <>&#10005;</> : <>&#8801;</>}
        </ToggleMobileMenuButton>
        <MobileBranding
          to="/"
          onClick={() => {
            setMobile((curr) => !curr);
          }}
        >
          Norina Bramke <br /> Coaching
        </MobileBranding>
        {mobile && (
          <NavbarMobileContainer>
            <li
              onClick={() => {
                setMobile((curr) => !curr);
              }}
            >
              <NavbarLink
                onClick={() => {
                  setMobile((curr) => !curr);
                }}
                to="about"
                smooth={true}
                duration={700}
              >
                About
              </NavbarLink>
            </li>
            <li
              onClick={() => {
                setMobile((curr) => !curr);
              }}
            >
              <NavbarLink
                onClick={() => {
                  setMobile((curr) => !curr);
                }}
                to="mission"
                smooth={true}
                duration={1000}
              >
                Mission
              </NavbarLink>
            </li>
            <li
              onClick={() => {
                setMobile((curr) => !curr);
              }}
            >
              <NavbarLink
                onClick={() => {
                  setMobile((curr) => !curr);
                }}
                to="offering"
                smooth={true}
                duration={1400}
              >
                Offering
              </NavbarLink>
            </li>
            <li
              onClick={() => {
                setMobile((curr) => !curr);
              }}
            >
              <NavbarLink
                onClick={() => {
                  setMobile((curr) => !curr);
                }}
                to="contact"
                smooth={true}
                duration={1700}
              >
                Contact
              </NavbarLink>
            </li>
          </NavbarMobileContainer>
        )}
      </NavContainer>
    </header>
  );
};

export default Nav;

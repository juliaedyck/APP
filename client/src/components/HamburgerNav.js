import { MenuLink, Menu, Hamburger } from "./NavElement";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

import { FaTimes } from "react-icons/fa";

const HamburgerNav = ({ handleNavToggle }) => {
  return (
    <Nav>
      {/* <Menu> */}
      {/* <StyledNavLink onClick={handleNavToggle} to="/Form">GET AN AUDIO PLACEBO</StyledNavLink> */}
      <StyledNavLink onClick={handleNavToggle} to="/About">
        ABOUT
      </StyledNavLink>
      <StyledNavLink onClick={handleNavToggle} to="/Listen">
        LISTEN
      </StyledNavLink>

      <StyledNavLink onClick={handleNavToggle} to="/Book">
        CONTACT
      </StyledNavLink>

      <StyledNavLink onClick={handleNavToggle} to="/Montreal">
        MONTREAL EDITION
      </StyledNavLink>
      <StyledNavLink onClick={handleNavToggle} to="/Karachi">
        KARACHI EDITION
      </StyledNavLink>
      <StyledNavLink onClick={handleNavToggle} to="/Publication">
        PUBLICATION
      </StyledNavLink>
      <StyledNavLink onClick={handleNavToggle} to="/Press">
        PRESS
      </StyledNavLink>

      <CloseToggle onClick={handleNavToggle}>
        <FaTimes />
      </CloseToggle>

      {/* </Menu> */}
    </Nav>
  );
};

const Nav = styled.div`
  top: 0;
  right: 0;
  margin-top: 0px;
  height: 100vh;
  width: 100%;
  background-color: rgb(97, 76, 77, 0.9);
  /* z-index: 100; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
 
  position: absolute;
  z-index: 999999;

  @media screen and (min-width: 790px) {
    width: 20%;
    /* background-color: rgb(97, 76, 77); */
    background-color: #f7c2ce;
    position: absolute;
    z-index: 999999;
    margin-top: 105px;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #669966;
  margin-right: 10px;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: bold;
  padding: 5px;
  text-decoration: none;
  outline: none;

  &:hover {
    color: #336699;
  }

  &.active {
    color: #336699;
  }
`;

const CloseToggle = styled.button`
  position: fixed;
  top: 1%;
  right: 4%;
  background: #f7c2ce;
  border: none;

  color: #fff;
  padding: 0.75rem;
  display: flex;
  place-items: center;
  font-size: 2rem;
  cursor: pointer;
`;
export default HamburgerNav;

import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElement'
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const HamburgerNav = () => {
  return (
    <Nav>
      {/* <PrimaryNav> */}
        <Hamburger />
        <Menu>
          <MenuLink to="/home" activeStyle>
            Home
          </MenuLink>
          <MenuLink to="/about" activeStyle>
            About
          </MenuLink>
          <MenuLink to="/products" activeStyle>
            Products
          </MenuLink>
          <MenuLink to="/blog" activeStyle>
            Blog
          </MenuLink>
          <StyledNavLink to="/Form">GET AN AUDIO PLACEBO</StyledNavLink>
      <StyledNavLink to="/About">ABOUT</StyledNavLink>
        </Menu>
      {/* </PrimaryNav> */}
    </Nav>
  )
}

const Nav = styled.div`
z-index: 20;
`
const StyledNavLink = styled(NavLink)`
  color: #669966;
  margin-right: 10px;
  font-family: var(--font-body);
  text-decoration: none;
  outline: none;

  &:hover {
    color: #336699;
  }

  &.active {
    color: #336699;
  }
`;
export default HamburgerNav
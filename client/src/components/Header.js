
import styled, { keyframes } from "styled-components";
import { useState } from 'react';
import { Hamburger } from "./NavElement";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import HamburgerNav from "./HamburgerNav";

const Header = () => {

  const [navToggled, setNavToggled] = useState(false);

  const handleNavToggle = () => {
    if (navToggled === true)
    setNavToggled(false);

    else setNavToggled(true)
  };

  return (
    <>
    <Div>
      <Container>
        <Wrapper>
          <StyledNavLink to="/">AUDIO PLACEBO PLAZA</StyledNavLink>
        </Wrapper>
        <Nav>
          {/* <NavBar /> */}

   { navToggled ? 

          <HamburgerNav handleNavToggle={handleNavToggle}/>
          : <><Hamburger onClick = {handleNavToggle}/>
          <Desktop onClick = {handleNavToggle}>MENU</Desktop>
          </> }

        </Nav>
      </Container>
      <ScrollWrapper>
      <ScrollDiv>
        <InfiniteScroll>
          CAN PLACEBOS HELP? DOES SOUND HAVE THE POWER TO PROCESS COMPLEX EMOTIONS? CAN MUSIC GIVE YOU WHAT YOU NEED? IS THIS EVEN MUSIC?
        </InfiniteScroll>
        <InfiniteScroll2>
          CAN PLACEBOS HELP? DOES SOUND HAVE THE POWER TO PROCESS COMPLEX EMOTIONS? CAN MUSIC GIVE YOU WHAT YOU NEED? IS THIS EVEN MUSIC?
        </InfiniteScroll2>
      </ScrollDiv>
    </ScrollWrapper>
    </Div>
    </>
  );
};
const Desktop = styled.div`
z-index: 99;
font-size: 20px;
    top: 3%;
    right: 4%;
    padding-top: 3%;
    position: absolute;
    cursor: pointer;
  font-family: var(--font-body);
  color: var(--color-blue);


  @media screen and (max-width: 768px) {
    display: none;

  }
`


const Div = styled.span`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #f7c2ce;
  height: 105px;

`;
const Container = styled.div`
  background-color: #f7c2ce;

`;
const Nav = styled.div`
  display: flex;
  align-items: flex-end;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7c2ce;
  padding-right: 80px;

  @media (max-width: 768px) {
  width: 100%;
  padding: 0;
  margin-left: 40px;

  }
`;

const StyledNavLink = styled(NavLink)`
margin-left: 100px;
  text-decoration: none;
  padding-top: 10px;
  z-index: 2;
  color: #336699;
  font-family: var(--font-heading);
  text-decoration: none;
  outline: none;
  font-size: 60px;
  &:hover {
    color: #669966;
  }
    @media (max-width: 768px) {
  width: 100%;
  font-size: 25px;
  margin: 0;
  }
  
`;

const ScrollDiv = styled.div`
  width: 100%;
  background-color: #f7c2ce;
  /* height: 50px; */
  height: fit-content;
  /* margin-top: 10px; */
  z-index: 2;
  position: fixed;
  /* padding-top: 10px; */

  @media (max-width: 768px) {
  width: 230%;
  font-size: 15px; 
  height: 40px;
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  }
`;

const ScrollWrapper = styled.div`
  width: 100%;
  /* margin-top: 35px; */

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-family: var(--font-body);
  color: var(--color-blue);
  font-size: 20px;

`;

const scroll = keyframes`

    0% {transform: translateX(3500px);}
    25%{transform: translateX(2000px)}
    50%{transform: translateX(0px)}
    75%{transform: translateX(-2000px)}
    100% {transform: translateX(-4000px);}


`;

const scroll2 = keyframes`

    0% {transform: translateX(1000px);}
    25%{transform: translateX(-1000px)}
    50%{transform: translateX(-3000px)}
    75%{transform: translateX(-5000px)}
    100% {transform: translateX(-5000px);}


`;

const scroll3 = keyframes`

    0% {transform: translateX(800px);}
    25%{transform: translateX(400px)}
    50%{transform: translateX(0px)}
    75%{transform: translateX(-400px)}
    100% {transform: translateX(-800px);}


`;

const InfiniteScroll = styled.div`
  position: absolute;
  background-color: #f7c2ce;
  /* margin-top: 10px; */

  width: 150%;

  animation: ${scroll} 40s linear infinite;
  @media (max-width: 768px) {
    animation: ${scroll3} 45s linear infinite;
  }

`;

const InfiniteScroll2 = styled.div`
  background-color: #f7c2ce;

  position: absolute;
  width: 150%;
  margin-top: 10px;

  animation: ${scroll2} 40s linear infinite;
  @media (max-width: 768px) {
    display: none;
    animation: ${scroll} 50s linear infinite;
  }


`;

export default Header;

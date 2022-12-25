

import styled from "styled-components";

const Press = () => {
    const newWindow = (url) => {
        window.open(url, "newwindow");
        return false;
      };
    return (

        <Wrapper>
        <Head>SELECTED PRESS</Head>
      
            <StyledLink
                  onClick={() =>
                    newWindow(
                      "https://www.thenews.com.pk/magazine/you/1014017-visionary-women"
                    )
                  }
                  target="_blank"
                >
               VISIONARY WOMEN
                </StyledLink>
        <StyledLink
                  onClick={() =>
                    newWindow(
                      "https://mmnews.tv/here-are-artworks-you-must-visit-at-karachi-biennale-2022/"
                    )
                  }
                  target="_blank"
                >
                Here are artworks you must visit at Karachi Biennale 2022
                </StyledLink>

                <StyledLink
                  onClick={() =>
                    newWindow(
                      "https://www.dawn.com/news/1717389/3rd-karachi-biennale-promises-interesting-display-of-artistic-talent"
                    )
                  }
                  target="_blank"
                >
                3rd Karachi Biennale promises interesting display of artistic talent
                </StyledLink>

                <StyledLink
                  onClick={() =>
                    newWindow(
                      "https://www.thenews.com.pk/magazine/us/1008137-karachi-biennale-2022-where-art-meets-technology"
                    )
                  }
                  target="_blank"
                >
                Karachi Biennale 2022 –where art meets technology
                </StyledLink>

                <StyledLink
                  onClick={() =>
                    newWindow(
                      "https://www.arabnews.pk/node/2191651/lifestyle"
                    )
                  }
                  target="_blank"
                >
                Karachi Biennale: Pakistan’s largest international, contemporary art forum kicks off
                </StyledLink>

        </Wrapper>
    );
}

const Head = styled.h1`
padding: 10px;
font-weight: bold;
`

const Wrapper = styled.div`
width: 100%;
  margin-top: 100px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: var(--font-body);
  color: var(--color-blue);

  @media (max-width: 768px) {
    width: 100%;

  }
`
const StyledLink = styled.a`
margin-left: 3px;
margin-right:3px;
padding: 10px;
color: var(--color-green);
&:hover {
    color: var(--color-blue);
    transition: 300ms ease-in-out;
    cursor: pointer;
  }
  `;

export default Press; 


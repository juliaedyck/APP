import styled from "styled-components";
import px2vw from "../utils/px2vw";

import photo from "../photos/WORKING MENU_page-0001.jpg";
import photo2 from "../photos/app_karachi_final_page-0001.jpeg"

const newWindow = (url) => {
  window.open(url, "newwindow");
  return false;
};

const Karachi = () => {
  return (
    <Wrapper>
        <Head>KARACHI BIENNALE</Head>
        <ImgWrap>
        {/* <Img src={photo} alt="Placebo Menu" /> */}
      </ImgWrap>

      <TextDiv>
<p> COMING SOON TO THE
<StyledLink
                  onClick={() =>
                    newWindow(
                      "https://karachibiennale.org.pk/"
                    )
                  }
                  target="_blank"
                >
                  KARACHI BIENNALE!
                </StyledLink>
</p>

</TextDiv>
<ImgDiv>
 <ImgWrap>
 <Img2 src={photo2} alt="Poster" />

 <Img2 src={photo} alt="Placebo Menu" />

 </ImgWrap>
</ImgDiv>

    </Wrapper>
  );
};

const Head = styled.h1`
padding: 10px;
font-weight: bold;
`


const TextDiv = styled.div`

  margin-top: 10px;
  margin-bottom: 40px;
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
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
    /* padding-right: 10%; */

  }

  @media (min-width: 1024px) {
    /* width: ${px2vw(1500)}; */
    /* min-height: ${px2vw(300)}; */
    /* height: 100%; */
  }
`;


const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  /* padding: 20px; */
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
  }
`;




const ImgDiv = styled.div`
display: flex;
flex-direction: row;

@media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Img = styled.img`
  width: 600px;
  border-radius: 20px;
  margin-top: 10px;

  @media (max-width: 768px) {
    max-width: 80%;
    max-height: 80%;

  }
`;

const Img2 = styled.img`
  width: 300px;
  border-radius: 20px;
  
  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 5%;

  }
`;

const StyledLink = styled.a`
margin-left: 3px;
color: var(--color-green);
&:hover {
    color: var(--color-blue);
    transition: 300ms ease-in-out;
    cursor: pointer;
  }
  `;

export default Karachi;

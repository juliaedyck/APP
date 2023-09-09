import styled from "styled-components";
import px2vw from "../utils/px2vw";

import photo from "../photos/signs.jpg";
import photo2 from "../photos/app_karachi_final_page-0001.jpeg"
import photo3 from "../photos/team.jpg"
import photo4 from "../photos/menu.jpg"
import photo5 from "../photos/plaza.jpg"
import photo6 from "../photos/intake 1.jpg"
import photo7 from "../photos/intake 2.jpg"
import photo8 from "../photos/working.jpg"
import photo9 from "../photos/working 2.jpg"



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
<p> 
<StyledLink
                  onClick={() =>
                    newWindow(
                      "https://karachibiennale.org.pk/"
                    )
                  }
                  target="_blank"
                >
                  KARACHI BIENNALE
                </StyledLink>
                OCTOBER 31 - NOVEMBER 14 2022
</p>

</TextDiv>
<Img src={photo5} alt="Plaza Installation" />

<TextDiv>
<p>For KB22, Audio Placebo Plaza set up shop at Karachi’s NED University campus and invited everyone to take appointments to discuss how an audio placebo could help improve their lives. For four days, people brought their daily issues to the table and APP crafted audio techniques to meet their needs. The whole experience was broadcast live online and on FM pirate radio and recordings remained as an installation. </p>

</TextDiv>
<ImgDiv>
 <ImgWrap>
 {/* <Img2 src={photo2} alt="Poster" /> */}
<Img src={photo} alt="Placebo Menu" />
 <Img src={photo4} alt="Menus"/>

 </ImgWrap>
<ImgWrap>

 {/* <Img2 src={photo6} alt="appointment"/> */}
 <Img src={photo7} alt="appointment"/>
 <Img src={photo8} alt="working"/>
 {/* <Img src={photo9} alt="Menus"/> */}
 
 </ImgWrap>
</ImgDiv>
 <TextDiv>
<p>For the Karachi edition, APP collaborated with local musician and multimedia artist Fahad Ubaid. Having a keen eye towards rhythm, he can play over six musical instruments and has been a music instructor at Indus Valley University, Karachi. They frequently compose music from different instruments, and specialise in digital art and video editing as well. </p>

</TextDiv>
 <Img src={photo3} alt="Team" />
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
  justify-content: space-evenly;
  margin-bottom: 20px;
  /* padding: 20px; */
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
  }
`;
const ImgWrap2 = styled.div`
  display: flex;
  justify-content: space-evenly;

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
flex-direction: column;

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
  padding:5px;

  @media (max-width: 768px) {
    max-width: 80%;
    max-height: 80%;

  }
`;

const Img2 = styled.img`
  max-width: 500px;
  height: fit-content;
  border-radius: 20px;
  padding:5px;
  
  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 5%;

  }
`;

const StyledLink = styled.a`
margin-left: 3px;
margin-right:3px;
color: var(--color-green);
&:hover {
    color: var(--color-blue);
    transition: 300ms ease-in-out;
    cursor: pointer;
  }
  `;

export default Karachi;

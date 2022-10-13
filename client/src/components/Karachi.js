import styled from "styled-components";
import px2vw from "../utils/px2vw";

import photo from "../photos/WORKING MENU_page-0001.jpg";

const Karachi = () => {
  return (
    <Wrapper>
        <Head>KARACHI BIENNALE</Head>
        <ImgWrap>
        {/* <Img src={photo} alt="Placebo Menu" /> */}
      </ImgWrap>

      <TextDiv>
<p> Founded upon methods of intersectional feminism, self-care, and audio production excellence, Audio Placebo Plaza invites the public to visit our centre, or take appointments to discuss how an audio placebo could help improve their lives. Laying the mechanism of the placebo effect bare, patients are invited to engage with healing performance.
</p>

</TextDiv>
<ImgDiv>
 <ImgWrap>
 <Img2 src={photo} alt="Placebo Menu" />
 </ImgWrap>
</ImgDiv>

      <TextDiv>

   
<p>Whether to increase productivity, self-esteem, mental health, or social interactivity, we work with our patient's aural preferences, sensitivities, and curiosities. Intake sessions determine familiarity and comfort with psychosomatic audio techniques. After the consultation, team members meet to discuss each participant’s case, and fulfill “prescriptions” collaboratively.</p> 
       
      </TextDiv>
    </Wrapper>
  );
};

const Head = styled.h1`
padding: 10px;
font-weight: bold;
`


const TextDiv = styled.div`
/* display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 10px;
margin-top: 10px;
margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 5%;
  } */

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
`;

const ImgWrap2 = styled.div`
  display: flex;
  flex-direction: column;
align-items: center;

  justify-content: space-between;
  margin-bottom: 20px;
  padding: 15px;
`;


const ImgDiv = styled.div`
display: flex;
flex-direction: row;

@media (max-width: 768px) {
    flex-direction: column;
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
export default Karachi;

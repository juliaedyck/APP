import styled from "styled-components";
import px2vw from "../utils/px2vw";

import photo1 from "../photos/Placebo_photo_par_Alexis_Bellavance_006.jpg";
import photo2 from "../photos/Placebo_photo_par_Alexis_Bellavance_007.jpg";
import photo3 from "../photos/Placebo_photo_par_Alexis_Bellavance_005.jpg"
import photo4 from "../photos/Placebo_photo_par_Alexis_Bellavance_004.jpg"

const Montreal = () => {
  return (
    <Wrapper>
        <Head>MONTREAL EDITION</Head>
        <ImgWrap>
        <Img src={photo3} alt="Viv playing synth" />
      </ImgWrap>

      <TextDiv>
<p>In summer of 2021, the Canadian art collective known as Audio Placebo Plaza transformed a former perfume shop vitrine into a DIY audio placebo and online radio centre. For one week only they offered everyday people customized positive messages, audio creations, healing frequencies, binaural beats, and ASMR, responding to the needs of the community through a practice of radical sonic care.</p>

</TextDiv>
<ImgDiv>
 <ImgWrap>
 <Img2 src={photo2} alt="Erin and Julia in production" />
 </ImgWrap>
 <ImgWrap2>

 <Img2 src={photo1} alt="Montreal Menu" />
 <Img2 src={photo4} alt="Seat and microphone" />
 </ImgWrap2>
</ImgDiv>

      <TextDiv>

   
<p>Presented as part of “Bodies in Resonance / Corps Résonants”, a series of radio interventions curated by /Undefine (Martín Rodríguez and Emmanuel Madan)
     This series invited three successive artist groups to make performances, installations, and engage with the public through the storefront at 6835 Rue Saint-Hubert, Montreal from June 4 to 22 in Partnership with Suoni per il Popolo and CKUT.</p> 
       
      </TextDiv>
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
    justify-content: center;
    align-items: center;
    max-width: 100%;
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
export default Montreal;

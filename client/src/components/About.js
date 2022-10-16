import styled from "styled-components";

import photo from "../photos/bio pic.jpg";


const About = () => {
  return (
    <Wrapper>
      <TextDiv>

<p>Erin Gee, Julia E Dyck, and Viv Li offer everyday people customized positive messages, audio creations, healing frequencies, binaural beats, and ASMR, responding to the needs of our community through a practice of radical sonic care.</p>
<Div></Div>
<Div>
<p>We promise our fullest intention</p>
</Div>
</TextDiv>
      <ImgWrap>
        <Img src={photo} alt="team photo" />
      </ImgWrap>
      <Div>
        Audio Placebo Plaza (APP) is focused on the expansion of intersectional feminist
        methods of care, emotional labor, collaboration, and community in sound
        art. APP considers "placebo" as a complex, open-ended, and optimistic
        conceptual framework for work that embraces irony, play, and
        co-performativity in psychosomatic sound art. Through performance and
        interactivity, APP engages with community members to discuss these
        topics.
        </Div>
        <Div>
          Julia E. Dyck is an artist and radio producer originally from Treaty
          One Territory/Winnipeg who works between Brussels and
          Montreal/Tiohtià:ke. Dyck's relational and speculative practice
          explores the possible connections between the body, consciousness,
          technology and the environment through performance, composition,
          installation and transmission.
        </Div>
        <Div>
        Erin Gee is an artist/composer based in Montreal/Tiohtià:ke who
        practices critical approaches to affect, vocality, and unconscious
        thought. She is a DIY expert in affective biofeedback, incorporating
        these technologies into vocal composition, networked performance, ASMR,
        VR, AI and robotics.
        </Div>
        <Div>
          Vivian Li is a China-born, Montreal/Tiohtià:ke-based multidisciplinary
          composer and sound artist whose work in hardware synths, voice and
          sampling emerges from a holistic exploration of our daily
          surroundings, combining elements of Li’s eastern roots with western
          influences.
        </Div>
        <Div>
        APP considers "placebo" as a complex, open-ended, and optimistic
        conceptual framework for performances that embrace irony, play, and
        co-performativity in psychosomatic sound art. There is limited
        scientific evidence for sound alone as a healing force, however, there
        is ample evidence across cultures that points to the power of the human
        mind as a psychosomatic generator for positive or negative experience.
        Roleplay is a key element of APP’s work, using art as a means of
        interrogating criticality, sincerity, gendered acts of care, and also
        suspension of disbelief. Through performance and interactivity, the trio
        works with community members to host open discussions about these
        topics. Our sonic “prescriptions” are not intended to disrupt or replace
        medical treatment, but they are healthy supplements. Through dedication
        to psychosomatic resonance, APP arrives at new understandings of
        electronic sound, mental and physical health.
      </Div>
    </Wrapper>
  );
};

const TextDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 50px;

`
const Wrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  /* margin-left: 10px;
  margin-right: 20px; */
  /* padding: 20px; */
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
`;
const Div = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
  }
`;

const Img = styled.img`
  width: 600px;
  border-radius: 20px;

  
  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 80%;

  }
`;
export default About;

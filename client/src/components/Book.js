import ResponsiveEmbed from "react-responsive-embed";
import styled from "styled-components";
import px2vw from "../utils/px2vw";
import photo from "../photos/vitrine2.jpg"

const Book = () => {

    return (

        <>
      {/* <Img /> */}
      <Wrapper>
        <Div>
        <ImgWrap>
        <Img src={photo} alt="vitrine" />
      </ImgWrap>

                <ResponsiveEmbed src= "https://harmonizely.com/audioplaceboplaza?view=compact" style = "z-index: 0" frameborder="0" scrolling="yes" ratio='4:3' />
                </Div>
                </Wrapper>
        </>
    )


}

const Wrapper = styled.div`
width: 100%;
/* height: 100%; */
display: flex;
justify-content: center;
`
const Div = styled.div`
margin-top: 200px;
height: 20%;
z-index: -1;
width: 60%;
position: absolute;

@media (max-width: 768px) {
 /* display: none; */
/* width: ${px2vw(320, 768)};
min-height: ${px2vw(200, 768)};  */
width: 80%;
max-height: 100%;
position: absolute;
margin-top: 30%;

/* height: 100%;  */
 } 
`
const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Img = styled.img`
  /* width: 600px; */
  height: 400px;
  border-radius: 20px;

  
  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 30%;

  }

// const Img = styled.div`
//   background-image: url(/images/gold.jpg);
//   z-index: -1;
//   height: 100%;
//   width: 100%;
//   width: 1440;
//   background-size: contain;
//   background-position: center;
//   position: absolute;
//   top: 9%;


// `;

export default Book;
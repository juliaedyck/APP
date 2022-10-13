import ResponsiveEmbed from "react-responsive-embed";
import styled from "styled-components";
import px2vw from "../utils/px2vw";

const Book = () => {

    return (

        <>
      {/* <Img /> */}
      <Wrapper>
        <Div>

                <ResponsiveEmbed src= "https://harmonizely.com/audioplaceboplaza?view=compact" style = "z-index: 0" frameborder="0" scrolling="yes" ratio='4:3' />
                </Div>
                </Wrapper>
        </>
    )


}

const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
`
const Div = styled.div`
margin-top: 200px;
height: 20%;
z-index: 0;
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
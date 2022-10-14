import ResponsiveEmbed from "react-responsive-embed";
import styled from "styled-components";
import px2vw from "../utils/px2vw";
import Album from "./Album";
import photo from "../photos/vitrine1.jpg"

const Listen = () => {

    return (

        <>
      {/* <Img /> */}
      <Wrapper>
        <Div>
<Album/>
                {/* <ResponsiveEmbed style="position: relative; z-index: 0; border: 0; width: 350px; height: 786px;" src="https://bandcamp.com/EmbeddedPlayer/album=3130250914/size=large/bgcol=ffffff/linkcol=f171a2/transparent=true/?wmode=transparent" frameborder="0" wmode="Opaque" ratio='3:6' /> */}
                {/* <ResponsiveEmbed src="https://audioplaceboplaza.bandcamp.com/album/audio-placebo-plaza-tiotia-ke-montreal?wmode=transparent" frameborder="0" wmode="Opaque" ratio='3:6' /> */}
                {/* <iframe src={source} height={height} width={width}/>  */}
                {/* <iframe ratio='3:6' src="https://bandcamp.com/EmbeddedPlayer/album=3130250914/size=large/bgcol=ffffff/linkcol=f171a2/transparent=true/?wmode=transparent" frameborder="0" wmode="Opaque" /> */}
                </Div>
                </Wrapper>
        </>
    )


}

const Wrapper = styled.div`
width: 100%;

display: flex;
justify-content: center;
/* position: relative; 
z-index: -1;  */
`
const Div = styled.div`
margin-top: 150px;
max-height: 200%;
position: absolute;
z-index: -1;
width: 20%;

@media (max-width: 768px) {
 /* display: none; */
/* width: ${px2vw(320, 768)};
min-height: ${px2vw(200, 768)};  */
width: 80%;
max-height: 60%;
/* position: absolute; */
/* position: relative;
z-index: 0; */
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

//   @media (max-width: 768px) {
//     /* display: none; */
//     /* width: ${px2vw(320, 768)};
//     min-height: ${px2vw(200, 768)}; */
//     /* height: 100%; */

//     background-size: cover;
//     background-position: center;
//     background-repeat: no-repeat;
//   }
// `;

export default Listen;
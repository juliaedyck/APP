import ResponsiveEmbed from "react-responsive-embed";
import styled from "styled-components";
import px2vw from "../utils/px2vw";
import Album from "./Album";
import photo from "../photos/vitrine1.jpg"
import Radio from "./Radio";
import AlbumTwo from "./Album copy";

const Listen = () => {

    return (

        <>
      {/* <Img /> */}
      <Wrapper>
        <Div>
        {/* <Head> LIVE FROM KARACHI </Head>
          <Radio/> */}
          <AlbumWrap>
          <AlbumTwo/>
          </AlbumWrap>
        <Head> MONTREAL ARCHIVE </Head>

          
<Album/>
                {/* <ResponsiveEmbed style="position: relative; z-index: 0; border: 0; width: 350px; height: 786px;" src="https://bandcamp.com/EmbeddedPlayer/album=3130250914/size=large/bgcol=ffffff/linkcol=f171a2/transparent=true/?wmode=transparent" frameborder="0" wmode="Opaque" ratio='3:6' /> */}
                 {/* <ResponsiveEmbed src="https://players.rcast.net/stream/68699" type="audio/mp3" />  */}
                {/* <iframe src={source} height={height} width={width}/>  */}
                {/* <iframe ratio='3:6' src="https://bandcamp.com/EmbeddedPlayer/album=3130250914/size=large/bgcol=ffffff/linkcol=f171a2/transparent=true/?wmode=transparent" frameborder="0" wmode="Opaque" /> */}
                </Div>
                </Wrapper>
        </>
    )


}

const AlbumWrap = styled.div`
padding-top: 20px;
`

const Wrapper = styled.div`
width: 100%;

display: flex;
justify-content: center;
/* position: relative; 
z-index: -1;  */
`
const Div = styled.div`
margin-top: 110px;
max-height: 200%;
position: absolute;
z-index: -1;
width: 20%;
display: flex;
flex-direction: column;
align-items: center;

@media (max-width: 768px) {
 /* display: none; */
/* width: ${px2vw(320, 768)};
min-height: ${px2vw(200, 768)};  */
width: 80%;
/* max-height: 100%; */
/* position: absolute; */
/* position: relative;
z-index: 0; */
/* height: 100%;  */
 } 

`

const Head = styled.h1`
padding: 20px;
font-weight: bold;
font-family: var(--font-body);
color: var(--color-blue);
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
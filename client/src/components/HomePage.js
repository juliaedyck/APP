import styled, { keyframes } from "styled-components";
import px2vw from "../utils/px2vw";

const HomePage = () => {
  return (
    <Wrapper>
      <Img />
  
    </Wrapper>
  );
};

const Div = styled.div`
  width: 100%;
  background-color: #f7c2ce;
  height: 50px;
  margin-top: 5%;
  z-index: 2;
  position: fixed;
  padding-top: 12px;

  @media (max-width: 768px) {
    display: none;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  /* width: 1440; */
  margin-top: 35px;
  display: flex;
  flex-direction: row;
  font-family: var(--font-body);
  color: var(--color-blue);
  font-size: 20px;

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    /* width: ${px2vw(1500)};
    min-height: ${px2vw(300)};
    height: 100%; */
  }
`;

const Img = styled.div`
  background-image: url(/images/gold.jpg);
  z-index: -1;
  height: 100%;
  width: 100%;
  width: 1440;
  background-size: contain;
  background-position: center;
  position: absolute;
  top: 3%;

  @media (max-width: 768px) {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  
  @media (max-width: 1500px) {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
const scroll = keyframes`

    0% {transform: translateX(3500px);}
    25%{transform: translateX(2000px)}
    50%{transform: translateX(0px)}
    75%{transform: translateX(-2000px)}
    100% {transform: translateX(-4000px);}


`;

const scroll2 = keyframes`

    0% {transform: translateX(1000px);}
    25%{transform: translateX(-1000px)}
    50%{transform: translateX(-3000px)}
    75%{transform: translateX(-5000px)}
    100% {transform: translateX(-5000px);}


`;

const InfiniteScroll = styled.div`
  position: absolute;
  background-color: #f7c2ce;
  margin-top: 10px;

  width: 150%;

  animation: ${scroll} 40s linear infinite;
`;

const InfiniteScroll2 = styled.div`
  background-color: #f7c2ce;

  position: absolute;
  width: 150%;
  margin-top: 10px;

  animation: ${scroll2} 40s linear infinite;
`;

export default HomePage;

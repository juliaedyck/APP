import styled from 'styled-components';
import Carousel from './Carosel';

const Publication =() => {


    return (
       <Wrapper>
       <Carousel/>

      

    
             </Wrapper>
    )
}

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

  }
`

export default Publication;
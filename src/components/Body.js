import styled  from 'styled-components'
import { RightContainer } from './RightContainer'
import teeImg from '../assets/classic-tee.jpg'

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 40px;
`

const LeftContainer = styled.div`
    display:flex;
    width: auto; 
    padding-left: 5vh;
    align-items: center;
    justify-content: center;
`

const ImageContainer = styled.img`
    height: 720px;
    width: 500px;
`

 
export const Body = ({}) => {
  return (
    <MainContainer> 
      <LeftContainer> 
        <ImageContainer src={teeImg}/>
        </LeftContainer>
      <RightContainer/> 
    </MainContainer>
  );
}



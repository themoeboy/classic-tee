import styled  from 'styled-components'
import teeImg from '../assets/classic-tee.jpg'

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    width:auto;
    height:auto;
    padding-top: 20px;
    padding-bottom: 10px;
`

const LeftContainer = styled.div`
    display:flex;
    width: auto; 
    padding-left: 10px;
    align-items: center;
    justify-content: center;
`

const RightContainer = styled.div`
    display:flex;
    flex-direction:column;
    width: auto; 
    padding-left: 5vh;
    align-items: center;
    justify-content: center;
`

const ImageContainer = styled.img`
    height: 100px;
    width: 100px;
`

const ClothingLabel = styled.div`
 
`

const PriceLabel= styled.div`
 font-weight:bold;
`
 
export const ItemCart = ({size, label , count , price}) => {
  return (
    <MainContainer> 
      <LeftContainer> 
        <ImageContainer src={teeImg}/>
      </LeftContainer>
      <RightContainer>
        <ClothingLabel> {label}</ClothingLabel>
        <PriceLabel> {`${count} x $${price}.00`}</PriceLabel>
        <ClothingLabel> {`Size: ${size}` } </ClothingLabel>
     </RightContainer> 
    </MainContainer>
  );
}
import styled  from 'styled-components'
import { SizeButton } from './SizeButton'
import { AddToCart } from './AddToCart'
import React, { useState } from 'react';
 

const MainContainer = styled.div`
    display:flex;
    flex-direction: column;
    width: auto;
    max-width: 600px;
    padding-right:50px;
    padding-left:50px;
`

const ClothingLabelContainer = styled.h2`
    color: #222222;
`
const PriceContainer = styled.div`
    padding-top:30px;
    padding-bottom:30px;
    color: #222222;
    font-weight: bold;
`
const DescriptionContainer = styled.div`
    color: #888888;
    padding-bottom:30px;
`

const SizeTitleContainer = styled.div`
    display:flex;
    flex-direction: row;
    padding-bottom:15px;
`

const SizeAsterisk = styled.span`
    color:#C90000
`

const SizeLabelContainer = styled.div`
    color: #888888;
    font-weight: bold;
`
const SizeOptionContainer = styled.div`
    color: #222222;
    font-weight: bold;
`

const SizeButtonContainer = styled.div`
    display:flex;
    flex-direction: row;
    padding-bottom:15px;
    width: 500;
    height: 70px;
    gap:6px;
` 

 
export const RightContainer = ({}) => {
 const [buttonClicked, setButtonClicked] = useState('');
 const onSizeButtonClicked = (type) => {
    console.log(type);
    console.log(buttonClicked);
    if (type === buttonClicked) setButtonClicked('');
    setButtonClicked(type);
 }
  return (
    <MainContainer> 
      <ClothingLabelContainer>
         Classic Tee
      </ClothingLabelContainer >
      <PriceContainer> $75 </PriceContainer>
      <DescriptionContainer>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </DescriptionContainer>
      <SizeTitleContainer>
        <SizeLabelContainer>
            SIZE
        </SizeLabelContainer>
        <SizeAsterisk>*</SizeAsterisk>
        <SizeOptionContainer>{`${buttonClicked}`}</SizeOptionContainer>
      </SizeTitleContainer>
      <SizeButtonContainer>
        <SizeButton buttonClicked={buttonClicked === 'S'} onSizeButtonClicked={onSizeButtonClicked} type={'S'} /> 
        <SizeButton buttonClicked={buttonClicked === 'M'} onSizeButtonClicked={onSizeButtonClicked} type={'M'} /> 
        <SizeButton buttonClicked={buttonClicked === 'L'} onSizeButtonClicked={onSizeButtonClicked} type={'L'} /> 
      </SizeButtonContainer>
      <AddToCart/>
    </MainContainer>
  );
}
import styled  from 'styled-components'
import React, { useState } from 'react';


const ButtonContainer = styled.div`
    display:flex;
    width: 47px;
    height: 48px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    color: #CCCCCC;
    border-color: #CCCCCC;
    border-style: solid;
    border-width: thin;
    cursor:pointer;
    box-sizing: border-box;
    ${props => props.clicked ?  'border-color: #222222;  border-style: solid; border-width: medium; ': ''};

`


 
export const SizeButton = ({buttonClicked, onSizeButtonClicked, type}) => {
  return (
    <ButtonContainer clicked={buttonClicked} onClick={()=> onSizeButtonClicked(type)}> 
        {type}
    </ButtonContainer>
  );
}
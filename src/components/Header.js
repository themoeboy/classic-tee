import styled  from 'styled-components'
import { MyCartDropDown } from './MyCartDropDown'
import React, { useState } from 'react';


const HeaderContainer = styled.div`
    display:flex;
    justify-content: flex-end;
    width: 80%; 
    margin-top: 20px;
    padding-right:50px;
    height: 20px;
    background-color: #F6F6F7;
    overflow-y: visible;
    `

const MyCartContainer = styled.div`
    display:flex;
    z-index: 150;
    height:auto;
    cursor: pointer;
    align-items:center;
    justify-content:center;
    width: 100px;
    color: #888888;
    font-size:12px;
    background-color: ${props => props.open ? "white" : '#F6F6F7'};
    box-sizing: border-box;
    ${props => props.open ?  'border-color: #CCCCCC;  border-style: solid; border-width: thin; border-bottom: none;': ''};
`
const MyCartParentContainer = styled.div`
   display:flex;
   flex-direction: column;
   height:auto;
   overflow-y: visible;
`

const MockItemList = [
    { 
       label: 'Classic Tee',
       size: 'S',
       price: 75,
       count:1
    },
    { 
       label: 'Classic Tee',
       size: 'M',
       price: 75,
       count: 2
    },
    { 
       label: 'Classic Tee',
       size: 'L',
       price: 75,
       count: 2
    },
   
   ];
 
export const Header = ({}) => {
const [openMyCartDialog, setOpenMyCartDialog ] = useState(false);
const [coordinate, setCoordinate ] = useState({x:0, y:0
});
  
  return (
    <HeaderContainer> 
        <MyCartParentContainer>
            <MyCartContainer  onClick={(e) => {
                setOpenMyCartDialog(!openMyCartDialog)
                 var topValue = e.target.getBoundingClientRect().y
                 var leftValue = e.target.getBoundingClientRect().x
                 setCoordinate({
                    x: leftValue,
                    y: topValue
                 })
                }}  open={openMyCartDialog}>
                {`My Cart ( ${MockItemList.length} )`}
            </MyCartContainer>
            <MyCartDropDown open={openMyCartDialog} coordinate={coordinate} itemList={MockItemList} />
        </MyCartParentContainer>
    </HeaderContainer>
  );
}



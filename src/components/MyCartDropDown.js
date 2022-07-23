import styled  from 'styled-components'
import { ItemCart } from './ItemCart';


const DropDownContainer = styled.div`
    display:${props => props.open ? "flex" : 'none'};
    width: 300px;
    height: auto;
    flex-direction: column;
    min-height: 200px; 
    background-color: white;
    z-index: 100;
    border-color: #CCCCCC;
    border-style: solid;
    border-width: thin;
    position:absolute;
    top: ${props => `${props.coordinate.y + 15}`}px;
    left: ${props => props.coordinate.x -202}px;
`




 
export const MyCartDropDown = ({open, coordinate, itemList}) => {
  return (
    <DropDownContainer open={open} coordinate={coordinate}> 
       { itemList.map((item) => (<ItemCart {...item}/>)) }
       
    </DropDownContainer>
  );
}

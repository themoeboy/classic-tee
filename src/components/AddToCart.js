import styled  from 'styled-components'

const ButtonContainer = styled.div`
    display:flex;
    width: 156px;
    height: 43px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    color: #222222;
    font-weight:bold;
    border-color: #222222;
    border-style: solid;
    border-width: medium;
    cursor:pointer;
    :hover{
        color: white;
        background-color: #222222;  
        transition-delay:0.2s;
    }

`
 
export const AddToCart = () => {
  return (
    <ButtonContainer> 
        {'ADD TO CART'}
    </ButtonContainer>
  );
}
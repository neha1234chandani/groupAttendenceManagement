import { styled } from "styled-components";

const Wrapper = styled.section`
display : flex;
flex-direction :column ;
align-items:center;
justify-content:center;
border : solid black 2px;
border-radius : 3px;
margin : 100px 300px;
width :100%
box-shadow: 4px 4px 10px #00000067;
box-sizing : border-box;

input{
    padding:10px 30px;
    font-size : 1.5rem;
    margin:20px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.2s;

  &:hover{
    border : solid red 2px;
    background-color : #FE4066;
    color : white;
  }
  &:active{
    border: 2px solid var(--green-accent);
    color: var(--green-accent);
}
}

`
export default Wrapper;
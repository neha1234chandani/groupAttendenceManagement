import { styled } from "styled-components";

const Wrapper = styled.div` 
margin: 50px 200px;
border-radius : 3px;
box-sizing : border-box;

form {
    padding :50px 50px 30px 50px;
    margin :10px auto ;
    width: 30%;
    border : solid white 1px;
    border-radius : 20px;
    box-shadow: 4px 4px 10px #00000067;
    background-color : white;
    font-size: 20px;
    min-height: 40vh;
  
}
form h1 {
    font-size : 1.6rem;
    margin :10px 0 20px 0;

}

form input[type="email"],
form input[type="password"]
{
    border : solid #FE4066 2px;
    border-radius : 5px;
    cursor : pointer;
    width : 100%;
    height : 45px;
    box-sizing : border-box;
     margin: 8px 0px;
    padding :5px;
}

form #submit  {
    display:flex;
    justify-content:center;
    align-items:center;
}
 #submit input[type=submit]  {
     padding : 0 50px;
     font-size:1.5rem;
     background :  #FE4066 ;
     color : white;
     border : solid #FE4066 2px;
     margin-top : 30px ;
     border-radius : 5px;
     width : 100%;
     height : 40px;
 }
    
form #forgot {
    
    text-align:right;
    font-size:16px;
}

form #sign{
    display : flex;
    margin-top:15px;
    align-items:center;
    justify-content:center;
}
form #signup-btn {
    text-decoration : none;
    color :  #FE4066  ;
    padding : 5px ;
}
form #signup-btn:hover{
    cursor: pointer;
}

`

export default Wrapper

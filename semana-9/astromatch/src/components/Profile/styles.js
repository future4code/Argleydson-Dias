import styled from "styled-components";
import Cupido from "../assets/urso.gif"

export const Container = styled.div`  
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${Cupido})  
`;

export const ProfileContainer = styled.div`  
  height: 590px;
  width: 450px;  
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #48a498;
`;

export const HeaderContainer = styled.div`
  display: flex;  
  align-self: flex-start;  
  justify-content: space-between;
  align-items: center;
  width: 100%;  
  height: 50px;    
  padding: 8px;
  border-bottom: 1px solid lightgrey;
`;

export const ImgLogo = styled.img`
  border-radius: 50px;
  width: 150px;     
`
export const ButtonPeople = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline-style: none;
  border: none;
  cursor: pointer;   
  background-color: #48a498; 
  border-radius: 50px; 

  :hover {
    background-color: #ffff;
    color: #ffffff;
    transform: scale(1.05);
    transition: all 0.3s ease 0s;
  }
`;

export const ButtonClear = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;  
  cursor: pointer;  
  border-radius: 50px;
  background-color: #48a498; 

  :hover {
    background-color: #ffff;
    color: #ffffff;
    transform: scale(1.05);
    transition: all 0.3s ease 0s;
  }
`;

export const ImgButtonClear = styled.img`
  width: 45px;
`

export const ProfilePhoto = styled.div`
  width: 330px;  
  height: 400px;
  background-image: url(${(props) => props.photo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;    
  background-size: 100%;
  position: absolute;  
  border-radius: 20px;   
`;

export const ProfilePhotoFundo = styled.div`
  width: 360px;  
  height: 430px;
  background-image: url(${(props) => props.photo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;    
  background-size: 100%;
  position: absolute;  
  border-radius: 20px;  
  filter: blur(10px);
`;

export const InformationContainer = styled.div`
  position: absolute;
  color: white;
  display: flex;
  flex-direction: column;
  width: 350px;

  div {    
    font-weight: bold;
    font-size: 20px;
    margin-top: 200px;

  p {
      margin-top: 90px;
      background-color: #9c27b0;
    }  
`;

export const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  align-self: flex-end; 
`;

export const NotChoosenPersonButton = styled.button`
  border-radius: 50px;
  height: 50px;
  width: 50px;
  margin: 45px;
  align-self: center;
  margin-bottom: 20px;
  cursor: pointer; 

  :hover {
    background-color: #ff0000;
    color: white;
    transform: scale(1.05);
    transition: all 0.3s ease 0s;
  }
`;

export const ChoosenPersonButton = styled.button`
  border-radius: 50px;
  height: 50px;
  width: 50px;
  margin: 45px;
  align-self: center;
  margin-bottom: 20px;
  cursor: pointer; 

  :hover {
    background-color: green;
    color: #ffffff;
    transform: scale(1.05);
    transition: all 0.3s ease 0s;
  }
`
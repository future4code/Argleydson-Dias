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

export const MatchesContainer = styled.div`
  border: 1px solid #9c27b0;
  width: 400px;
  height:600px;
  display: flex;    
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;  
  padding: 10px;    
  background: rgb(72,164,152);
  background: linear-gradient(214deg, rgba(72,164,152,1) 0%, rgba(61,199,181,1) 19%, rgba(140,214,205,1) 66%);

  @media(max-width:600px){
    height: 450px;
    width: 300px; 
  }
  `;

export const HeaderContainer = styled.div`
  display: flex;    
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;    
  padding: 8px 8 0;    
  border-radius: 50px / 0px;    
`;

export const ImgLogo = styled.img`
  border-radius: 50px;
  width: 150px;  
  
  @media(max-width:600px){
    width: 110px;
  }
`
export const ButtonBackProfile = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline-style: none;
  border: none;
  background-color: transparent;
  cursor: pointer;     
  border-radius: 50px;    

  :hover {
    background-color: rgba(72, 164, 152, 0.6);
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
  background-color: transparent;   
 
  :hover {
    background-color: rgba(72, 164, 152, 0.6);
    color: #ffffff;
    transform: scale(1.05);
    transition: all 0.3s ease 0s;
  }
`;

export const ImgButtonClear = styled.img`
  width: 45px;
`

export const OutsideMatchListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;    
`;

export const MatchListContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 8px;
  width: 95%;
  cursor: pointer;
  border-radius: 20px;

  p {
    color: #f73378;
    margin-left: 20px;
    font-size: 20px; 
    
    @media(max-width:600px){
      font-size: 16px;
    }
  }

  :hover{
    background-color: rgba(72, 164, 152, 0.9);    
  }
`;

export const ImgPhotoList = styled.img`
  width: 50px;
  height: 50px;    
  border-radius: 50px;

  @media(max-width:600px){
    width: 40px;
    height: 40px;
  }
`

export const HeartContainer = styled.h4 `
  color: #9c27b0;
  font-size: 20px;
  padding: 5px;    
  text-align: center;
  background-color: #ffff;
  width: 100%;

  @media(max-width:600px){
    font-size: 15px;
  }
`

export const Photo = styled.img `    
  width: 100%;    
`
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box; 
`;

export const MatchesContainer = styled.div`
  border: 1px solid #9c27b0;
  display: flex;
  width: 400px;
  height: 590px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: #FFFF;
`;

export const HeaderContainer = styled.div`
  display: flex;    
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  height: 50px;  
  margin: 8px;
  border-bottom: 1px solid #9c27b0;   
  border-radius: 50px / 0px;
`;

export const ImgLogo = styled.img`
  border-radius: 50px;
  width: 150px;     
`
export const ButtonBackProfile = styled.button`
  outline-style: none;
  border: none;
  background-color: white;
  cursor: pointer;     
  border-radius: 50px; 
`;

export const ButtonClear = styled.button`
  border: none;  
  cursor: pointer;  
  border-radius: 50px;
  background-color: white;   
  
  img {
    width: 45px;
  }
`;

export const OutsideMatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;  
`;

export const MatchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 8px;
  
  img {
    width: 50px;
    height: 50px;    
    border-radius: 60px;
  }

  p {
    color: #f73378;
    margin-left: 20px;
    font-size: 20px;
  }
`;

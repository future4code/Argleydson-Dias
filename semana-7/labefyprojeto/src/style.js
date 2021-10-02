import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;


export const HeaderContainer = styled.div`          
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    background-color: #006450;  
    
    nav{
        padding: 8px
    }   

    button {
        font-size: 1rem;
        padding: 8px;
        margin: 8px;
        border-radius: 10px;
    }
`;


export const PLaylistManangerPageContainer = styled.div`
    min-height: 80vh;
`;

export const PLaylistCreationFormContainer = styled.div`
    min-height: 80vh;    
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1db954;
`;

export const PLaylistCreationFormulario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        font: 2rem;
        width: 300px;
        padding: 8px;
        margin: 8px;
    }

    button {
        font-size: 1rem;
        padding: 8px;
        margin: 8px;
        border-radius: 10px;
    }
`;


export const Footer = styled.div`
    background-color: #006450; 
`;
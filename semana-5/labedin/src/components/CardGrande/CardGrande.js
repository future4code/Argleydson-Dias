import React from 'react';
// import './CardGrande.css'
import BigCardContainer from '../../styles/BigCardContainer';

// import styled from 'styled-components';



function CardGrande(props) {
    return (
        <BigCardContainer>
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </BigCardContainer>
    )
}

export default CardGrande;
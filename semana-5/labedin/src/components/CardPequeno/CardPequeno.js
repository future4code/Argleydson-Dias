import React from "react";
import ContatoContainer from "../../styles/ContatoContainer";

function CardPequeno(props) {
    return (
        <ContatoContainer>
            <h3>Email: {props.email}</h3>
            <h3>Endereço: {props.endereco}</h3>
        </ContatoContainer>
    )
}

export default CardPequeno;


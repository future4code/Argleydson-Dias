import React from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

function CardPequeno(props) {
    return (
        <div className="contato-container">
            <p>Email: {props.email}</p>
            <p>Endereço: {props.endereco}</p>
        </div>
    )
}

export default CardPequeno;


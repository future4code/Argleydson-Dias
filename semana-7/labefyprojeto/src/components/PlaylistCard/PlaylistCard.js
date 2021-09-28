import React from "react";
import styled from "styled-components";

const PlaylistCardContainer = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
`
const AbrirListaButton = styled.button`        
        padding: 8px;
        margin: 8px;
        border-radius: 10px;
        box-shadow: 0 0 20px green;
`;

const NameContainer = styled.p`
    margin: 10px;
`
const DeleteButton = styled.button`  
    margin: 8px;
    padding: 8px ;   
    color: red;            
    box-shadow: 0 0 20px red;
    border-radius: 5px;   
`

const PlaylistCard = (props) => {
    return (
        <PlaylistCardContainer>
            <AbrirListaButton>
                <button onClick={() => props.changePage("playlistDetail", props.playlistId)}>Abrir playlist</button>
            </AbrirListaButton>
            <NameContainer>{props.name}</NameContainer>
            <DeleteButton>
                <button onClick={() => props.deletePlaylist(props.playlistId)} >X</button>
            </DeleteButton>
        </PlaylistCardContainer>
    )
}

export default PlaylistCard
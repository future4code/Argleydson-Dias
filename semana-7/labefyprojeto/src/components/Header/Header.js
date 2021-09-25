import React from "react";
import { HeaderContainer } from "../../style";

const Header = (props) => {
    return(
        <HeaderContainer>
          <h1>Labefy</h1>
          <nav>
            <button>Playlists</button>
            <button onClick={() => props.changePage("playlistCreationForm")}>Criar PLaylist</button>
            <button onClick={() => props.changePage("playlistManangerPage")}>Gerenciar playlist</button>           
          </nav>          
        </HeaderContainer>
    )

}

export default Header;
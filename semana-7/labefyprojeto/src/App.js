import React from 'react';
import axios from 'axios';
import { GlobalStyle } from "./globalStyles";
import { Container, Footer, Header, Main } from './style';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Container>

        <Header>
          <h1>Labefy</h1>
          <nav>
            <a href="/">Playlists</a>
            <a href="/">Favoritas</a>
            <a href="/">Criar playlist</a>
          </nav>          
        </Header>

        <Main>
         Hello
        </Main>

        <Footer>
          Atendimento
        </Footer>

      </Container>
    </div>
  );
}

export default App;

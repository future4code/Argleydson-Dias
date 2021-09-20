import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/51'}
          fotoPost={'https://picsum.photos/200/110'}
        />

        <Post
          nomeUsuario={'bananinha'}
          fotoUsuario={'https://picsum.photos/50/49'}
          fotoPost={'https://picsum.photos/200/120'}
        />

        <Post
          nomeUsuario={'zézinho'}
          fotoUsuario={'https://picsum.photos/50/30'}
          fotoPost={'https://picsum.photos/200/100'}
        />

        <Post
          nomeUsuario={'paulinho'}
          fotoUsuario={'https://picsum.photos/50/15'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      </MainContainer>
    );
  }
}

export default App;

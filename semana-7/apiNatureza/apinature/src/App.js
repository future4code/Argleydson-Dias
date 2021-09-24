import React from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;  
  align-items: center;   
  h1 {    
    font-size: 40px;
  }
  button {   
    width: 240px; 
  }
`;

const Main = styled.div`
border: 2px solid black;
margin-top: 20px;
width: 400px;
  h2 {
    text-align: center;
  }
`;

export default class App extends React.Component {
  state = {
    activity: {},
  };

  getActivity = () => {
    const url = "https://www.boredapi.com/api/activity/";

    axios
      .get(url)
      .then((res) => {
        this.setState({ activity: res.data });
      })
      .catch((err) => {
        alert(err);
      });
  };

  render() {
    const { activity, type, participants, price } = this.state.activity;

    return (
      <Container>
        <Header>
          <h1>Clique abaixo e descubra o que fazer hoje!</h1>
          <button onClick={() => this.getActivity()}>Clique aqui</button>
        </Header>
        <Main>
        <h2>Atividade</h2>
        <p>
          Nome: <b>{activity}</b>{" "}
        </p>
        <p>
          Tipo: <b>{type}</b>
        </p>
        <p>
          Participantes: <b>{participants}</b>
        </p>
        <p>
          Preço: <b>{price}</b>
        </p>
        </Main>
      </Container>
    );
  }
}

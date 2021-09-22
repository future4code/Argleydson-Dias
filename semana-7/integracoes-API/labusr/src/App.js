import React from "react";
import TelaCadastro from "./components/TelaCadastro";
import TelaListaUsuarios from "./components/TelaListaUsuarios";

//* Para ter Stado eu preciso ter componente de class, por isso "class App extends React.Component".
//* O "export deafault" pode ficar no final ou antes do class.
export default class App extends React.Component {
  //*vou ter 2 telas, a primeira vai ser a "cadastro"
  state = {
    telaAtual: "cadastro"
  }

//* Para trocar as telas eu preciso fazer uma função com switch case e depois chamar esta função.
//* Vai chamar a tela de acordo com o que está escrito em telaAtual no state
  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        //* este {this.irParaLista} foi colocado depois de fazer a função irParaLista/irParaCadastro
        return <TelaCadastro irParaLista={this.irParaLista}/> 
      case "lista":
        return <TelaListaUsuarios irParaCadastro={this.irParaCadastro} />
      default:
        return <div>Erro! Página não encontrada.</div>
    }
  }

  //* Fazer uma função para mudar de telas, mudando o state
  //* colocar esta função dentro da função de cima, escolheTela, como props para eu poder criar um botão e alterar o state. O btn foi criado nos respectivos components
  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }

  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }

  render() {
    return (
      <div>
        {/* //*para chamar a função eu preciso do this */}
        {this.escolheTela()}
        
      </div>
    );
  }
}



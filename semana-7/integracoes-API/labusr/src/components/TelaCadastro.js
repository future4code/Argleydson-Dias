import React from "react";
import axios from "axios";

export default class TelaCadastro extends React.Component {
    state = {
        nome: "",
        email: ""
    }

    //* função para alterar o que estou digitando. depois adicionar ela no input(value e onChange)
    handleNome = (e) => {
        this.setState({ nome: e.target.value })
    }
    handleEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    //* Função para fazer o cadastro dentro da API, vai ser usada no btn Cadastrar - POST createUser
    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }

        axios.post(url, body, {
            headers: {
                Authorization: "argleydson-dias-maryam"
            }
        })
        .then((res) => {
            //* console.log(res)
            alert("Usuário cadastrado(a) com sucesso!")
            //* limpar o placeHolder depois de adicionado
            this.setState({nome: "", email: ""})
        })
        .catch((err) => {
            //*  console.log(err.response.data)
            alert(err.response.data.message)
        })


    }
    
    render() { 
        return (
            <div>
                {/* //* btn criado depois de fazer as funções no App.js  Como é componente de classe, PRECISA do this.  */}
                <button onClick={this.props.irParaLista}> Ir para Lista de Usuários </button>
                <h2>Cadastro</h2>
                {/* //*Fazer os input e o state acima para alterar eles. Fazer as funções para trocar eles, handleNome */}
                <input
                    placeholder={"Nome"}
                    value={this.state.nome}
                    onChange={this.handleNome}
                />
                <input
                    placeholder={"E-mail"}
                    value={this.state.email}
                    onChange={this.handleEmail}
                />
                <button onClick={this.fazerCadastro}>Cadastrar</button>
            </div>
        )
    }
}
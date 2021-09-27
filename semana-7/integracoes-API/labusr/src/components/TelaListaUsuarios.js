import React from "react";
import axios from "axios"
import styled from "styled-components";

const CardUsuario = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
`

export default class TelaListaUsuarios extends React.Component {
    state = {
        usuarios: []
    }


    //* quero pegar depois da tle amontar, por isso DidMount
    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers: {
                Authorization: "argleydson-dias-maryam"
            }
        })
            .then((res) => {
                // * console.log(res)
                // * Criar um estado pra guardar os dados obtidos, olhar o console pra ver qual pegar, data.
                this.setState({ usuarios: res.data })
            })
            .catch((err) => {
                alert("Occorreu um problema, tente novamente")
            })
    }

    deletarUsuario = (id) => {
        // * Transformar em Template string pq preciso receber o id no final da url
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "argleydson-dias-maryam"
            }
        })
        .then((res) => {
            // console.log(res)
            alert("Usuario deletado com sucesso!")
            // * preciso atualizar a lista depois de deletar
            this.pegarUsuarios()
        })
        .catch((err) => {
            // console.log(err.response.data)
            alert("Ocorreu um erro, tente novamente!")

        })


    }


    render() {
        // console.log(this.state.usuarios)
        // * mostrar a lista de usuários
        const listaUsuarios = this.state.usuarios.map((user) => {
            // * precisa de uma key pra cada usuário
            return (
                <CardUsuario key={user.id}>
                    {user.name}
                    {/* //* criar um btn pra deletar usuários e a função, como ela recebe um parâmetro, id, ela precisa ser arrow function */}
                    <button onClick={() => this.deletarUsuario(user.id)}>X</button>
                </CardUsuario>)
        })


        return (
            <div>
                {/* //* btn criado depois de fazer as funções no App.js */}
                {/* //* como é componente de classe, PRECISA do this. */}
                <button onClick={this.props.irParaCadastro}> Ir para Cadastro </button>
                <h2>Lista de Usuários</h2>
                {/* //* chamar a lista de usuarios */}
                {listaUsuarios}
            </div>
        )
    }
}
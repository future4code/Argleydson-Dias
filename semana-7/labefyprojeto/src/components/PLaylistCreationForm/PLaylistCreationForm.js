import axios from "axios";
import React from "react";
import { axiosConfig, baseUrl } from "../../constants";
import { PLaylistCreationFormContainer, PLaylistCreationFormulario } from "../../style";


export default class PLaylistCreationForm extends React.Component {
    state = {
        inputNameValue: ""
    }

    changeInputnameValue = (e) => {
        this.setState({inputNameValue: e.target.value})
    }

    createPlaylist = (e) => {
        e.preventDefault();
        const body = {
            name: this.state.inputNameValue
        };

        axios.post(baseUrl, body, axiosConfig).then(() => {
            alert('Playlist cadastrada com sucesso')
        }).catch(err => [
            console.log(err)
        ]);
        this.setState({inputNameValue: ""});
    };

    render() {
        return (
            <PLaylistCreationFormContainer>
                <h2>Cadastrar nova playlist</h2>
                <PLaylistCreationFormulario>
                    <input
                        placeholder="Nome da playlist"
                        type="text"
                        value={this.state.inputNameValue}
                        onChange={this.changeInputnameValue}
                    />
                    <button type="submit">Cadastrar</button>
                </PLaylistCreationFormulario>
            </PLaylistCreationFormContainer>
        )
    }
}


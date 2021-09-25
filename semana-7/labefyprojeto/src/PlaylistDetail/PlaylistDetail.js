import React from "react";
import styled from "styled-components";
import axios from "axios";
import TrackCard from "../TrackCard/TrackCard";
import { baseUrl, axiosConfig } from "../../constants";

const PlaylistDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TrackCreationForm = styled.form`
    width: 100vw;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    div {
        display: flex;
        flex-direction: column;
    }
`

class PlaylistDetail extends React.Component {
    state = {
        tracks: [],
        trackName: "",
        artist: "",
        url: ""
    };

    componentDidMount = () => {
        this.fetchTracks()
    };

    fetchTracks = () => {
        axios.get(`${baseUrl}/${this.props.playlistId}/tracks`, axiosConfig).then(response => {
            this.setState({tracks: response.data.result.tracks})
        }).catch(err => {
            console.log(err)
        });
    };

    removeTrackFromPlaylist = (trackId) => {
        axios.delete(`${baseUrl}/${this.props.playlistId}/tracks/${trackId}`, axiosConfig).then(() => {
            this.fetchTracks();
        }).catch(err => {
            console.log(err);
        });
    };

    changeInputValues = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    addTrackToPlaylist = (e) => {
        e.preventDefault()
        const body = {
            name: this.state.trackName,
            artist: this.state.artist,
            url: this.state.url
        };

        axios.post(`${baseUrl}/${this.props.playlistId}/tracks`,
            body,
            axiosConfig
        ).then(() => {
            this.fetchTracks();
        }).catch(err => {
            console.log(err);
        });

        this.setState({
            trackName: "",
            artist: "",
            url: ""
        })
    };

    render () {
        const tracks = this.state.tracks.map(track => {
            return <TrackCard 
                key={track.id}
                trackName={track.name}
                artist={track.artist}
                url={track.url}
                trackId={track.id}
                removeTrackFromPlaylist={this.removeTrackFromPlaylist}
            />
        })

        return (
            <PlaylistDetailContainer>
                <TrackCreationForm onSubmit={this.addTrackToPlaylist} >
                    <div>
                        <label>Nome da música:</label>
                        <input 
                            placeholder="Nome da música"
                            name="trackName"
                            value={this.state.trackName}
                            onChange={this.changeInputValues}
                        />
                    </div>
                    <div>
                        <label>Artista:</label>
                        <input 
                            placeholder="Nome do Artista"
                            name="artist"
                            value={this.state.artist}
                            onChange={this.changeInputValues}
                        />
                    </div>
                    <div>
                        <label>URL da música:</label>
                        <input 
                            placeholder="URL da música"
                            name="url"
                            value={this.state.url}
                            onChange={this.changeInputValues}
                        />
                    </div>
                    <button type="submit" >Adicionar música</button>
                </TrackCreationForm>
                {tracks}
                <button onClick={() => this.props.changePage("playlists", "")} >Voltar para playlists</button>
            </PlaylistDetailContainer>
        )
    };
};

export default PlaylistDetail
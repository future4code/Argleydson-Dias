import React from "react";
import { PLaylistManangerPageContainer } from "../../style";
import Playlists from "../Playlists/Playlists";
import PlaylistDetail from "../PlaylistDetail/PlaylistDetail";


export default class PLaylistManangerPage extends React.Component {
    state = {
        currentPage: "playlists",
        playlistId: ""
    }

    changePage = (currentPage, playlistId) => {
        this.setState({
            currentPage: currentPage,
            playlistId: playlistId
        })
    }

    render() {
        const renderCurrentPage = () => {
            if (this.state.currentPage === "playlists") {
                return <Playlists 
                    changePage={this.changePage}
                />
            } else if (this.state.currentPage === "playlistDetail") {
                return <PlaylistDetail 
                    changePage={this.changePage}
                    playlistId={this.state.playlistId}
                />
            }
        }

        return (
            <PLaylistManangerPageContainer>
                {renderCurrentPage()}
            </PLaylistManangerPageContainer>
        )
    }
}

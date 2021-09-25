import React from 'react';
import axios from 'axios';
import { GlobalStyle } from "./globalStyles";
import Header from './components/Header/Header';
import { Container, Footer } from './style';
import PLaylistCreationForm from './components/PLaylistCreationForm/PLaylistCreationForm';
import PLaylistManangerPage from './components/PLaylistManangerPage/PLaylistManangerPage';



export default class App extends React.Component {
  state = {
    currentPage: "playlistManangerPage"
  }

    changePage = (currentPage) => {
      this.setState({currentPage: currentPage})
    }


  render() {
    
    const renderCurrentPage = () => {
      if (this.state.currentPage === "playlistCreationForm") {
        return <PLaylistCreationForm />
      } else if (this.state.currentPage === "playlistManangerPage") {
        return <PLaylistManangerPage />
      }
    }


    return (
      <div className="App">
        <GlobalStyle />
        <Container>
          <Header 
            changePage={this.changePage}
          />
          {renderCurrentPage()}
          <Footer>
            Atendimento
          </Footer>
        </Container>
      </div>
    );
  }
}



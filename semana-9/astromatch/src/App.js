import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "./components/constants/parameters.js"
import Profile from "./components/Profile/index.js";
import Matches from "./components/Matches/index.js";
import { GlobalStyle } from "./styles.js";

export default function App() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    axios
      .get(`${url}/person`)
      .then((res) => {
        setProfile(res.data.profile);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //se eu der like tem que ver se o usuario tb deu like 
  const choosePerson = (userChoice) => {
    const body = {
      id: profile.id,
      choice: userChoice,
    };
    axios
      .post(`${url}/choose-person`, body)
      .then((res) => {
        getProfile();
        if (res.data.isMatch === true) {
          alert(`Deu Match! Você já pode conversar com ${profile.name}!`);
          
        }
      })
      .catch((err) => {
        alert('Não foi possível realizar a ação, erro: ' + err.data);
      });
  };

  //mostrar a lista de matches
  const [matches, setMatches] = useState([]); //objeto, por isso []

  useEffect(() => {
    getMatches();
  }, [matches]);// matches aqui para atualizar a página da lista de matches

  const getMatches = () => {
    axios
      .get(`${url}/matches`)
      .then((res) => {
        setMatches(res.data.matches);
      })
      .catch((err) => {
        alert('Não foi possível realizar a ação, erro: ' + err.data);
      });
  };

  // Vassoura - Limpar os matches
  const clearMatches = () => {
    axios
      .put(`${url}/clear`)
      .then((res) => {
        setMatches([]);
        alert("Lista de Matches apagados!");
      })
      .catch((err) => {
        alert('Não foi possível realizar a ação, erro: ' + err.data);
      });
  };

  //trocar página
  const [page, setPage] = useState("profile");

  const changePage = (value) => {
    setPage(value);
  };

  //renderizar página
  const renderPage = (props) => {
    switch (props) {
      case "profile":
        return (
          profile && (
            <Profile
              clear={clearMatches}
              page={changePage}
              matches={matches} // para o Badge
              photo={profile.photo}
              name={profile.name}
              age={profile.age}
              bio={profile.bio}
              notChoosenPerson={choosePerson}
              choosenPerson={choosePerson}
            />
          )
        );
      case "matches":
        return (
          <Matches
            page={changePage}
            clear={clearMatches}
            matches={matches}
          />
        );
      default:
        return (<h1>Error: invalid page selected</h1>)
    }
  };

  return (
    <div>
      <GlobalStyle />
      {renderPage(page)}
    </div>);
};






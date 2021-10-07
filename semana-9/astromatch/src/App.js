import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "./components/constants/parameters.js"
import Profile from "./components/Profile/index.js";
import Matches from "./components/Matches/index.js";
import { GlobalStyle } from "./styles.js";

export default function App() {
  const [profile, setProfile] = useState({});
  // const [choosen, setChoosen] = useState(false);
  // const [choosen, setChoosen] = useState(false);

  //mostrar os perfis que podem dar matches
  // useEffect(() => {
  //   getProfile();
  // }, [choosen]);
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
  // const choosePerson = () => {
  //   const body = {
  //     id: profile.id,
  //     choice: choosen,
  //   };

  //   axios
  //     .post(`${url}/choose-person`, body)
  //     .then((res) => { })
  //     .catch((err) => { });
  // };

  // useEffect(() => {
  //   choosePerson();
  // }, [matches]);
  const choosePerson = (value) => {
    const body = {
      id: profile.id,
      choice: value,
    };
    axios
      .post(`${url}/choose-person`, body)
      .then((res) => {
        getProfile();
        if (res.data.isMatch === true) {
          // setChoosen(res.data.isMatch);
          alert("Deu Match!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // funções dos botões de escolher e não escolher o perfil
  // const choosenPerson = () => {
  //   setChoosen(!choosen);
  //   // setChoosen(true);
  // };

  // const notChoosenPerson = () => {
  //   setChoosen(!choosen);
  //   // setChoosen(false);
  // };

  // Vassoura - Limpar os matches
  const clearMatches = () => {
    axios
      .put(`${url}/clear`)
      .then((res) => {
        setMatches([]);
        alert("Lista de Matches apagados!");
      })
      .catch((err) => {
        alert("Erro. Tente novamente");
      });
  };


  const [matches, setMatches] = useState([]); //objeto, por isso []

  //mostrar a lista de matches
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
        console.log(err);
      });
  };


  //trocar página
  const [page, setPage] = useState("profile");

  const changePage = (value) => {
    setPage(value);
  };

  const renderPage = (props) => {
    switch (props) {
      case "profile":
        return (
          profile && (
            <Profile
              clear={clearMatches}
              page={changePage}
              photo={profile.photo}
              name={profile.name}
              age={profile.age}
              bio={profile.bio}
              // notChoosenPerson={notChoosenPerson}
              // choosenPerson={choosenPerson}
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
}






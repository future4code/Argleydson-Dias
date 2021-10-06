import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "./components/constants/parameters.js"
import Profile from "./components/Profile/index.js";
import Matches from "./components/Matches/index.js";

export default function App() {
  const [profile, setProfile] = useState({});
  const [choosen, setChoosen] = useState(false);
  const [page, setPage] = useState("profile");
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getProfile();
  }, [choosen]);
  //choosen

 const getProfile = () => {
    axios
      .get(`${url}/person`)
      .then((res) => {
        setProfile(res.data.profile);
      })
      .catch((err) => { });
  };

  useEffect(() => {
    getMatches();
  }, []);
  //vazio

 const getMatches = () => {
    axios
      .get(`${url}/matches`)
      .then((res) => {
        setMatches(res.data.matches);
        getMatches();
      })
      .catch((err) => { });
  };

  useEffect(() => {
    choosePerson();
  }, [matches]); 
  //matches

  const choosePerson = () => {
    const body = {
      id: profile.id,
      choice: choosen,
    };

    axios
      .post(`${url}/choose-person`, body)
      .then((res) => { })
      .catch((err) => { });      
  };
  // console.log(choosePerson)

  // botões de escolher e não escolher o perfil
  const choosenPerson = () => {
    setChoosen(!choosen);
  };

  const notChoosenPerson = () => {
    setChoosen(!choosen);
  };

  
  const changePage = (page) => {
    setPage(page);
  };

 
  // Limpar os matches
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


  const renderPage = (page) => {
    switch (page) {
      case "profile":
        return (
          profile && (
            <Profile
              name={profile.name}
              age={profile.age}
              bio={profile.bio}
              photo={profile.photo}
              choosenPerson={choosenPerson}
              notChoosenPerson={notChoosenPerson}
              choosePerson={choosePerson}
              page={changePage}
            />
          )
        );
      case "matches":
        return (
          <Matches
            page={changePage}
            matches={matches}
            clear={clearMatches}
          />
        );
        default: // deixar matchs para poder limpar a lista se der erro
          return (
            <Matches
              page={changePage}
              matches={matches}
              clear={clearMatches}
            />
          );
    }
  };

 

  return (
    <div>
      {renderPage(page)}
    </div>);
}






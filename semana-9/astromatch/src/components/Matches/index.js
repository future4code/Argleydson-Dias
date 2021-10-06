import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ClearIcon from "@material-ui/icons/Clear";
import { Container, HeaderContainer, MatchContainer, MatchesContainer } from "./styles";

export default function Matches(props) {
  return (
    <Container>
      <MatchesContainer>
        <HeaderContainer>
          <button
            onClick={() => {
              props.page("profile");
            }}
          >
            <ArrowBackIosIcon color="secondary" fontSize="large" />
          </button>
          <p>
            <span>astro</span>match
          </p>

          <button
            onClick={() => {
              props.clear();
            }}
          >
            <ClearIcon color="secondary" fontSize="large" />
          </button>
        </HeaderContainer>
        {props.matches &&
          props.matches.map((match) => {
            return (
              <MatchContainer>
                <img src={match.photo} />
                <p> {match.name}</p>
              </MatchContainer>
            );
          })}
      </MatchesContainer>
    </Container>
  );
}

 

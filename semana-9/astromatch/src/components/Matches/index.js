import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Logo from "../assets/logoTitle.png"
import Vassoura from "../assets/vassoura.gif"
import {
  ButtonBackProfile,
  ButtonClear,
  Container,
  HeaderContainer,
  ImgLogo, 
  MatchesContainer,
  MatchListContainer,  
  OutsideMatchListContainer
} from "./styles";

export default function Matches(props) {
  return (
    <Container>
      <MatchesContainer>

        <HeaderContainer>
          <ButtonBackProfile onClick={() => { props.page("profile") }}>
            <ArrowBackIosIcon color="secondary" fontSize="large" />
          </ButtonBackProfile>

          <ImgLogo src={Logo} />

          <ButtonClear onClick={() => { props.clear() }}>
            <img src={Vassoura} />
          </ButtonClear>
        </HeaderContainer>

        <OutsideMatchListContainer>
          {props.matches && props.matches.map((match) => {
            return (
              <MatchListContainer>
                <img src={match.photo} />
                <p> {match.name}</p>
              </MatchListContainer>
            );
          })}
        </OutsideMatchListContainer>

      </MatchesContainer>
    </Container>
  );
}



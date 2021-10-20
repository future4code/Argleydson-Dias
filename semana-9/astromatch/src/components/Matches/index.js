import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Logo from "../assets/logoTitle.png";
import Vassoura from "../assets/vassoura.gif";
import Coracao from "../assets/cupidoAnime.gif";
import {
  ButtonBackProfile,
  ButtonClear,
  Container,
  HeaderContainer,
  HeartContainer,
  ImgButtonClear,
  ImgLogo,
  ImgPhotoList,
  MatchesContainer,
  MatchListContainer,
  OutsideMatchListContainer,
  Photo
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
            <ImgButtonClear src={Vassoura} />
          </ButtonClear>
        </HeaderContainer>

        <OutsideMatchListContainer>
          {/* {props.matches && props.matches.map((match) => {            
            return (
              <MatchListContainer>
                <img src={match.photo} />
                <p> {match.name}</p>
              </MatchListContainer>
            );
          })} */}
          {props.matches.length !== 0 ? (
            <>
              {props.matches && props.matches.map((match) => {
                return (
                  <MatchListContainer>
                    <ImgPhotoList src={match.photo} />
                    <p> {match.name}</p>
                  </MatchListContainer>
                )
              })}
            </>) :
            <>
              <HeartContainer>Você ainda não tem Matches.</HeartContainer>
              <HeartContainer> Não Desista!</HeartContainer>
              <Photo src={Coracao} />
            </>
          }
        </OutsideMatchListContainer>

      </MatchesContainer>
    </Container>
  );
};



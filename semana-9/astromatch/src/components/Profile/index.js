import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ClearIcon from "@material-ui/icons/Clear";
import PeopleIcon from "@material-ui/icons/People";
import {
  ButtonClear,
  ButtonContainer,
  ButtonPeople,
  Container,
  HeaderContainer,
  ImgLogo,
  InformationContainer,
  ProfileContainer,
  ProfilePhoto
} from "./styles";
import Logo from "../assets/logoTitle.png"
import Vassoura from "../assets/vassoura.gif"

export default function Profile(props) {
  return (
    <Container>
      <ProfileContainer>

        <HeaderContainer>
          <ButtonClear onClick={() => { props.clear() }}>
            <img src={Vassoura} />
          </ButtonClear>

          <ImgLogo src={Logo} />

          <ButtonPeople onClick={() => { props.page("matches") }}>
            <PeopleIcon color="secondary" fontSize="large" />
          </ButtonPeople>
        </HeaderContainer>

        <ProfilePhoto photo={props.photo} />

        <InformationContainer>
          <div>
            <p>
              {props.name}, {props.age}
            </p>
          </div>
          <p> {props.bio}</p>
        </InformationContainer>

        <ButtonContainer>
          <button
            onClick={() => { props.notChoosenPerson(); }}>
            <ClearIcon color="primary" fontSize="large" />
          </button>
          <button
            onClick={() => { props.choosenPerson() }}>
            <FavoriteIcon color="secondary" />
          </button>
        </ButtonContainer>

      </ProfileContainer>
    </Container>
  );
};


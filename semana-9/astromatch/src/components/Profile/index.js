import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ClearIcon from "@material-ui/icons/Clear";
import PeopleIcon from "@material-ui/icons/People";
import Badge from '@material-ui/core/Badge';
import Logo from "../assets/logoTitle.png";
import Vassoura from "../assets/vassoura.gif";
import {
  ButtonClear,
  ButtonContainer,
  ButtonPeople,
  ChoosenPersonButton,
  Container,
  HeaderContainer,
  ImgButtonClear,
  ImgLogo,
  InformationContainer,
  NotChoosenPersonButton,
  ProfileContainer,
  ProfilePhoto,
  ProfilePhotoBg
} from "./styles";

export default function Profile(props) {  
  console.log(props)  
  return (
    <Container>
      <ProfileContainer>

        <HeaderContainer>
          <ButtonClear onClick={() => { props.clear() }}>
            <ImgButtonClear src={Vassoura} />
          </ButtonClear>

          <ImgLogo src={Logo} />

          <Badge badgeContent={props.matches.length} color="secondary">            
            <ButtonPeople onClick={() => { props.page("matches") }}>
              <PeopleIcon color="secondary" fontSize="large" />
            </ButtonPeople>
          </Badge>
        </HeaderContainer>

        <ProfilePhotoBg photo={props.photo} />
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
          <NotChoosenPersonButton
            onClick={() => { props.notChoosenPerson(false); }}>
            <ClearIcon color="primary" fontSize="large" />
          </NotChoosenPersonButton>
          <ChoosenPersonButton
            onClick={() => { props.choosenPerson(true) }}>
            <FavoriteIcon color="secondary" />
          </ChoosenPersonButton>
        </ButtonContainer>

      </ProfileContainer>
    </Container>
  );
};


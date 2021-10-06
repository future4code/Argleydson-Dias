import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ClearIcon from "@material-ui/icons/Clear";
import PeopleIcon from "@material-ui/icons/People";
import {
  ButtonContainer,
  Container,
  HeaderContainer,
  InformationContainer,
  ProfileContainer,
  ProfilePrimary,
  ProfileSecondary
} from "./styles";

export const Profile = (props) => {
  return (
    <Container>
      <ProfileContainer>
        <HeaderContainer>
          <p>
            <span>astro</span>match
          </p>
          <p>
            <button
              onClick={() => {
                props.page("matches");
              }}
            >
              <PeopleIcon color="secondary" fontSize="large" />
            </button>
          </p>
        </HeaderContainer>

        <ProfilePrimary photo={props.photo} />
        <ProfileSecondary photo={props.photo} />

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
            onClick={() => {
              props.notChoosenPerson();
            }}
          >
            <ClearIcon color="primary" fontSize="large" />
          </button>
          <button
            onClick={() => {
              props.choosenPerson();
            }}
          >
            <FavoriteIcon color="secondary" />
          </button>
        </ButtonContainer>
      </ProfileContainer>
    </Container>
  );
};
export default Profile;

import React from 'react';
import LogOut from "./LogOut";
import ProfilePicture from "./ProfilePicture";
import StyledUserInfo from './StyledUserInfo';


const UserInfo = () => {
  return (
    <StyledUserInfo>
      <ProfilePicture />
      <LogOut>
          Sair
      </LogOut>
    </StyledUserInfo>
  );
};
export default UserInfo;

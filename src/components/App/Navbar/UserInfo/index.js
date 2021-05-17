import LogOut from "./LogOut";
import ProfilePicture from "./ProfilePicture";
import Wrapper from '../../../shared/Wrapper';

const UserInfo = () => {
  return (
    <Wrapper>
      <ProfilePicture />
      <LogOut>
          Sair
      </LogOut>
    </Wrapper>
  );
};
export default UserInfo;

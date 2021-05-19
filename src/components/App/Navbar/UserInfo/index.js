import { useDispatch } from "react-redux";
import { setLogged } from "../../../../redux/actions/log";
import LogOut from "./LogOut";
import ProfilePicture from "./ProfilePicture";
import StyledUserInfo from './StyledUserInfo';

const UserInfo = () => {
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(setLogged(false));
    localStorage.setItem("rememberMe", false);
  }
  return (
    <StyledUserInfo>
      <ProfilePicture />
      <LogOut onClick = {logOutHandler}>
          Sair
      </LogOut>
    </StyledUserInfo>
  );
};
export default UserInfo;

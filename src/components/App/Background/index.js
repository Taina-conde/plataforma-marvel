import BackgroundImg from "./BackgroundImg";
import StyledBackground from "./StyledBackground";

const Background = (props) => {
  return (
    <StyledBackground >
      <BackgroundImg login = {props.login}/>
      {props.children}
    </StyledBackground>
  );
};
export default Background;

import StyledSliderButton from "./StyledSliderButton";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const SliderButton = (props) => {
  return (
    <StyledSliderButton onClick={props.onClick}>
      {props.direction === "right" ? (
        <FaArrowRight size={60} color="#FF0000" />
      ) : (
        <FaArrowLeft size={60} color="#FF0000" />
      )}
    </StyledSliderButton>
  );
};
export default SliderButton;

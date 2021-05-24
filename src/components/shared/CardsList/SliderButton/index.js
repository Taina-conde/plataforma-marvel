import StyledSliderButton from "./StyledSliderButton";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
const SliderButton = (props) => {
  return (
    <StyledSliderButton onClick={props.onClick}>
      {props.direction === "right" ? (
        
        <RiArrowDownSLine size={60} color="#FF0000" />
      ) : (
        
        <RiArrowUpSLine size={60} color="#FF0000" />
      )}
    </StyledSliderButton>
  );
};
export default SliderButton;

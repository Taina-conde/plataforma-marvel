import StyledDetailsCard from "./StyledDetailsCard";
import CloseButton from "../../CloseButton";

const DetailsCard = (props) => {
  return (
    <StyledDetailsCard displayPosition = {props.displayPosition} {...props}>
      <CloseButton onClick={() => props.onClickHandler()} details/>
    </StyledDetailsCard>
  );
};
export default DetailsCard;

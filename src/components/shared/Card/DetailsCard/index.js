import StyledDetailsCard from "./StyledDetailsCard";
import CloseButton from "../../CloseButton";
import DetailsWrapper from "./DetailsWrapper";
import DetailsInfo from "./DetailsInfo";

const DetailsCard = (props) => {

  const { displayPosition, selected, backgroundImg } = props;
  return (
    <StyledDetailsCard displayPosition={displayPosition} selected={selected} backgroundImg = {backgroundImg}>
      <DetailsWrapper displayPosition={displayPosition}>
       <DetailsInfo/>
      </DetailsWrapper>
      <CloseButton onClick={() => props.onClickHandler()} details />
    </StyledDetailsCard>
  );
};
export default DetailsCard;

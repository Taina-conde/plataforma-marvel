import StyledDetailsCard from "./StyledDetailsCard";
import CloseButton from "../../CloseButton";
import DetailsWrapper from "./DetailsWrapper";
import { useSelector } from "react-redux";


const DetailsCard = (props) => {
  const category = useSelector( state => state.selectedCard.category)
    const {displayPosition} = props;
    console.log('category', category)
  return (
    <StyledDetailsCard displayPosition = {displayPosition} {...props}>
        <DetailsWrapper displayPosition = {displayPosition}>
          


        </DetailsWrapper>
      <CloseButton onClick={() => props.onClickHandler()} details/>
    </StyledDetailsCard>
  );
};
export default DetailsCard;

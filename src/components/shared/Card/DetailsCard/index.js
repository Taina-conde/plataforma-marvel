import StyledDetailsCard from "./StyledDetailsCard";
import CloseButton from "../../CloseButton";
import DetailsWrapper from "./DetailsWrapper";
import DetailsTitle from "./DetailsTitle";
import DetailsParagraph from "./DetailsParagraph";
import DetailsSubtitle from "./DetailsSubtitle";
import { useSelector } from "react-redux";

const DetailsCard = (props) => {
    const {cardContent, displayPosition} = props;
  return (
    <StyledDetailsCard displayPosition = {displayPosition} {...props}>
        <DetailsWrapper displayPosition = {displayPosition}>
            <DetailsTitle>
                {props.nome}
            </DetailsTitle>
            <DetailsSubtitle>
                Aparições: 
            </DetailsSubtitle>
            <DetailsParagraph>
                {props.descricao}
            </DetailsParagraph>
            <DetailsSubtitle>
                {} 
            </DetailsSubtitle>


        </DetailsWrapper>
      <CloseButton onClick={() => props.onClickHandler()} details/>
    </StyledDetailsCard>
  );
};
export default DetailsCard;

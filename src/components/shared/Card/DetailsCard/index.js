import StyledDetailsCard from "./StyledDetailsCard";
import CloseButton from "../../CloseButton";
import DetailsWrapper from "./DetailsWrapper";
import DetailsTitle from "./shared/DetailsTitle";
import DetailsParagraph from "./shared/DetailsParagraph";
import DetailsSubtitle from "./shared/DetailsSubtitle";

const DetailsCard = (props) => {
    const {cardContent, displayPosition} = props;
  return (
    <StyledDetailsCard displayPosition = {displayPosition} {...props}>
        <DetailsWrapper displayPosition = {displayPosition}>
            <DetailsTitle>
                {cardContent.nome}
            </DetailsTitle>
            <DetailsSubtitle>
                Aparições: 
            </DetailsSubtitle>
            <DetailsParagraph>
                {cardContent.descricao}
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

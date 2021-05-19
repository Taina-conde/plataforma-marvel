import StyledMiniCard from "./StyledMiniCard";
import StyledTitle from "./StyledTitle";
import StyledParagraph from "./StyledParagraph";
import StyledDetailsButton from "./StyledDetailsButton";


const MiniCard = (props) => {
  const { nome, descricao, onClickHandler } = props;
  const clickDetailsHandler = ()=> {
    //dispatch action to set selected card
    //call onClickHandler
  }
    return (
    <StyledMiniCard>
      <StyledTitle>{nome}</StyledTitle>
      <StyledParagraph>{descricao}</StyledParagraph>
      <StyledDetailsButton onClick = {clickDetailsHandler}>ver detalhes</StyledDetailsButton>
    </StyledMiniCard>
  );
};
export default MiniCard;

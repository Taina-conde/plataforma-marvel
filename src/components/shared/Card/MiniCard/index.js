import StyledMiniCard from "./StyledMiniCard";
import StyledTitle from "./StyledTitle";
import StyledParagraph from "./StyledParagraph";
import StyledDetailsButton from "./StyledDetailsButton";

const MiniCard = (props) => {
  const { nome, descricao, onClickHandler } = props;
  return (
    <StyledMiniCard>
      <StyledTitle>{nome}</StyledTitle>
      <StyledParagraph>{descricao}</StyledParagraph>
      <StyledDetailsButton onClick = {() => onClickHandler() }>ver detalhes</StyledDetailsButton>
    </StyledMiniCard>
  );
};
export default MiniCard;

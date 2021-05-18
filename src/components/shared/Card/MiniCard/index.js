import StyledMiniCard from "./StyledMiniCard";
import StyledTitle from "./StyledTitle";
import StyledParagraph from "./StyledParagraph";

const MiniCard = (props) => {
  const { nome, descricao } = props;
  return <StyledMiniCard>
      <StyledTitle>
          {nome}
      </StyledTitle>
      <StyledParagraph>
          {descricao}
      </StyledParagraph>
  </StyledMiniCard>;
};
export default MiniCard;

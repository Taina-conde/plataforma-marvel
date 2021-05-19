import { useSelector } from "react-redux";
import DetailsParagraph from "./shared/DetailsParagraph";
import DetailsSubtitle from "./shared/DetailsSubtitle";
import DetailsTitle from "./shared/DetailsTitle";
import StreamingImg from "../../StreamingImg";

const DetailsInfo = () => {
  const category = useSelector((state) => state.selectedCard.category);
  const card = useSelector((state) => state.selectedCard.card);
  return (
    <>
      <DetailsTitle>{card.nome}</DetailsTitle>
      {category === "personagens" && (
        <>
          <DetailsSubtitle>Aparições:</DetailsSubtitle>
          {card.aparicoes.map( aparicao => <DetailsParagraph>
              {aparicao}
          </DetailsParagraph>)}
          <DetailsSubtitle>Avaliações dos Fãs</DetailsSubtitle>
        </>
      )}
      {category === "filmes" && (
        <>
          <DetailsParagraph>{card.descricao}</DetailsParagraph>
          <DetailsParagraph>Disponível em streaming:</DetailsParagraph>
          <StreamingImg/>
          <DetailsSubtitle>Crítica</DetailsSubtitle>
        </>
      )}
    </>
  );
};
export default DetailsInfo;

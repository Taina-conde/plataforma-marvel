import { useSelector } from "react-redux";
import DetailsParagraph from "./shared/DetailsParagraph";
import DetailsSubtitle from "./shared/DetailsSubtitle";
import DetailsTitle from "./shared/DetailsTitle";
import AppImg from "../../AppImg";
import disney from "../../../../utils/assets/img/disney.png"
import amazon from "../../../../utils/assets/img/amazon.png";
import americanas from "../../../../utils/assets/img/americanas.png"

const DetailsInfo = () => {
  const category = useSelector((state) => state.selectedCard.category);
  const card = useSelector((state) => state.selectedCard.card);
  let nome = [card.nome];
  if (card.nome.includes(":")) {
    nome = card.nome.split(":");
  }
  console.log("nome array", nome)
  return (
    <>
      {nome.map( (item, index) => <DetailsTitle>{index === 0 ? item + ": " : item }</DetailsTitle>)}
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
          <AppImg app = {disney} alt = "disney"/>
          <DetailsSubtitle>Crítica</DetailsSubtitle>
        </>
      )}
      {category === "hqs" && (
          <>
          <DetailsParagraph>{card.descricao}</DetailsParagraph>
          <DetailsParagraph>Disponível para compra: </DetailsParagraph>
          <AppImg app = {americanas} alt = "americanas"/><AppImg app = {amazon} alt = "amazon"/>
          <DetailsSubtitle>Crítica</DetailsSubtitle>
          </>
      )}
    </>
  );
};
export default DetailsInfo;

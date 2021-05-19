import { useState } from "react";
import StyledCard from "./StyledCard";
import MiniCard from "./MiniCard";
import DetailsCard from "./DetailsCard";

const Card = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const { cardContent, displayPosition } = props;
  const clickHandler = () => {
      setShowDetails(!showDetails);
  };

  return (
    <StyledCard backgroundImg={cardContent.imgUrl}>
      {showDetails === false ? (
        <MiniCard
          descricao={cardContent.descricao}
          nome={cardContent.nome}
          onClickHandler={clickHandler}
        />
      ) : (
        <DetailsCard 
            displayPosition = {displayPosition}
            nome = {cardContent.nome}
            descricao = {cardContent.descricao}
            onClickHandler = {clickHandler}
        />
      )}
    </StyledCard>
  );
};
export default Card;

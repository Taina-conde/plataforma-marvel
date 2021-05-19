import { useState } from "react";
import StyledCard from "./StyledCard";
import MiniCard from "./MiniCard";
import DetailsCard from "./DetailsCard";
import Overlay from "./Overlay";
import Wrapper from "./Wrapper";

const Card = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const { cardContent, displayPosition } = props;
  const clickHandler = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <Wrapper>
        <StyledCard
          backgroundImg={cardContent.imgUrl}
          selected = {showDetails}
        ></StyledCard>
        {showDetails === false ? (
          <MiniCard
            descricao={cardContent.descricao}
            nome={cardContent.nome}
            onClickHandler={clickHandler}
          />
        ) : (
          <DetailsCard
            displayPosition={displayPosition}
            nome={cardContent.nome}
            descricao={cardContent.descricao}
            onClickHandler={clickHandler}
            selected = {showDetails}
          />
        )}
      </Wrapper>

      {showDetails && <Overlay onClick={() => clickHandler()} />}
    </>
  );
};
export default Card;

import { useState } from "react";
import StyledCard from "./StyledCard";
import MiniCard from "./MiniCard";
import DetailsCard from "./DetailsCard";
import Overlay from "./Overlay";
import Wrapper from "./Wrapper";
import { useDispatch } from "react-redux";
import { selectCard } from "../../../redux/actions/selectedCard";

const Card = (props) => {
  const dispatch = useDispatch();
  const [showDetails, setShowDetails] = useState(false);
  const { cardContent, displayPosition, contentType } = props;

  const clickHandler = () => {
    setShowDetails(!showDetails);
  };

  const clickDetailsHandler = () => {
    dispatch(selectCard(contentType, cardContent));
    clickHandler();
  };

  return (
    <>
      <Wrapper>
        <StyledCard
          backgroundImg={cardContent.imgUrl}
          selected={showDetails}
        ></StyledCard>
        {showDetails === false ? (
          <MiniCard
            nome={cardContent.nome}
            descricao = {cardContent.descricao}
            onClickDetailsHandler={clickDetailsHandler}
          />
        ) : (
          <DetailsCard
            displayPosition={displayPosition}
            onClickHandler={clickHandler}
            selected={showDetails}
          />
        )}
      </Wrapper>

      {showDetails && <Overlay onClick={() => clickHandler()} />}
    </>
  );
};
export default Card;

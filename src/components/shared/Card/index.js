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
            cardContent = {cardContent}
            onClickHandler={clickHandler}
          />
        ) : (
          <DetailsCard
            displayPosition={displayPosition}
            cardContent = {cardContent}
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

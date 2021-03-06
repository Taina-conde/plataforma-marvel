import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card";
import StyledWrapper from "./StyledWrapper";
import SliderButton from "./SliderButton";
import BtnContainer from "./BtnContainer";
import Filter from "./Filter";

const CardsList = (props) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);
  const [filterBy, setFilterBy] = useState("");

  const { contentType } = props;
  const contentObj = useSelector((state) => state[contentType]);

  let contentArr = Object.keys(contentObj);
  if (contentType === "filmes" && filterBy === "lancamento") {
    contentArr.sort(
      (a, b) => contentObj[b].lancamento - contentObj[a].lancamento
    );
  } else if (contentType === "filmes" && filterBy === "cronologia") {
    contentArr.sort(
      (a, b) => contentObj[a].cronologia - contentObj[b].cronologia
    );
  }

  const nextHandler = () => {
    setStart(start + 1);
    setEnd(end + 1);
  };
  const prevHandler = () => {
    setStart(start - 1);
    setEnd(end - 1);
  };

  const onSelectFilterHandler = (value) => {
    setFilterBy(value);
  };

  return (
    <>
      {contentType === "filmes" && (
        <Filter
          filterBy={filterBy}
          onSelectFilterHandler={onSelectFilterHandler}
        />
      )}

      <StyledWrapper>
        <BtnContainer>
          {start > 0 && <SliderButton onClick={prevHandler} direction="left" />}
        </BtnContainer>
        {contentArr
          .filter((item, index) => index >= start && index < end)
          .map((item, index) => {
            const displayPosition = index;
            return (
              <Card
                key={index}
                displayPosition={displayPosition}
                cardContent={contentObj[item]}
                contentType={contentType}
              />
            );
          })}
        <BtnContainer>
          {end < contentArr.length && (
            <SliderButton onClick={nextHandler} direction="right" />
          )}
        </BtnContainer>
      </StyledWrapper>
    </>
  );
};
export default CardsList;

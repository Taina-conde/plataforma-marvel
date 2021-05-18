import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card";
import StyledWrapper from "./StyledWrapper";
import SliderButton from "./SliderButton";

const Wrapper = (props) => {
  const [ start, setStart ] = useState(0);
  const [ end, setEnd] = useState(3);
  const { contentType } = props;
  const contentObj = useSelector((state) => state[contentType]);
  const contentArr = Object.keys(contentObj);
  const nextHandler = () => {
    setStart(start + 1)
    setEnd(end + 1)
  }
  const prevHandler = () => {
    setStart(start - 1)
    setEnd(end - 1)
  }

  return (
    <StyledWrapper>
      {start > 0 && <SliderButton onClick = {prevHandler} direction = "left"/>}
      {contentArr
        .filter((item, index) => (index >= start && index < end))
        .map((item) => {
          return (
            <Card key={contentObj[item].nome} cardContent={contentObj[item]}>
              {contentObj[item].nome}
            </Card>
          );
        })}
      {end < contentArr.length && <SliderButton onClick = {nextHandler} direction = "right"/>}
    </StyledWrapper>
  );
};
export default Wrapper;

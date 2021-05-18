import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card";
import StyledWrapper from "./StyledWrapper";
import NextButton from "./NextButton";

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

  return (
    <StyledWrapper>
      {contentArr
        .filter((item, index) => (index >= start && index < end))
        .map((item) => {
          return (
            <Card key={contentObj[item].nome} cardContent={contentObj[item]}>
              {contentObj[item].nome}
            </Card>
          );
        })}
      {end < contentArr.length && <NextButton onClick = {nextHandler}/>}
    </StyledWrapper>
  );
};
export default Wrapper;

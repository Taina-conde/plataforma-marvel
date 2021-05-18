import { useSelector } from "react-redux";
import Card from "../Card";
import StyledWrapper from "./StyledWrapper";
import NextButton from "./NextButton";

const Wrapper = (props) => {
  const { contentType } = props;
  const contentObj = useSelector((state) => state[contentType]);
  const contentArr = Object.keys(contentObj);

  return (
    <StyledWrapper>
      {contentArr
        .filter((item, index) => index < 3)
        .map((item) => {
          return (
            <Card key={contentObj[item].nome} cardContent={contentObj[item]}>
              {contentObj[item].nome}
            </Card>
          );
        })}
      <NextButton />
    </StyledWrapper>
  );
};
export default Wrapper;

import { useSelector } from "react-redux";
import Card from "../Card";
import StyledWrapper from "./StyledWrapper";

const Wrapper = (props) => {
  const { contentType } = props;
  const contentObj = useSelector((state) => state[contentType]);
  const contentArr = Object.keys(contentObj);

  return (
    <StyledWrapper>
      {contentArr.map((item) => {
        return <Card key={contentObj[item].nome}>{contentObj[item].nome}</Card>;
      })}
    </StyledWrapper>
  );
};
export default Wrapper;

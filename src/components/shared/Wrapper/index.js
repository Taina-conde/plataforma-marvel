import Card from "../Card";
import StyledWrapper from "./StyledWrapper";

const Wrapper = (props) => {
  const { content } = props;
  return (
    <StyledWrapper>
      {content.map((item) => {
        return <Card key = {item.name}>{item.name}</Card>;
      })}
    </StyledWrapper>
  );
};
export default Wrapper;

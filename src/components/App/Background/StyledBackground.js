import styled from "styled-components";

const StyledBackground = styled.div`
  min-height: ${(props) => props.minHeight}px;
  padding: 0;
  margin: 0;
  @media (min-width: 1024px) {
    position: relative;
    z-index: -1;
  }
`;
export default StyledBackground;
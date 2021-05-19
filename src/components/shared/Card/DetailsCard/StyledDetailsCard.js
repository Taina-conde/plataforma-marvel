import styled from "styled-components";
import StyledCard from "../StyledCard";

const StyledDetailsCard = styled(StyledCard)`
  width: 659px;
  height: 439px;
  background: transparent linear-gradient(90deg, #ff0000 0%, #400e0e 100%) 0% 0%
    no-repeat padding-box;
  position: absolute;
  top: 0;
  ${(props) => (props.displayPosition === 0 ? "left: 0;" : "right: 0;")}
  ${props => props.selected && "z-index: 998;"}

`;

export default StyledDetailsCard;

import styled from "styled-components";
import StyledCard from "../StyledCard";

const StyledDetailsCard = styled(StyledCard)`
  width: 659px;
  height: 439px;
  background-image: url(${(props) =>
    props.backgroundImg}), linear-gradient(90deg, ${(props) =>
  props.displayPosition === 0
    ? "#ff0000 50%, #400e0e 100%"
    : "#400e0e 0%, #ff0000 50%"} ); 
  background-position: ${(props) =>
    props.displayPosition === 0 ? "left;" : "right;"}
  position: absolute;
  top: 0;
  ${(props) => (props.displayPosition === 0 ? "left: 0;" : "right: 0;")}
  ${(props) => props.selected && "z-index: 999;"}

`;

export default StyledDetailsCard;

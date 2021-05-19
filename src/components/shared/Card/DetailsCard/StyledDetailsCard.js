import styled from "styled-components";
import StyledCard from "../StyledCard";

const StyledDetailsCard = styled(StyledCard)`
width: 659px;
height: 439px;
background: transparent linear-gradient(90deg, var(--unnamed-color-ff0000) 0%, #400E0E 100%) 0% 0% no-repeat padding-box;
background: transparent linear-gradient(90deg, #FF0000 0%, #400E0E 100%) 0% 0% no-repeat padding-box;
opacity: 1;
position: absolute;
top: 0;
${props => props.displayPosition === 0 ? "left: 0;" : "right: 0;"}
`

export default StyledDetailsCard;
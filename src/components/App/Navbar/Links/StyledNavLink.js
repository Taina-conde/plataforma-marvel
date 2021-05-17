import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
margin: 0 20px;
  font-size: 30px;
  font: normal normal bold 30px/36px Axiforma;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 0.25;
  text-decoration: none;
  &.active {
      opacity: 1;
  }
  
`;
export default StyledNavLink;

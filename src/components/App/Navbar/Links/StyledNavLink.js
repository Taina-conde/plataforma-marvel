import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
  font-size: 30px;
  font: normal normal bold 30px/36px Axiforma;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 0.25;
  text-decoration: none;
  padding: 10px 0;
  &.active {
      opacity: 1;
  }
  @media (min-width: 768px) {
    margin: 0 20px;
    padding: 0;
  }
  
`;
export default StyledNavLink;

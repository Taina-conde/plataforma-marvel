import styled, { css } from "styled-components";
import { translate, translateY } from "../../../utils/animations";

const animationMd = props => css`
  ${translate} 3s ease both;
`
const animationSm = props => css`
  ${translateY} 2s ease both;
`

const RedRectangle = styled.div`
  width: 122px;
  height: 54px;
  background: var(--unnamed-color-ff0000) 0% 0% no-repeat padding-box;
  background: #ff0000 0% 0% no-repeat padding-box;
  opacity: 1;
  font: normal normal normal 50px/60px Marvel;
  letter-spacing: 0px;
  color: #ffffff;
  text-align: center;
  align-self: center;
  margin-top: 50px;
  position: fixed;
  animation: ${animationSm}
  @media (min-width: 1024px) {
     
    animation:${animationMd}
    margin-top: 0;
  }
`;
export default RedRectangle;

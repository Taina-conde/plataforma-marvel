import styled, { css } from "styled-components";
import {
  TranslateXYAnimation,
  TranslateYAnimation,
} from "../../animations/animations";

const animationMd = css`
  ${TranslateXYAnimation} 3s ease both
`;
const animationSm = css`
  ${TranslateYAnimation} 3s ease both
`;

const RedRectangle = styled.div`
  background: var(--unnamed-color-ff0000) 0% 0% no-repeat padding-box;
  background: #ff0000 0% 0% no-repeat padding-box;
  opacity: 1;
  letter-spacing: 0px;
  color: #ffffff;
  text-align: center;
  align-self: center;
  margin-top: 50px;
  ${(props) =>
    props.login
      ? css`
          width: 237px;
          height: 95px;
          position: fixed;
          font: normal normal normal 100px/120px Marvel;
          animation: ${animationSm};
          @media (min-width: 1024px) {
            animation: ${animationMd};
          }
        `
      : css`
          width: 122px;
          height: 54px;
          font: normal normal normal 50px/60px Marvel;
          @media (min-width: 1024px) {
            margin-top: 0;
          }
        `}
`;
export default RedRectangle;

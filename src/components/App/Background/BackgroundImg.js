import styled, { css } from "styled-components";
import { fadeIn } from "../../../utils/animations";
import backgroundImg from "../../../utils/assets/img/background@2x.png";

const animation = props => css`
  ${fadeIn} 2s ease 1s both;
`


export const BackgroundImg = styled.div`
  @media (min-width: 1024px) {
    background-image: url(${backgroundImg});
    background-image: linear-gradient(
        89deg,
        #000000 0%,
        #212121bc 67%,
        #80808000 100%
      ),
      url(${backgroundImg});
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    top: 3px;
    left: 669px;
    width: 855px;
    height: 768px;
    animation: ${animation};

  }
`;
export default BackgroundImg;
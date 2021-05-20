import styled from "styled-components";
import backgroundImg from "../../../utils/assets/img/background@2x.png";

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
  }
`;
export default BackgroundImg;
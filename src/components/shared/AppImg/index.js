import styled from "styled-components";
import disneyLogo from "../../../utils/assets/img/logo-grande@2x.png";

const AppImg = styled.img.attrs((props) => ({
  src: props.app,
  alt: props.alt,
}))`
  width: 49px;
  height: 47px;
  ${(props) => props.alt === "disney" && `background : url(${disneyLogo});`}
`;
export default AppImg;

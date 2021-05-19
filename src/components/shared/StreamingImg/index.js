import styled from "styled-components";
import disney from "../../../utils/assets/img/logo-grande@2x.png"

const StreamingImg = styled.img.attrs(() => ({
    src: disney,
    alt: "Disney Plus"
}))`
  width: 49px;
  height: 47px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 9px;
`;
export default StreamingImg;
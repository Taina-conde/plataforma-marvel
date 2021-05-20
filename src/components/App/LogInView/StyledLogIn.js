import styled, { css } from "styled-components";
import { fadeIn } from "../../../utils/animations";

const animation = props => css`
  ${fadeIn} 2s ease 1.8s both
`

const StyledLogIn = styled.form`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 height: 100vh;
 position: relative;
 @media (min-width: 1024px) {
    margin-left: 65px;
    align-items: flex-start;
 }
 
`
export default StyledLogIn;
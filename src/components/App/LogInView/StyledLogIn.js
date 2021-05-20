import styled, { css } from "styled-components";
import { FadeInAnimation } from "../../animations/animations";

const animation = props => css`
  ${FadeInAnimation} 2s ease 1.8s both
`

const StyledLogIn = styled.form`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 height: 100vh;
 position: relative;
 animation: ${animation};
 @media (min-width: 1024px) {
    margin-left: 95px;
    width: 430px;
    
 }
 
`
export default StyledLogIn;
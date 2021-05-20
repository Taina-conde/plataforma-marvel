import styled from "styled-components";

const Button = styled.button`
    background: transparent;
    border: none;
    border-bottom: ${props => props.cadastro ? "none" : "1px solid #FF0000"};
    color: ${props => props.cadastro ? "#FF0000": "#84848D"};
    font-size: ${props => props.cadastro ? "20px": "15px"};
    margin-left: ${ props => props.cadastro ? "0;" : "50px;"}
    height: 24px;
`
export default Button;
import styled from "styled-components";
const Label = styled.label`
  font: normal normal 300 ${props => props.htmlFor ? "15px": "20px" } Axiforma;
  letter-spacing: 0px;
  color: #84848d;
`;
export default Label;
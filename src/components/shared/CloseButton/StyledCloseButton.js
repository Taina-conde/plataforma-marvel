import styled from 'styled-components';

const StyledCloseButton = styled.button`
    background-color: transparent;
    border: none;
    color: #ffffff;
    align-self: flex-end;
    ${props => props.details && "position: absolute; bottom: 10px; right: 10px;"}
`
export default StyledCloseButton;
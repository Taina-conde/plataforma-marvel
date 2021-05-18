import styled from 'styled-components';

const StyledMenuButton = styled.button`
    display: flex;
    align-self:center;
    border: 1px solid #ff0000;
    color: rgba(255, 255, 255, 0.4);
    background-color: black;
    padding: 8px;
    border-radius: 10px;
    @media (min-width: 768px) {
        display: none;
    }
`
export default StyledMenuButton;
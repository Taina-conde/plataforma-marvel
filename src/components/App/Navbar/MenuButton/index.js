import styled from 'styled-components';

const MenuButton = styled.button`
    border: 1 px solid #ffffff;
    color: #ffffff;
    opacity: 0.25;
    padding: 15px;
    border-radius: 10px;
    @media (min-width: 768px) {
        display: none;
    }
`
export default MenuButton;
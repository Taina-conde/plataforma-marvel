import styled from 'styled-components';

const NavLinkGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 20px 0 40px 0;
    margin: 0 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        padding: 0;
        border-bottom: none;
    }
`
export default NavLinkGroup;
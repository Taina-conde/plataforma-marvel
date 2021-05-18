import styled from 'styled-components';

const NavLinkGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
    }
`
export default NavLinkGroup;
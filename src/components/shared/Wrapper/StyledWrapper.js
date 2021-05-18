import styled from 'styled-components';

const StyledWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    list-style-type: none;
    @media (min-width: 1024px) {
        flex-direction: row;
    }
    
   
`
export default StyledWrapper;
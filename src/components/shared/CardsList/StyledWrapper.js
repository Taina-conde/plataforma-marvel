import styled from 'styled-components';

const StyledWrapper = styled.ul`
    display: flex;
    padding: 0 40px;
    
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    list-style-type: none;
    @media (min-width: 1024px) {
        flex-direction: row;
    }
    
   
`
export default StyledWrapper;
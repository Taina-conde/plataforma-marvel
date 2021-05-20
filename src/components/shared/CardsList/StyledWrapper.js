import styled from 'styled-components';

const StyledWrapper = styled.ul`
    display: flex;
    padding: 40px 0;
    margin: 0;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    list-style-type: none;
    @media (min-width: 1024px) {
        flex-direction: row;
        padding-top: 100px;
    }
    
   
`
export default StyledWrapper;
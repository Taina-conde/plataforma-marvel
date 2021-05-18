import styled from 'styled-components';


const StyledCard = styled.div`
width: 289px;
height: 439px;
background: transparent url(${props => props.backgroundImg}) 0% 0% no-repeat padding-box;
border-radius: 30px;
opacity: 1;
position: relative;
`
export default StyledCard;
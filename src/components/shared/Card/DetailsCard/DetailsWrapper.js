import styled from "styled-components";

const DetailsWrapper = styled.div`
    position: absolute;
    margin: 30px;
    width: 276px;
    ${props => (props.displayPosition === 0)? "right: 0;" : "left: 0;"}
`
export default DetailsWrapper;
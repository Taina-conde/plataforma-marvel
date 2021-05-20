import styled from "styled-components";

const Overlay = styled.div`
  
  background: transparent
    linear-gradient(89deg, #000000 0%, #212121bc 67%, #80808000 100%)
    no-repeat padding-box;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 998; 
    transition: all 0.5s ease-in-out;
`;
export default Overlay;

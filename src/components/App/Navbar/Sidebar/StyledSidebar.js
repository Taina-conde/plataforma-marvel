import styled from "styled-components";

const StyledSidebar = styled.div`
  display: ${(props) => (props.toggleSidebar ? "flex" : "none")};
  flex-direction: column;
  min-width: 250px;
  max-width: 250px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  padding: 2rem 1rem 1rem 1rem;
  background-color: #1a1a1a;
  z-index: 9999;
`;
export default StyledSidebar;

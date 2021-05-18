import StyledSidebar from './StyledSidebar';
const Sidebar = (props) => {
    return (
        <StyledSidebar toggleSidebar = {props.toggleSidebar}>
            {props.children}
        </StyledSidebar>
    )
}
export default Sidebar;
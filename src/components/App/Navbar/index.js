import { useState } from 'react';
import Logo from '../../shared/Logo';
import StyledNav from './StyledNav';
import Links from './Links';
import UserInfo from './UserInfo';
import MenuButton from './MenuButton';
import Collapse from './Collapse';
import Sidebar from './Sidebar';
import CloseButton from '../../shared/CloseButton';
const Navbar = () => {
    const [toggleSidebar, setToggleSidebar] = useState(false);
    return (
        <StyledNav>
            <Logo/>
            <MenuButton onClick = {() => setToggleSidebar(!toggleSidebar)}/>
            <Collapse>
                <Links/>
                <UserInfo/>
            </Collapse> 
            <Sidebar toggleSidebar= {toggleSidebar}>
                <CloseButton onClick = {() => setToggleSidebar(!toggleSidebar)}/>
                <Links/>
                <UserInfo/>
            </Sidebar>   
        </StyledNav>
    )
} 
export default Navbar;
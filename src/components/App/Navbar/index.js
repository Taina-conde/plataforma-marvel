import { useState } from 'react';
import Logo from './Logo';
import StyledNav from './StyledNav';
import Links from './Links';
import UserInfo from './UserInfo';
import MenuButton from './MenuButton';
import Collapse from './Collapse';
import Sidebar from './Sidebar';
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
                <Links/>
                <UserInfo/>
            </Sidebar>   
        </StyledNav>
    )
} 
export default Navbar;
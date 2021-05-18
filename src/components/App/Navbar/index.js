import Logo from './Logo';
import StyledNav from './StyledNav';
import Links from './Links';
import UserInfo from './UserInfo';
import MenuButton from './MenuButton';
import Collapse from './Collapse';
const Navbar = () => {
    return (
        <StyledNav>
            <Logo/>
            <MenuButton/>
            <Collapse>
                <Links/>
                <UserInfo/>
            </Collapse>    
        </StyledNav>
    )
} 
export default Navbar;
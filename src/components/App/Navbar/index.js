import Logo from './Logo';
import StyledNav from './StyledNav';
import Links from './Links';
import UserInfo from './UserInfo';
const Navbar = () => {
    return (
        <StyledNav>
            <Logo/>
            <Links/>
            <UserInfo/>
        </StyledNav>
    )
} 
export default Navbar;
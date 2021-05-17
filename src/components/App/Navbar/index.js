import Logo from './Logo';
import StyledNav from './StyledNav';
import StyledNavLink from './StyledNavLink';
import UserInfo from './UserInfo';
const Navbar = () => {
    return (
        <StyledNav>
            <Logo/>
            <StyledNavLink to = '/' exact>
                Personagens
            </StyledNavLink>
            <StyledNavLink to = '/filmes'>
                Filmes
            </StyledNavLink>
            <StyledNavLink to = '/hqs'>
                HQs
            </StyledNavLink>
            <UserInfo/>
        </StyledNav>
    )
} 
export default Navbar;
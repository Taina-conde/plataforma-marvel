import Logo from './Logo';
import StyledNav from './StyledNav';
import StyledNavLink from './StyledNavLink';
const Navbar = () => {
    return (
        <StyledNav>
            <Logo/>
            <StyledNavLink to = '/'>
                Personagens
            </StyledNavLink>
            <StyledNavLink to = '/filmes'>
                Filmes
            </StyledNavLink>
            <StyledNavLink to = '/hqs'>
                HQs
            </StyledNavLink>
        </StyledNav>
    )
} 
export default Navbar;
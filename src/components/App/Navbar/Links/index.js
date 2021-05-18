import React from 'react';
import NavLinkGroup from './NavLinkGroup';


import StyledNavLink from './StyledNavLink';
const Links = () => {
    return (
        <NavLinkGroup>
            <StyledNavLink to = '/' exact>
                Personagens
            </StyledNavLink>
            <StyledNavLink to = '/filmes'>
                Filmes
            </StyledNavLink>
            <StyledNavLink to = '/hqs'>
                HQs
            </StyledNavLink>
        </NavLinkGroup>
    )
}
export default Links;
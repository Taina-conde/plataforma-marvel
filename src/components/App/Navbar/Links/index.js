import React from 'react';
import Wrapper from '../../../shared/Wrapper/'


import StyledNavLink from './StyledNavLink';
const Links = () => {
    return (
        <Wrapper>
            <StyledNavLink to = '/' exact>
                Personagens
            </StyledNavLink>
            <StyledNavLink to = '/filmes'>
                Filmes
            </StyledNavLink>
            <StyledNavLink to = '/hqs'>
                HQs
            </StyledNavLink>
        </Wrapper>
    )
}
export default Links;
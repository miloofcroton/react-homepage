import React from 'react';
import { ROUTES } from './constants';
import { StyledLink } from '../styles/Links';

export const AllLinks = () => {
  return Object.keys(ROUTES)
    .filter(name => ROUTES[name].linkTo.length === 0)
    .map((name, i) => (
      <StyledLink
        key={i}
        to={ROUTES[name].linkTo()}
      >
        {name.toLowerCase().replace('_', ' ')}
      </StyledLink>
    ));
};

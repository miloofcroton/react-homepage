import React from 'react';
import { ROUTES } from './constants';
import { StyledLink } from '../styles/Links';

export const AllLinks = () => {
  return Object
    .keys(ROUTES)
    .map((name, i) => (
      <StyledLink
        key={i}
        to={ROUTES[name].linkTo()}
      >
        {name.toLowerCase().replace('_', ' ')}
      </StyledLink>
    ));
};

export const NavLinks = () => {
  return Object
    .values(ROUTES)
    .filter(route => route.nav === true)
    .map((route, i) => (
      <StyledLink
        key={i}
        to={route.linkTo()}
      >
        {route.label}
      </StyledLink>
    ));

};

// react and redux
import React from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

// core pages
import About from '../components/content/about';
import Home from '../components/content/home';

export const ROUTES = {
  ABOUT: {
    path: '/about',
    Component: About,
    linkTo: () => '/about'
  },
  HOME: {
    path: '/home',
    Component: Home,
    linkTo: () => '/home'
  },
};

export const LINKS = [
  { label: 'Home', path: '/home' },
  { label: 'About', path: '/about' }
];



const StyledLink = styled(Link)`
  box-sizing: border - box;

  text-decoration: none;
  color: ${ ({ theme }) => theme.secondary};
  margin: 5px;
  padding: 8px;
  border: 1px solid white;

  &:hover {
    color: ${ ({ theme }) => theme.darksecondary};
    border: 1px solid ${ ({ theme }) => theme.darksecondary};
  }
`;

export const rootLinks = () => {
  return Object.keys(ROUTES)
    .filter(routeName => ROUTES[routeName].linkTo.length === 0)
    .map((routeName, i) => (
      <StyledLink key={i} to={ROUTES[routeName].linkTo()}>{routeName.toLowerCase().replace('_', ' ')}</StyledLink>
    ));
};

export const routerRoutes = () => {
  return Object.values(ROUTES)
    .map((route, i) => (
      <Route exact={route.linkTo.length === 0} key={i} path={route.path} component={route.Component} />
    ));
};

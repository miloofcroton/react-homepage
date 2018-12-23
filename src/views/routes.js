// react and redux
import React from 'react';
import { Route } from 'react-router-dom';

// link style
import { StyledLink } from './styles/Links';

// core pages
import About from './content/about';
import Home from './content/home';

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

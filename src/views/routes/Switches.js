import React from 'react';
import { Route } from 'react-router-dom';
import { ROUTES } from './constants';

export const Switches = () => {
  return Object.values(ROUTES)
    .map((route, i) => (
      <Route
        key={i}
        exact={route.linkTo.length === 0}
        path={route.path}
        component={route.Component}
      />
    ));
};

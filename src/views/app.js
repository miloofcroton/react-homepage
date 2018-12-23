import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { routerRoutes, ROUTES } from './routes';

import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import Header from './layout/Header';
import Footer from './layout/Footer';
import { theme } from './layout/Theme';
import { GlobalStyle } from './layout/GlobalStyle';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Fragment>

          <Helmet>
            <title>Jack Toumey</title>
          </Helmet>

          <GlobalStyle/>

          <Header />

          <Switch>
            {routerRoutes()}
            <Redirect to={ROUTES.HOME.path} />
          </Switch>

          <Footer />

        </Fragment>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

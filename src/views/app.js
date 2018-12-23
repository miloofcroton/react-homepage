import React, { Fragment } from 'react';

import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { ROUTES } from './routes/constants';
import { Switches } from './routes/Switches';

import { Helmet } from 'react-helmet';

import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './layout/constants';

import Header from './layout/Header';
import Footer from './layout/Footer';

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
            {Switches()}
            <Redirect to={ROUTES.HOME.path} />
          </Switch>

          <Footer />

        </Fragment>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

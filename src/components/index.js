import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { routerRoutes, ROUTES } from '../routes';
import { Helmet } from 'react-helmet';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './lib/Header';
import Footer from './lib/Footer';

const GlobalStyle = createGlobalStyle`
  #root {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    text-align: center;
    margin: 0;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
`;

const theme = {
  primary: 'rgb(0, 56, 130)',
  secondary: 'rgb(247, 181, 18)',
  darksecondary: 'rgb(107, 48, 13)',
  accent: 'rgb(173, 38, 36)'
};

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Fragment>
          <Helmet>
            <title>Cars</title>
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

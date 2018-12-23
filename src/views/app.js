import React, { Fragment } from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';
import Switches from './routes/Switches';

import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './layout/constants';

import Head from './layout/Head';
import Header from './layout/Header';
import Footer from './layout/Footer';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Fragment>
          <Head/>
          <GlobalStyle/>
          <Header/>
          <Switch>{Switches()}</Switch>
          <Footer/>
        </Fragment>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

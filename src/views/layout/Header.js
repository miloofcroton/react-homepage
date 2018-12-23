import React from 'react';

import { AllLinks } from '../routes/Links';

import { StyledNav } from '../styles/Nav';
import { StyledHeader } from '../styles/Header';

const Header = () => {

  return (
    <StyledHeader>
      <h1>Jack Toumey</h1>
      <StyledNav>
        {AllLinks()}
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;

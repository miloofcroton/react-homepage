import React from 'react';
import { AllLinks } from '../routes/Links';
import styled from 'styled-components';

const StyledNav = styled.nav`
  margin: 0px 0px 15px 0px;
`;

const StyledHeader = styled.header`
  background-color: ${ ({ theme }) => theme.primary};
  color: ${ ({ theme }) => theme.secondary};
`;

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

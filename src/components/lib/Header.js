import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { rootLinks } from '../../routes';


const StyledHeader = styled.header`
  background-color: ${ ({ theme }) => theme.primary };
  color: ${ ({ theme }) => theme.secondary };
`;

const StyledNav = styled.nav`
  margin: 0px 0px 15px 0px;
`;

const Header = () => {

  return (
    <StyledHeader>
      <h1>Jack Toumey</h1>
      <StyledNav>
        {rootLinks()}
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;

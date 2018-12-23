import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  color: black;
  p {
    margin: 5px auto;
  }
`;

const GithubLink = styled.a`
  font-weight: bolder;
  display: inline-block;
  text-decoration: none;
  color: black;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>Copyright &copy; 2018. All rights reserved.</p>
      <GithubLink href="https://github.com/miloofcroton/portfolio">This website</GithubLink>
      {' by '}
      <GithubLink href="https://github.com/miloofcroton">me</GithubLink>.
    </StyledFooter>
  );
};

export default Footer;

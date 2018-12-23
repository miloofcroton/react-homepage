import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${ ({ theme }) => theme.primary};
  color: ${ ({ theme }) => theme.secondary};
`;

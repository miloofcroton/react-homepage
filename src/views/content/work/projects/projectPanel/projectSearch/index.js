import React, { PureComponent } from 'react';
import styled from 'styled-components';

const ProjectSearchWrapper = styled.form`

  label {
    display: block;
  }

  select {
    background-color: ${ ({ theme }) => theme.white};
  }

`;

export default class ProjectSearch extends PureComponent {





  render() {
    return (
      <ProjectSearchWrapper>

        asdf


      </ProjectSearchWrapper>
    );
  }
}

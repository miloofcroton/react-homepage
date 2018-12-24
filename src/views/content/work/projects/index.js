import React, { PureComponent } from 'react';
import styled from 'styled-components';

import ProjectPanel from './ProjectPanel';
import ProjectView from './ProjectView';

import projects from '../../../../data/fixtures/projects';

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
`;

export default class Projects extends PureComponent {

  state = {
    selectedProject: '',
    projects: projects
  };

  handleSelect(project) {
    this.selectedProject = project;
  }

  render() {
    return (
      <ProjectsWrapper>
        <ProjectPanel />
        <ProjectView />
      </ProjectsWrapper>
    );
  }

}

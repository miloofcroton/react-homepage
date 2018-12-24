import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ProjectSearch from './projectSearch';
import ProjectList from './projectList';


const ProjectPanelWrapper = styled.div`

  display: grid;
  grid-template-rows: 15% auto;
  border: 1px solid black;
  max-height: 1000px;

  form {
    border-bottom: 1px solid black;
    margin-top: 10px;
  }

`;

export default class ProjectPanel extends PureComponent {

  static propTypes = {
    projects: PropTypes.array,
    selected: PropTypes.object,
    onSelect: PropTypes.func
  };

  state = {
    filter: {
      query: ''
    },
    sort: {
      key: 'date',
      direction: 1,
    }
  };

  handleFilter = filter => {
    this.setState({ filter });
  };

  handleSort = sort => {
    this.setState({ sort });
  };

  filteredProjects = () => {
    const { query } = this.state.filter;
    if (!query) return this.props.projects;

    return this.props.projects.filter(project => {
      return (project.tags.some(tag => tag === query));
    });
  };

  sortedProjects = () => {
    const { key, direction } = this.state.sort;
    return this.filteredProjects()
      .slice()
      .sort((a, b) => {
        if (a[key] > b[key]) return 1 * direction;
        if (a[key] < b[key]) return -1 * direction;
        if (a[key] === b[key]) return 0;
      });
  };

  render() {
    return (
      <ProjectPanelWrapper>
        <ProjectSearch
          onFilter={this.handleFilter}
          onSort={this.handleSort}
        />
        <ProjectList
          projects={this.sortedProjects()}
          selected={this.props.selected}
          onSelect={this.props.onSelect}
        />
      </ProjectPanelWrapper>
    );
  }

}

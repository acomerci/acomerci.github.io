import { Container, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import Locale from 'utils/localization';
import projects from '../assets/data/projects.json';
import Project from './project';

class Projects extends Component {
  render() {
    return (
      <Container id='projects'>
        <h1>{Locale.projects_title}</h1>
        <p>{Locale.projects_description}</p>
        <Grid container spacing={5}>
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </Grid>
      </Container>
    );
  }
}

export default Projects;

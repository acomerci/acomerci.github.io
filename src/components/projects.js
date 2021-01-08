import { Container, Grid } from "@material-ui/core";
import React, { Component } from "react";
import projects from "../assets/data/projects.json";
import Project from "./project";

class Projects extends Component {
  render() {
    const { strings } = this.props;
    return (
      <Container id="projects">
        <h1>{strings.projects}</h1>
        <p>{strings.projectsDesc}</p>
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

import { Box, Container, Grid } from "@material-ui/core";
import React, { Component } from "react";
import Locale from "utils/localization";
import projects from "../assets/data/projects.json";
import Project from "./project";

class Projects extends Component {
  render() {
    return (
      <Box id="projects" py="25px">
        <Container>
          <h1>{Locale.projects_title}</h1>
          <p>{Locale.projects_description}</p>
          <Grid container spacing={5}>
            {projects.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </Grid>
        </Container>
      </Box>
    );
  }
}

export default Projects;

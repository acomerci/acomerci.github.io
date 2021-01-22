import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  withStyles,
} from "@material-ui/core";
import React from "react";
import { SECTION_PADDING_Y } from "utils/constants";
import Locale from "utils/localization";
import projects from "../assets/data/projects.json";
import Project from "./project";

const WhiteCheckbox = withStyles({
  root: {
    color: "white",
    "&$checked": {
      color: "white",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function Projects() {
  const [showAllTecs, setShowAllTecs] = React.useState(false);

  return (
    <Box
      id="projects"
      bgcolor="primary.main"
      color="primary.contrastText"
      py={SECTION_PADDING_Y}
    >
      <Container>
        <h1>{Locale.projects_title}</h1>
        <p>{Locale.projects_description}</p>
        <FormControlLabel
          control={
            <WhiteCheckbox
              checked={showAllTecs}
              onChange={(event) => setShowAllTecs(event.target.checked)}
            />
          }
          label={Locale.projects_show_all_tecs}
        />
        <Grid container spacing={5}>
          {projects.map((project, index) => (
            <Project key={index} project={project} showAllTecs={showAllTecs} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

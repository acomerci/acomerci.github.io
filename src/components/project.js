import { Card, CardContent, Grid } from "@material-ui/core";
import React from "react";
import Locale from "utils/localization";
import ProjectTecList from "./project_tec_list";

export default function Project(props) {
  const proj = props.project;

  return (
    <Grid item xs={12} md={4}>
      <Card>
        <CardContent>
          <p>{proj.title}</p>
          <p>{proj.description[Locale.getLanguage()]}</p>
          <ProjectTecList
            title={Locale.project_backend}
            tecs={proj.technologies.be}
            showAllTecs={props.showAllTecs}
          />
          <ProjectTecList
            title={Locale.project_frontend}
            tecs={proj.technologies.fe}
            showAllTecs={props.showAllTecs}
          />
        </CardContent>
      </Card>
    </Grid>
  );
}

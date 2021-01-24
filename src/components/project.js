import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import Locale from "utils/localization";
import ProjectTecList from "./project_tec_list";

const useStyles = makeStyles((theme) => ({
  header: {
    paddingBottom: 0,
  },
}));

export default function Project(props) {
  const classes = useStyles();
  const proj = props.project;

  return (
    <Grid item xs={12} md={4}>
      <Card>
        <CardHeader title={proj.title} className={classes.header} />
        <CardContent>
          <Typography>{proj.description[Locale.getLanguage()]}</Typography>
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

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  createMuiTheme,
  Grid,
  makeStyles,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import React, { Fragment, useCallback } from "react";
import Locale from "utils/localization";
import ProjectTecList from "./project_tec_list";

const useStyles = makeStyles((theme) => ({
  header: {
    paddingBottom: 0,
  },
  title: {
    fontWeight: "bold",
  },
}));

export default function Project(props) {
  const classes = useStyles();
  const proj = props.project;
  const [contentRef, setContentRef] = React.useState(null);
  const [hover, setHover] = React.useState(false);
  const [height, setHeight] = React.useState(null);

  const cardContent = useCallback((node) => {
    if (node != null) setContentRef(node);
  }, []);

  const onMouseEnter = () => {
    if (contentRef) setHeight(contentRef.getBoundingClientRect().height);
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <Grid item xs={12} md={4}>
      <Card
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={cardStyle()}
        raised={hover ? true : false}
        ref={cardContent}
      >
        <CardHeader title={proj.title} className={classes.header} />
        {!hover && <ProjectCardContentFront proj={proj} />}
        {hover && <ProjectCardContentBack proj={proj} />}
      </Card>
    </Grid>
  );

  function cardStyle() {
    return {
      height: hover ? height : null,
      backgroundColor: hover ? "inherit" : "white",
      color: hover ? "white" : "black",
    };
  }
}

function ProjectCardContentFront(props) {
  const proj = props.proj;
  return (
    <CardContent>
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
  );
}

function ProjectCardContentBack(props) {
  const classes = useStyles();
  const proj = props.proj;
  return (
    <CardContent>
      <Typography variant="body2" className={classes.title}>
        {Locale.project_description}
      </Typography>
      <Typography gutterBottom>
        {proj.description[Locale.getLanguage()]}
      </Typography>
      <Box pt="10px">
        <Typography variant="body2" className={classes.title}>
          {Locale.project_work_done}
        </Typography>
        <Typography>{proj.work[Locale.getLanguage()]}</Typography>
      </Box>
    </CardContent>
  );
}

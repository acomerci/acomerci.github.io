import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useCallback } from "react";
import { isMobile } from "react-device-detect";
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
    if (isMobile) return;
    if (contentRef) setHeight(contentRef.getBoundingClientRect().height);
    setHover(true);
  };

  const onMouseLeave = () => {
    if (isMobile) return;
    setHover(false);
  };

  const onClick = () => {
    setHover(!hover);
  };

  return (
    <Grid item xs={12} md={4}>
      <Card
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        style={{
          height: hover ? height : "100%",
          backgroundColor: hover ? "inherit" : "white",
          color: hover ? "white" : "black",
          cursor: "pointer",
          userSelect: "none",
        }}
        raised={hover ? true : false}
        ref={cardContent}
      >
        <CardHeader
          title={proj.title[Locale.getLanguage()]}
          className={classes.header}
        />
        {!hover && <ProjectCardContentFront props={props} />}
        {hover && <ProjectCardContentBack props={props} />}
      </Card>
    </Grid>
  );
}

function ProjectCardContentFront(props) {
  props = props.props;
  const proj = props.project;

  return (
    <CardContent>
      {proj.technologies.be &&
        (props.showAllTecs ||
          proj.technologies.be.filter((t) => t.important).length > 0) && (
          <ProjectTecList
            title={Locale.project_backend}
            tecs={proj.technologies.be}
            showAllTecs={props.showAllTecs}
          />
        )}
      {proj.technologies.fe &&
        (props.showAllTecs ||
          proj.technologies.fe.filter((t) => t.important).length > 0) && (
          <ProjectTecList
            title={Locale.project_frontend}
            tecs={proj.technologies.fe}
            showAllTecs={props.showAllTecs}
          />
        )}
      {proj.technologies.tools &&
        (props.showAllTecs ||
          proj.technologies.tools.filter((t) => t.important).length > 0) && (
          <ProjectTecList
            title={Locale.project_tools}
            tecs={proj.technologies.tools}
            showAllTecs={props.showAllTecs}
          />
        )}
    </CardContent>
  );
}

function ProjectCardContentBack(props) {
  props = props.props;
  const classes = useStyles();
  const proj = props.project;

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

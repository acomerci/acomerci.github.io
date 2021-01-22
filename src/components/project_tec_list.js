import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { Fragment } from "react";
import technologies from "../assets/data/technologies.json";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "bold",
  },
  img: {
    maxWidth: "fill-available",
    maxHeight: "28px",
    paddingRight: "10px",
    margin: "auto",
  },
}));

export default function ProjectTecList(props) {
  const classes = useStyles();
  const tecs = props.tecs;

  return (
    <Fragment>
      <List disablePadding dense>
        <ListItem disableGutters>
          <ListItemText
            primary={props.title}
            classes={{ primary: classes.title }}
          />
        </ListItem>
        {tecs
          .filter((x) => x.important)
          .map((tec, index) => (
            <ProjectTecListElem key={index} tec={tec}></ProjectTecListElem>
          ))}
        <Collapse in={props.showAllTecs} timeout="auto" unmountOnExit>
          <List disablePadding dense>
            {tecs
              .filter((x) => !x.important)
              .map((tec, index) => (
                <ProjectTecListElem key={index} tec={tec}></ProjectTecListElem>
              ))}
          </List>
        </Collapse>
      </List>
    </Fragment>
  );
}

function ProjectTecListElem(props) {
  const classes = useStyles();
  let tec = technologies[props.tec.id] ? technologies[props.tec.id] : {};
  tec = { ...tec, ...props.tec };
  const imgSrc = tec.img
    ? require(`../assets/img/technologies/${tec.img}`).default
    : null;

  return (
    <ListItem>
      <ListItemIcon>
        <img src={imgSrc} alt={tec.alt} className={classes.img} />
      </ListItemIcon>
      <ListItemText primary={tec.name} />
      <Typography color="textSecondary"> {tec.version}</Typography>
    </ListItem>
  );
}

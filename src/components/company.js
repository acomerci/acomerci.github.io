import {
  Grid,
  makeStyles,
  Slide,
  useScrollTrigger,
  Zoom,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: "fill-available",
  },
}));

export default function Company(props) {
  const company = props.company;
  const imgSrc = require(`../assets/img/${company.img}`).default;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 800,
  });
  console.log(trigger);

  return (
    <Zoom in={trigger} style={{ transitionDelay: props.delay }}>
      <Grid item xs={6} sm={4} md={company.md}>
        <img src={imgSrc} alt={company.alt} className={classes.img} />
      </Grid>
    </Zoom>
  );
}

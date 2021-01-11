import { Grid, makeStyles } from "@material-ui/core";
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

  return (
    <Grid item xs={12} sm={6} md={company.md}>
      <img src={imgSrc} alt={company.alt} className={classes.img} />
    </Grid>
  );
}

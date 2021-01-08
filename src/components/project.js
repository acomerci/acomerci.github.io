import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
} from "@material-ui/core";
import React, { Component } from "react";

class Project extends Component {
  proj = this.props.project;

  render() {
    const imgSrc = require(`../assets/img/${this.proj.img}`).default;

    return (
      <Grid item xs={12} md={4}>
        <Card>
          <CardActionArea>
            <CardMedia component="img" className="projectImg" image={imgSrc} />
          </CardActionArea>
          <CardContent>{this.proj.title}</CardContent>
        </Card>
        {/* <img src={imgSrc} alt={this.proj.title} className="projectImg" /> */}
      </Grid>
    );
  }
}

export default Project;

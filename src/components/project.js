import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";

export default function Project(props) {
  const proj = props.project;

  return (
    <Grid item xs={12} md={4}>
      <Card>
        <CardContent>
          <p>{proj.title}</p>
          <p>{proj.client}</p>
          <List disablePadding>
            {proj.technologies.map((tec, index) => (
              <ListItem key={index}>
                <ListItemText primary={tec} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Grid>
  );
}

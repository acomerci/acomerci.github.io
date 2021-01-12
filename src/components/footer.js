import { Box, Container } from "@material-ui/core";
import React from "react";

export default function Footer(props) {
  return (
    <Box bgcolor="primary.main" color="primary.contrastText" py="50px">
      <Container>Soy un footer</Container>
    </Box>
  );
}

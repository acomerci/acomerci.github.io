import { Box, Container, IconButton } from "@material-ui/core";
import { AlternateEmail, LinkedIn } from "@material-ui/icons";
import React from "react";
import { SECTION_PADDING_Y } from "utils/constants";

export default function Footer(props) {
  return (
    <Box
      component="footer"
      bgcolor="primary.main"
      color="primary.contrastText"
      py={SECTION_PADDING_Y}
    >
      <Container>
        <IconButton
          aria-label="LinkedIn"
          style={{ color: "white" }}
          href="https://www.linkedin.com/in/alexis-comerci-33123263/"
          target="_blank"
        >
          <LinkedIn fontSize="large" />
        </IconButton>
        <IconButton
          aria-label="Email"
          style={{ color: "white" }}
          href="mailto:alexiscomerci@gmail.com"
          target="_blank"
        >
          <AlternateEmail fontSize="large" />
        </IconButton>
      </Container>
    </Box>
  );
}

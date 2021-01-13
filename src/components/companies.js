import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import { SECTION_PADDING_Y } from "utils/constants";
import Locale from "utils/localization";
import companies from "../assets/data/companies.json";
import Company from "./company";

export default function Companies() {
  return (
    <Box id="companies" py={SECTION_PADDING_Y}>
      <Container>
        <h1>{Locale.companies_title}</h1>
        <p>{Locale.companies_description}</p>
        <Box pt="20px">
          <Grid container spacing={10}>
            {companies.map((company, index) => (
              <Company
                key={index}
                company={company}
                delay={`${50 * index}ms`}
              />
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

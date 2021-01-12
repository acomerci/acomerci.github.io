import {
  Box,
  Container,
  Grid,
  Slide,
  useScrollTrigger,
} from "@material-ui/core";
import React from "react";
import Locale from "utils/localization";
import companies from "../assets/data/companies.json";
import Company from "./company";

export default function Companies() {
  const trigger = useScrollTrigger();
  return (
    // <Slide direction="right" in={trigger}>
    <Box id="companies" pt="25px" pb="150px">
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
    // </Slide>
  );
}

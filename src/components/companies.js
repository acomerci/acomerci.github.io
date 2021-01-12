import { Box, Container, Grid } from "@material-ui/core";
import React, { Component } from "react";
import Locale from "utils/localization";
import companies from "../assets/data/companies.json";
import Company from "./company";

class Companies extends Component {
  render() {
    return (
      <Box id="companies" pt="25px" pb="150px">
        <Container>
          <h1>{Locale.companies_title}</h1>
          <p>{Locale.companies_description}</p>
          <Box pt="20px">
            <Grid container spacing={10}>
              {companies.map((company, index) => (
                <Company key={index} company={company} />
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    );
  }
}

export default Companies;

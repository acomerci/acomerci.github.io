import { AppBar, Button, MenuItem, Select, Toolbar } from "@material-ui/core";
import React, { Component, Fragment } from "react";
import { Link } from "react-scroll";

class Header extends Component {
  handleChangeLanguage = (event) => {
    this.props.onChangeLanguage(event.target.value);
  };

  render() {
    return (
      <Fragment>
        <AppBar position="fixed">
          <Toolbar>
            <Link to="projects" spy={true} smooth={true}>
              <Button color="inherit">Proyectos</Button>
            </Link>
            <Select
              value={this.props.language}
              onChange={this.handleChangeLanguage}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="es">Español</MenuItem>
            </Select>
          </Toolbar>
        </AppBar>
      </Fragment>
    );
  }
}

export default Header;

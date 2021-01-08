import Header from "components/header";
import Projects from "components/projects";
import React, { Component, Fragment } from "react";
import LocalizedStrings from "react-localization";
import localization from "./assets/data/strings.json";
import "./styles/App.css";

let strings = new LocalizedStrings(localization);

class App extends Component {
  constructor(props) {
    super(props);
    this.getLanguage();
    this.state = {
      userLanguage: this.getLanguage(),
    };
  }

  getLanguage = () => {
    let lang = (
      localStorage.getItem("userLanguage") ||
      navigator.language ||
      navigator.userLanguage ||
      "es"
    ).substring(0, 2);
    return localization.hasOwnProperty(lang) ? lang : "es";
  };

  handleLanguageChange = (lang) => {
    localStorage.setItem("userLanguage", lang);
    this.setState({ userLanguage: lang });
  };

  render() {
    strings.setLanguage(this.state.userLanguage);
    return (
      <Fragment>
        <Header
          strings={strings}
          userLanguage={this.state.userLanguage}
          onChangeLanguage={this.handleLanguageChange}
        />
        <Projects strings={strings} />
      </Fragment>
    );
  }
}

export default App;

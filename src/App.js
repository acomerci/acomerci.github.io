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
    this.state = {
      language: "es",
    };
  }

  handleLanguageChange = (lang) => {
    this.setState({ language: lang });
  };

  render() {
    strings.setLanguage(this.state.language);
    console.log(localization);
    return (
      <Fragment>
        <Header
          language={this.state.language}
          onChangeLanguage={this.handleLanguageChange}
        />
        <Projects strings={strings} />
      </Fragment>
    );
  }
}

export default App;

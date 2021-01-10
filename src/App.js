import Header from 'components/header';
import Projects from 'components/projects';
import React, { Component, Fragment } from 'react';
import { LANGUAGES_LABEL } from 'utils/constants';
import Locale from 'utils/localization';
import './styles/App.css';

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
      localStorage.getItem('userLanguage') ||
      navigator.language ||
      'es'
    ).substring(0, 2);
    return LANGUAGES_LABEL.find((x) => x.code === lang) ? lang : 'es';
  };

  handleLanguageChange = (lang) => {
    localStorage.setItem('userLanguage', lang);
    this.setState({ userLanguage: lang });
  };

  render() {
    Locale.setLanguage(this.state.userLanguage);

    return (
      <Fragment>
        <Header
          userLanguage={this.state.userLanguage}
          onChangeLanguage={this.handleLanguageChange}
        />
        <Projects />
      </Fragment>
    );
  }
}

export default App;

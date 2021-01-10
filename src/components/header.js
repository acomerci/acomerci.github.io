import {
  AppBar,
  Button,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Translate';
import React from 'react';
import { Link } from 'react-scroll';
import { LANGUAGES_LABEL } from 'utils/constants';
import Locale from 'utils/localization';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  separator: {
    flexGrow: 1,
  },
  langButton: {
    paddingLeft: 5,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [languageMenu, setLanguageMenu] = React.useState(null);

  const handleLanguageIconClick = (event) => {
    setLanguageMenu(event.currentTarget);
  };

  const handleLanguageMenuClose = (event) => {
    if (event.currentTarget.nodeName === 'A')
      props.onChangeLanguage(event.currentTarget.lang);

    setLanguageMenu(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position='fixed'>
        <Toolbar>
          <Link to='projects' spy={true} smooth={true}>
            <Button color='inherit'>{Locale.projects_title}</Button>
          </Link>
          <div className={classes.separator} />
          <Button
            color='inherit'
            aria-owns={languageMenu ? 'language-menu' : undefined}
            aria-haspopup='true'
            onClick={handleLanguageIconClick}
            data-ga-event-category='header'
            data-ga-event-action='language'
          >
            <LanguageIcon />
            <span className={classes.langButton}>
              {
                LANGUAGES_LABEL.filter(
                  (language) => language.code === props.userLanguage
                )[0].text
              }
            </span>
            <ExpandMoreIcon fontSize='small' />
          </Button>
          <Menu
            id='language-menu'
            anchorEl={languageMenu}
            open={Boolean(languageMenu)}
            onClose={handleLanguageMenuClose}
          >
            {LANGUAGES_LABEL.map((language) => (
              <MenuItem
                component='a'
                data-no-link='true'
                key={language.code}
                selected={props.language === language.code}
                onClick={handleLanguageMenuClose}
                lang={language.code}
                hrefLang={language.code}
              >
                {language.text}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

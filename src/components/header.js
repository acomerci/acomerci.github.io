import {
  AppBar,
  Button,
  Hidden,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
} from "@material-ui/core";
import { Business, EmojiPeople, Work } from "@material-ui/icons";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LanguageIcon from "@material-ui/icons/Translate";
import React, { Fragment } from "react";
import { Link } from "react-scroll";
import { LANGUAGES_LABEL } from "utils/constants";
import Locale from "utils/localization";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  separator: {
    flex: 1,
  },
  linkButton: {
    minHeight: "65px",
  },
  linkIcon: {
    flex: 1,
    textAlign: "center",
    cursor: "pointer",
    verticalAlign: "center",
  },
  icon: {
    minHeight: "50px",
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
    if (event.currentTarget.nodeName === "A")
      props.onChangeLanguage(event.currentTarget.lang);

    setLanguageMenu(null);
  };

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <HeaderLink
            to="intro"
            title={Locale.intro_title}
            icon={<EmojiPeople className={classes.icon} />}
          />
          <HeaderLink
            to="projects"
            title={Locale.projects_title}
            icon={<Work className={classes.icon} />}
          />
          <HeaderLink
            to="companies"
            title={Locale.companies_title}
            icon={<Business className={classes.icon} />}
          />
          <div className={classes.separator} />
          <Button
            color="inherit"
            aria-owns={languageMenu ? "language-menu" : undefined}
            aria-haspopup="true"
            onClick={handleLanguageIconClick}
            data-ga-event-category="header"
            data-ga-event-action="language"
          >
            <LanguageIcon />
            <Hidden only="xs">
              <span className={classes.langButton}>
                {
                  LANGUAGES_LABEL.filter(
                    (language) => language.code === props.userLanguage
                  )[0].text
                }
              </span>
            </Hidden>
            <Hidden smUp>
              <span className={classes.langButton}>{props.userLanguage}</span>
            </Hidden>
            <ExpandMoreIcon fontSize="small" />
          </Button>
          <Menu
            id="language-menu"
            anchorEl={languageMenu}
            open={Boolean(languageMenu)}
            onClose={handleLanguageMenuClose}
          >
            {LANGUAGES_LABEL.map((language) => (
              <MenuItem
                component="a"
                data-no-link="true"
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
      <Toolbar />
    </div>
  );
}

function HeaderLink(props) {
  const classes = useStyles();

  return (
    <Fragment>
      <Hidden only="xs">
        <Link to={props.to} spy={true} smooth={true} offset={-66}>
          <Button color="inherit" className={classes.linkButton}>
            {props.title}
          </Button>
        </Link>
      </Hidden>
      <Hidden smUp>
        <Link
          to={props.to}
          spy={true}
          smooth={true}
          offset={-56}
          className={classes.linkIcon}
        >
          {props.icon}
        </Link>
      </Hidden>
    </Fragment>
  );
}

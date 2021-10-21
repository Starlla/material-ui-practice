import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import logo from "../../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "7em",
  },
  tabContainer: {
    marginLeft: "auto",
    marginRight:'2em'
  },
  tab: {
    ...theme.typography.tab,
    color: "white !important",
    minWidth:'10 !important',
    marginLeft:'25px !important',
  },
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <ElevationScroll {...props}>
          <AppBar position="fixed">
            <Toolbar disableGutters>
              <img alt="company logo" src={logo} className={classes.logo} />
              <Tabs
                value={value}
                aria-label="basic tabs example"
                className={classes.tabContainer}
              >
                <Tab label="Home" className={classes.tab} />
                <Tab label="Services" className={classes.tab} />
                <Tab label="The Revolution" className={classes.tab} />
                <Tab label="About Us" className={classes.tab} />
                <Tab label="Contact Us" className={classes.tab} />
              </Tabs>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </Box>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

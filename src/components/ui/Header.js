import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";

import logo from "../../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom:'3em'
  },
  logo: {
    height: "7em",
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
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <ElevationScroll {...props}>
          <AppBar position="fixed">
            <Toolbar disableGutters>
              <img alt="company logo" src={logo} className={classes.logo} />
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </Box>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

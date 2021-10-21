import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import PropTypes from "prop-types";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme=>({
  toolbarMargin:{
    ...theme.mixins.toolbar
  }
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
          <Toolbar>
            <Typography variant="h3">Arc Development</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </Box>
    <div className={classes.toolbarMargin}/>
    </React.Fragment>
  );
}

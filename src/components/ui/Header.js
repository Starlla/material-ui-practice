import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import PropTypes from "prop-types";

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
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ElevationScroll {...props}>
        <AppBar position="fixed">
          <Toolbar>Arc Development</Toolbar>
        </AppBar>
      </ElevationScroll>
    </Box>
  );
}

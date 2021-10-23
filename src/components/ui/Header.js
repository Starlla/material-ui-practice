import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

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
  },
}));

const ColorButton = styled(Button)(({ theme }) => ({
  borderRadius: "50px",
  marginLeft: "50px",
  marginRight: "25px",
  height:'45px',
  ...theme.typography.estimate
}));
const StyledTab = styled(Tab)(({ theme }) => ({
  ...theme.typography.tab,
  minWidth: "10 ",
  marginLeft: "25px",
  color: 'rgba(255, 255, 255, 0.7)',
  '&.Mui-selected': {
    color: '#fff',
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
                <StyledTab label="Home" className={classes.tab} />
                <StyledTab label="Services" className={classes.tab} />
                <StyledTab label="The Revolution" className={classes.tab} />
                <StyledTab label="About Us" className={classes.tab} />
                <StyledTab label="Contact Us" className={classes.tab} />
              </Tabs>
              <ColorButton
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Free Estimate
              </ColorButton>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </Box>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

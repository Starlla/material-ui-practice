import React, { useEffect } from "react";
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
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

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
  height: "45px",
  ...theme.typography.estimate,
}));
const StyledTab = styled(Tab)(({ theme }) => ({
  ...theme.typography.tab,
  minWidth: "10 ",
  marginLeft: "25px",
  color: "rgba(255, 255, 255, 0.7)",
  "&.Mui-selected": {
    color: "#fff",
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
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/services" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/revolution" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/about" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/contact" && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === "/estimate" && value !== 5) {
      setValue(5);
    }
  }, [value]);

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <ElevationScroll {...props}>
          <AppBar position="fixed">
            <Toolbar disableGutters>
              <Button
                component={Link}
                to="/"
                sx={{ padding: "0" }}
                onClick={() => setValue(0)}
              >
                <img alt="company logo" src={logo} className={classes.logo} />
              </Button>
              <Tabs
                value={value}
                aria-label="basic tabs example"
                className={classes.tabContainer}
                onChange={handleChange}
              >
                <StyledTab
                  label="Home"
                  className={classes.tab}
                  component={Link}
                  to="/"
                />
                <StyledTab
                  aria-owns={anchorEl ? "simple-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  label="Services"
                  className={classes.tab}
                  component={Link}
                  to="/services"
                />
                <StyledTab
                  label="The Revolution"
                  className={classes.tab}
                  component={Link}
                  to="/revolution"
                />
                <StyledTab
                  label="About Us"
                  className={classes.tab}
                  component={Link}
                  to="/about"
                />
                <StyledTab
                  label="Contact Us"
                  className={classes.tab}
                  component={Link}
                  to="/contact"
                />
              </Tabs>
              <ColorButton
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Free Estimate
              </ColorButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  Custom Software Development
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  Mobile App Development
                </MenuItem>
                <MenuItem onClick={handleClose}>Website Development</MenuItem>
              </Menu>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </Box>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

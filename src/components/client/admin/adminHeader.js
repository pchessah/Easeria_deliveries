import history from "../../../util/history";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
// import mainListItems from "../client/sidebar";
import Avatar from "@material-ui/icons/Person";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";
import { fade, makeStyles } from "@material-ui/core/styles";
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  Media,
  DropdownItem
} from "reactstrap";
import Navbar from "../navbar";
export const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 10 // keep right padding when drawer closed
  },

  appBar: {
    background: "#FEDD3E",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    backgroundColor: "#fedd3e",
    whiteSpace: "nowrap",
    height: "100vh",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(0),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(0)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

const Header = ({ sideLinks }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleLogout = () => {
    localStorage.removeItem("roles");
    history.push("/");
  };
  return (
    <div>
      <AppBar
        style={{ height: "2px" }}
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Navbar />
        <Toolbar className={`navcolor ${classes.toolbar}`}>
          <IconButton
            edge="start"
            color="default"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.title}></div>

          <ProfileDropdown logout={handleLogout} />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <span style={{ color: "white" }}></span>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon style={{ color: "#ffff" }} />
          </IconButton>
        </div>
        <Divider />
        <List className="sideText">
          {sideLinks &&
            sideLinks.map((item, i) => {
              const { name, link } = item;
              return (
                <div className="sideText">
                  <Link to={link}>
                    <ListItem button>
                      <ListItemText primary={name} />
                    </ListItem>
                  </Link>
                </div>
              );
            })}
        </List>
      </Drawer>
    </div>
  );
};
export default Header;
const ProfileDropdown = ({ logout }) => (
  <div>
    <UncontrolledDropdown nav>
      <DropdownToggle className="pr-0" nav>
        <Media className="align-items-center">
          <div className="avatar">
            <span className="user_name">
              User
              <Avatar />
            </span>
          </div>
        </Media>
      </DropdownToggle>

      <DropdownMenu className="dropdown-menu-arrow dropdown_container" right>
        <DropdownItem className="noti-title" header tag="div">
          <h6 className="text-overflow m-0">
            <strong>Status:</strong> online
          </h6>
        </DropdownItem>

        <DropdownItem onClick={logout}>
          <i className="fas fa-running" />
          <span> Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  </div>
);

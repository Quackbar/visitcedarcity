import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
  } from "@material-ui/core";
  import React from "react";
  import { Link as RouterLink } from "react-router-dom";
  import { FontAwesome } from '@expo/vector-icons';
  

  const headersData = [
    {
      label: "Home",
      href: "/",
      icon: "home"
    },
    {
      label: "Map",
      href: "/map",
      icon: "map-o"
    },
    {
      label: "Discover",
      href: "/Discover",
      icon: "search"
    },
    {
      label: "Subscriptions",
      href: "/Subscriptions",
      icon: "heart"
    },
    {
      label: "Settings",
      href: "/Settings",
      icon: "gear"
    },
  ];
                       
  const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#f8a775",
        // paddingRight: "7px",

        // paddingLeft: "118px",
      },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "16px",
        marginTop: "20px",
        // marginLeft: "-10px",
     },
     toolbar: {
        margin: "auto",
        width: "100vw",
        // display: "flex",
        justifyContent: "center",
      },
 }));
                       
  export default function Header() {
    const { header, logo, menuButton, toolbar } = useStyles();
                       
    const displayDesktop = () => {
        return (
          <Toolbar className={toolbar}>
            {femmecubatorLogo}
            <div>{getMenuButtons()}</div>
          </Toolbar>
        );
      };
                       
    const femmecubatorLogo = (
      <Typography variant="h6" component="h1" className={logo}>
        
      </Typography>
    );
                       
    const getMenuButtons = () => {
      return headersData.map(({ label, href, icon }) => {
        return (
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
              className: menuButton,
            }}
          >
              <i className={label}><FontAwesome name={icon} /></i>
            {/* {label} */}
          </Button>
        );
      });
    };
                       
    return (
      <header>
        <AppBar className={header}>{displayDesktop()}</AppBar>
      </header>
    );
  }
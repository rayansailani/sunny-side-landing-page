import React, { useState } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  Grid,
  IconButton,
  SwipeableDrawer,
  ListItem,
  ListItemText,
  List,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => {
  return {
    background: {
      backgroundColor: "#3CBEFE",
      paddingTop: "0.8rem",
    },
    banner: {
      height: "86vh",
      width: "100vw",
      backgroundImage:
        "url(./sunny-side-landing-page/images/desktop/image-header.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      [theme.breakpoints.down("md")]: {
        backgroundImage:
          "url(./sunny-side-landing-page/images/mobile/image-header.jpg)",
      },
    },
    bannerHeading: {
      paddingTop: "3rem",
      color: "white",
      paddingBottom: "3rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "3rem !important",
      },
    },
    heading: {
      flexGrow: "1",
    },
    marginStyles: {
      paddingLeft: "10px",
      paddingRight: "10px",
    },
  };
});
const Banner = () => {
  const classes = useStyles();
  const [toggle, setToggle] = useState(false);
  const toggleState = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <AppBar position="relative" elevation={0}>
        <Toolbar className={classes.background}>
          <Typography
            className={`primary ${classes.heading} ${classes.marginStyles}`}
            variant="h5"
          >
            sunnyside
          </Typography>
          <div className="navItems">
            <Button variant="h6" className={`primary ${classes.marginStyles} `}>
              About
            </Button>
            <Button variant="h6" className={`primary ${classes.marginStyles} `}>
              Services
            </Button>
            <Button variant="h6" className={`primary ${classes.marginStyles} `}>
              Projects
            </Button>
            <Button
              id="contact"
              variant="h6"
              className={`secondary ${classes.marginStyles} `}
            >
              Contact
            </Button>
          </div>
          <div className="hamgburger">
            <IconButton onClick={toggleState}>
              <img
                src="./sunny-side-landing-page/images/icon-hamburger.svg"
                alt=""
              />
            </IconButton>
            <div>
              <SwipeableDrawer
                elevation={0}
                anchor="top"
                open={toggle}
                onClose={toggleState}
              >
                {/* <List className={``} style={{ margin: "2rem" }}>
                  {["About", "Services", "Projects", "Contact"].map(
                    (text, index) => (
                      <ListItem button key={text}>
                        <ListItemText className="primary" primary={text} />
                      </ListItem>
                    )
                  )}
                </List> */}

                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  padding="2rem"
                >
                  {["About", "Services", "Projects", "Contact"].map(
                    (text, index) => (
                      <Button
                        id={`${text === "Contact" ? "contactMobile" : ""}`}
                        variant="h6"
                        style={{ margin: "0.6rem" }}
                        className={`${
                          text === "Contact" ? "secondary" : "primary"
                        }`}
                      >
                        {text}
                      </Button>
                    )
                  )}
                </Box>
              </SwipeableDrawer>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={`${classes.banner} `} maxWidth="xl">
        <Typography
          variant="h2"
          className={`${classes.bannerHeading} secondary`}
          align="center"
        >
          WE ARE CREATIVES
        </Typography>
        <Box
          minHeight="50vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <img
              src="./sunny-side-landing-page/images/icon-arrow-down.svg"
              alt=""
            />
          </Grid>
        </Box>
      </Container>
    </>
  );
};
export default Banner;

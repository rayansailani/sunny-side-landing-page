import React from "react";
import { Typography, Box, IconButton, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    greenColor: {
      color: "hsl(167, 40%, 24%) !important",
    },
    paddingText: {
      paddingRight: "2rem",
      [theme.breakpoints.down("md")]: {
        fonSize: "14px !important",
        padding: " 0 1rem",
      },
    },
  };
});
const Footer = () => {
  const iconsData = [
    "./sunny-side-landing-page/images/icon-facebook.svg",
    "./sunny-side-landing-page/images/icon-instagram.svg",
    "./sunny-side-landing-page/images/icon-twitter.svg",
    "./sunny-side-landing-page/images/icon-pinterest.svg",
  ];
  const classes = useStyles();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      minHeight="45vh"
      backgroundColor="#74C1B1"
    >
      <Typography
        variant="h3"
        style={{ fontWeight: "bolder !important" }}
        className={`primary ${classes.greenColor}`}
        gutterBottom
      >
        sunnyside
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
        marginBottom="3rem"
      >
        <Button
          variant="text"
          className={`${classes.greenColor} ${classes.paddingText}`}
        >
          About
        </Button>
        <Button
          variant="text"
          className={`${classes.greenColor} ${classes.paddingText}`}
          variant="h6"
        >
          Projects
        </Button>
        <Button
          variant="text"
          className={`${classes.greenColor} ${classes.paddingText}`}
          variant="h6"
        >
          Services
        </Button>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
      >
        {iconsData.map((icon) => {
          return (
            <IconButton>
              <img src={icon.toString()} />
            </IconButton>
          );
        })}
      </Box>
    </Box>
  );
};
export default Footer;

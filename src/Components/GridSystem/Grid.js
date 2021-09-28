import React from "react";
import { Typography, Grid, Container, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
const useStyles = makeStyles((theme) => {
  return {
    image1: {
      backgroundImage: `url(${window.location.href}/images/desktop/image-transform.jpg)`,
      [theme.breakpoints.down("md")]: {
        backgroundImage: `url(${window.location.href}/images/mobile/image-transform.jpg)`,
        height: "60vh !important",
      },
    },
    image2: {
      backgroundImage: `url(${window.location.href}/images/desktop/image-stand-out.jpg)`,
      [theme.breakpoints.down("md")]: {
        backgroundImage: `url(${window.location.href}/images/mobile/image-stand-out.jpg)`,
        height: "60vh !important",
      },
    },
    image3: {
      backgroundImage: `url(${window.location.href}/images/desktop/image-graphic-design.jpg)`,
      [theme.breakpoints.down("md")]: {
        backgroundImage: `url(${window.location.href}/images/mobile/image-graphic-design.jpg)`,
        height: "60vh !important",
      },
    },
    image4: {
      backgroundImage: `url(${window.location.href}/images/desktop/image-photography.jpg)`,
      [theme.breakpoints.down("md")]: {
        backgroundImage: `url(${window.location.href}/images/mobile/image-photography.jpg)`,
        height: "60vh !important",
      },
    },
    heading: {
      color: "hsl(212, 27%, 19%)",
      [theme.breakpoints.down("md")]: {
        fontSize: "2.2rem !important",
        textAlign: "center",
        paddingBottom: "1.4rem",
      },
    },
    heading2: {
      [theme.breakpoints.down("md")]: {
        fontSize: "1.4rem !important",
        // textAlign: "center",
        // paddingBottom: "1.4rem",
      },
    },
    paddingItem: {
      padding: "6rem !important",
      [theme.breakpoints.down("md")]: {
        padding: "3rem !important",
      },
    },
    textCenter: {
      textAlign: "center",
    },
    downMargin: {
      [theme.breakpoints.down("md")]: {
        margin: "0 0 74px 0 !important",
      },
    },
    learnMoreButton: {
      marginTop: "2rem !important",
      width: "fit-content",
      border: "none !important",
      backgroundColor: "transparent",
      fontSize: "1.2rem",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
    greenColor: {
      color: "hsl(167, 40%, 24%)",
    },
    blueColor: {
      color: "hsl(212, 27%, 19%)",
    },
    greyColor: {
      color: "hsl(232, 10%, 55%)",
    },
    underline: {
      background: "hsl(51, 100%, 49%)",
      width: "8rem",
      borderRadius: "6px",
      height: "10px",
      marginTop: "-18px",
      [theme.breakpoints.down("md")]: {
        width: "50%",
        marginLeft: "calc(18vw)",
      },
    },
  };
});
const GridSystem = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item md={6} xs={12}>
        <Box
          display="flex"
          minHeight="60vh"
          justifyContent="center"
          flexDirection="column"
          className={`${classes.paddingItem}`}
        >
          <Typography
            variant="h2"
            className={`secondary ${classes.heading}`}
            gutterBottom
          >
            Transform your brand
          </Typography>
          <Typography
            variant="body2"
            className={`primary ${classes.textCenter} ${classes.greyColor}`}
          >
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </Typography>
          <Button
            variant="raised"
            className={`${classes.learnMoreButton} secondary`}
          >
            Learn More
          </Button>
          <span className={classes.underline}></span>
        </Box>
      </Grid>
      <Grid
        item
        md={6}
        xs={12}
        className={`${classes.image1} image-container`}
      ></Grid>
      <Grid
        item
        md={6}
        xs={12}
        className={`${classes.image2} image-container`}
      ></Grid>
      <Grid item md={6} xs={12}>
        <Box
          display="flex"
          minHeight="60vh"
          justifyContent="center"
          flexDirection="column"
          className={`${classes.paddingItem}`}
        >
          <Typography
            variant="h2"
            className={`secondary ${classes.heading}`}
            gutterBottom
          >
            Stand out to the right audience
          </Typography>
          <Typography
            variant="body2"
            className={`primary ${classes.textCenter} ${classes.greyColor}`}
          >
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </Typography>
          <Button
            align="left"
            variant="raised"
            className={`${classes.learnMoreButton} secondary`}
          >
            Learn More
          </Button>
          <span
            style={{ backgroundColor: "hsl(7, 99%, 70%)" }}
            className={`${classes.underline} secondary`}
          ></span>
        </Box>
      </Grid>
      <Grid item md={6} xs={12} className={`${classes.image3} image-container`}>
        <Box
          display="flex"
          minHeight="60vh"
          justifyContent="flex-end"
          flexDirection="column"
          className={classes.paddingItem}
        >
          <Typography
            align="center"
            variant="h4"
            className={`secondary ${classes.greenColor} ${classes.heading2}`}
            gutterBottom
          >
            Graphic design
          </Typography>
          <Typography
            align="center"
            variant="body1"
            className={`primary ${classes.greenColor} ${classes.downMargin}`}
          >
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </Typography>
        </Box>
      </Grid>
      <Grid item md={6} xs={12} className={`${classes.image4} image-container`}>
        <Box
          display="flex"
          minHeight="60vh"
          justifyContent="flex-end"
          flexDirection="column"
          className={classes.paddingItem}
        >
          <Typography
            variant="h4"
            align="center"
            className={`secondary ${classes.blueColor} ${classes.heading2}`}
            gutterBottom
          >
            Photography
          </Typography>
          <Typography
            align="center"
            variant="body1"
            className={`primary ${classes.blueColor} ${classes.downMargin}`}
          >
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
export default GridSystem;

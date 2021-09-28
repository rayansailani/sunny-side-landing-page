import { Typography, Box, Grid, Avatar } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    textTestimonial: {
      color: "hsl(210, 4%, 67%)",
      padding: "2rem 0",
    },
    avatar: {
      width: "200px",
      height: "200px",
    },
    paddingStyle: {
      padding: "4rem !important",
      mminHeight: "40vh",
      [theme.breakpoints.down("md")]: {
        padding: "2rem !important",
      },
    },
    heading: {
      [theme.breakpoints.down("md")]: {
        margin: "2rem 0 !important",
        fontSize: "24px !important",
      },
    },
  };
});

const Testimonial = () => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      minHeight="85vh"
    >
      <Typography
        variant="h4"
        align="center"
        className={`secondary ${classes.heading}`}
        style={{ color: "hsl(210, 4%, 67%)" }}
      >
        CLIENT TESTIMONIALS
      </Typography>
      <Grid container style={{ padding: "0 10vw" }} spacing={5}>
        <Grid item md={4} xs={12}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
            flexDirection="column"
            className={`${classes.paddingStyle} `}
          >
            <Avatar
              style={{ height: "70px", width: "70px" }}
              src="./sunny-side-landing-page/images/image-emily.jpg"
            />
            <Typography
              variant="body1"
              align="center"
              className={`primary ${classes.textTestimonial}`}
            >
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </Typography>
            <Typography variant="h6" className={`secondary`}>
              Emily R.
            </Typography>
            <Typography
              variant="body2"
              className={`primary`}
              style={{ color: "hsl(210, 4%, 67%)" }}
            >
              Marketing Director
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4} xs={12}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexDirection="column"
            className={`${classes.paddingStyle} `}
          >
            <Avatar
              style={{ height: "70px", width: "70px" }}
              src="./sunny-side-landing-page/images/image-thomas.jpg"
            />
            <Typography
              variant="body1"
              align="center"
              className={`primary ${classes.textTestimonial}`}
            >
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </Typography>
            <Typography variant="h6" className={`secondary`}>
              Thomas S.
            </Typography>
            <Typography
              variant="body2"
              className={`primary`}
              style={{ color: "hsl(210, 4%, 67%)" }}
            >
              Chief Operating Officer
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4} xs={12}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexDirection="column"
            className={`${classes.paddingStyle} `}
          >
            <Avatar
              style={{ height: "70px", width: "70px" }}
              src="./sunny-side-landing-page/images/image-jennie.jpg"
            />
            <Typography
              variant="body1"
              align="center"
              className={`primary ${classes.textTestimonial}`}
            >
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </Typography>
            <Typography variant="h6" className={`secondary`}>
              Jennie F.
            </Typography>
            <Typography
              variant="body2"
              className={`primary`}
              style={{ color: "hsl(210, 4%, 67%)" }}
            >
              Business Owner
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Testimonial;

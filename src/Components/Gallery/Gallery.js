import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
  return {};
});
const Gallery = () => {
  const galleryNames = [
    "./images/desktop/image-gallery-milkbottles.jpg",
    "./images/desktop/image-gallery-orange.jpg",
    "./images/desktop/image-gallery-cone.jpg",
    "./images/desktop/image-gallery-sugarcubes.jpg",
  ];
  return (
    <Grid container style={{}}>
      {galleryNames.map((im) => (
        <Grid item md={3} xs={6}>
          <div
            className="image-container"
            style={{
              backgroundImage: `url(${im.toString()})`,
              minHeight: "40vh",
            }}
          ></div>
        </Grid>
      ))}
    </Grid>
  );
};
export default Gallery;

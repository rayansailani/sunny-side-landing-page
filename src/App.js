import React from "react";
import Banner from "./Components/Hero/Banner";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import Testimonial from "./Components/Testimonial/Testimonial";
import Gallery from "./Components/Gallery/Gallery";
import Footer from "./Components/Footer/Footer";
import "./index.css";
import GridSystem from "./Components/GridSystem/Grid";

const theme = createTheme({});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Banner />
      </div>
      <Container maxWidth="xl" style={{ margin: 0, padding: 0 }}>
        <GridSystem />
      </Container>
      <Container maxWidth="xl" style={{ margin: 0, padding: 0 }}>
        <Testimonial />
      </Container>
      <Container maxWidth="xl" style={{ margin: 0, padding: 0 }}>
        <Gallery />
      </Container>
      <Container maxWidth="xl" style={{ margin: 0, padding: 0 }}>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};
export default App;

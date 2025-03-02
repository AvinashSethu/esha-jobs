import React from "react";
import HeroPage from "./HeroPage/HeroPage";
import AboutPage from "./AboutPage/AboutPage";
import AboutPageTwo from "./AboutPageTwo/AboutPageTwo";
import AboutPageThree from "./AboutPageThree/AboutPageThree";
import AboutThreeMain from "./AboutPageThree/AboutThreeMain";
import NursePage from "./AboutPageThree/NursePage";
import HireProcess from "./HireProcess/HireProcess";
import HireProcessMain from "./HireProcess/HireProcessMain";
import ServiceHeader from "./ServicesPage/ServiceHeader";
import ServiceMain from "./ServicesPage/ServiceMain";
import FlightImage from "./FlightImage/FlightImage";
import Contact from "./Contact/Contact";
import { Box } from "@mui/material";



export default function Home() {
  return (
    <Box>
      <HeroPage />
      <AboutPage />
      <AboutPageTwo />
      <AboutPageThree />
      <AboutThreeMain />
      <NursePage />
      <HireProcess />
      <HireProcessMain />
      <ServiceHeader />
      <ServiceMain />
      <FlightImage />
      <Contact />
      
    </Box>
  );
}

import React from "react";
import { Box } from "@mui/material";
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
import Incrix from "./Incrix/Incrix";
import JobVaccancy from "./JobVaccancy/JobVaccancy";
import Footer from "./Footer/Footer";

export default function Home() {
  return (
    <Box>
      <Box id="home">
        <HeroPage />
      </Box>
      <Box id="about">
        <AboutPage />
        <AboutPageTwo />
        <AboutPageThree />
        <AboutThreeMain />
        <NursePage />
      </Box>
      <Box>
        <HireProcess />
        <HireProcessMain />
      </Box>
      <Box id="services">
        <ServiceHeader />
        <ServiceMain />
      </Box>
      <Box>
      <FlightImage />
      </Box>
      <Box id="jobs">
        <JobVaccancy />
      </Box>
      <Box id="contact">
        <Contact />
      </Box>
      <Box>
        <Footer />
        <Incrix />
      </Box>
    </Box>
  );
}
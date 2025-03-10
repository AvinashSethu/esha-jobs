"use client";
import React, { useState,useEffect } from "react";
import { Box } from "@mui/material";
import HeroPage from "./HeroPage/HeroPage";
import AboutPage from "./AboutPage/AboutPage";
import AboutPageTwo from "./AboutPageTwo/AboutPageTwo";
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
  const [selectedJobTitle, setSelectedJobTitle] = useState("");
  const [jobTitles, setJobTitles] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(true);

  const fetchJobs = async () => {
    try {
      setLoadingJobs(true);
      const response = await axios.get("/api/jobs");
      const fetchedJobs = response.data.jobs || [];
      const titles = fetchedJobs.map((job) => job.jobTitle);
      setJobTitles(titles);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoadingJobs(false);
    }
  };

  useEffect(() => {
    fetchJobs();
    const interval = setInterval(fetchJobs, 10000); // Poll every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const handleApplyNow = (jobTitle) => {
    setSelectedJobTitle(jobTitle);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box>
      <Box id="home">
        <HeroPage />
      </Box>
      <Box id="about">
        <AboutPage />
        <AboutPageTwo />
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
      <JobVaccancy onApplyNow={handleApplyNow} jobTitles={jobTitles} loadingJobs={loadingJobs}/>
      </Box>
      <Box id="contact">
      <Contact prefilledJobTitle={selectedJobTitle} jobTitles={jobTitles}/>
      </Box>
      <Box>
        <Footer />
        <Incrix />
      </Box>
    </Box>
  );
}
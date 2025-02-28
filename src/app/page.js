import React from "react";
import HeroPage from "./HeroPage/HeroPage";
import AboutPage from "./AboutPage/AboutPage";
import AboutPageTwo from "./AboutPageTwo/AboutPageTwo";
import CareerPage from "./CareerPage/CareerPage";


export default function Home() {
  return (
    <div>
      <HeroPage />
      <AboutPage />
      <AboutPageTwo />
      <CareerPage />
      
    </div>
  );
}

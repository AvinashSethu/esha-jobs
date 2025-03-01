import React from "react";
import HeroPage from "./HeroPage/HeroPage";
import AboutPage from "./AboutPage/AboutPage";
import AboutPageTwo from "./AboutPageTwo/AboutPageTwo";
import AboutPageThree from "./AboutPageThree/AboutPageThree";
import AboutThreeMain from "./AboutPageThree/AboutThreeMain";
import NursePage from "./AboutPageThree/NursePage";
import HireProcess from "./HireProcess/HireProcess";
import HireProcessMain from "./HireProcess/HireProcessMain";



export default function Home() {
  return (
    <div>
      <HeroPage />
      <AboutPage />
      <AboutPageTwo />
      <AboutPageThree />
      <AboutThreeMain />
      <NursePage />
      <HireProcess />
      <HireProcessMain />
      
    </div>
  );
}

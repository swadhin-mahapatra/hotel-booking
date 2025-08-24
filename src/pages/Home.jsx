import React from "react";
import HeroHome from "../components/HeroHome"; 
import AboutSection from "../components/AboutSection";
import PopularHotels from "../components/PopularHotels";
import PopularDestinations from "../components/PopularDestinations";
import HowItWorks from "../components/HowItWorks"; 

export default function Home() {
  return (
    <>
      <HeroHome />
      <AboutSection />
      <PopularHotels />
      <PopularDestinations />
      <HowItWorks />
    </>
  );
}
import React from "react";
import PageHeader from "../components/PageHeader";
import AboutSection from "../components/AboutSection";
import FeaturesSection from "../components/FeaturesSection";

export default function About() {
  return (
    <>
      <PageHeader title="About" />
      <AboutSection />
      <FeaturesSection />
    </>
  );
}
// src/pages/About.jsx
import React from "react";
import PageHeader from "../components/PageHeader";
import AboutSection from "../components/AboutSection";
import FeaturesSection from "../components/FeaturesSection";

export default function About() {
  return (
    <>
      {/* Add the new page header */}
      <PageHeader title="About" />

      {/* Reuse the existing About section */}
      <AboutSection />
      <FeaturesSection />
    </>
  );
}
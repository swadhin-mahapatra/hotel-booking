// src/pages/Testimonial.jsx
import React from "react";
import PageHeader from "../components/PageHeader";
import TestimonialsSection from "../components/TestimonialsSection";

export default function Testimonial() {
  return (
    <>
      {/* This will now automatically use the default header image */}
      <PageHeader title="Testimonial" />
      <TestimonialsSection />
    </>
  );
}
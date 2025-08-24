// src/pages/Destinations.jsx
import React from "react";
import PageHeader from "../components/PageHeader";
import PopularDestinations from "../components/PopularDestinations";

export default function Destinations() {
  return (
    <>
      <PageHeader title="Destinations" />
      <PopularDestinations />
    </>
  );
}

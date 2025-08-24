// src/components/PageHeader.jsx
import React from "react";
import { Link } from "react-router-dom";

// Import the image that will be our default
import defaultHeaderImage from "../assets/about-header.jpg";

// Set the imported image as the default value for the 'image' prop
export default function PageHeader({ title, image = defaultHeaderImage }) {
  return (
    <div
      className="relative h-64 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }} // No changes here
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto h-full flex items-center justify-between relative z-10 px-6">
        <h1 className="text-5xl font-bold text-white">{title}</h1>
        <div className="text-white font-semibold">
          <Link to="/" className="hover:text-green-400">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
}
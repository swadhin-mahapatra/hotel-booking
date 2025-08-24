// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-900">HOTEL PARADISE</h1>
        <ul className="hidden md:flex items-center gap-6 text-gray-700 font-semibold">
          <li><Link to="/" className="hover:text-green-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-green-500">About Us</Link></li>
          <li><Link to="/destinations" className="hover:text-green-500">Destinations</Link></li>
          <li><Link to="/rooms" className="hover:text-green-500">Rooms</Link></li>
          <li><Link to="/testimonial" className="hover:text-green-500">Testimonial</Link></li>
          <li><Link to="/contact" className="hover:text-green-500">Contact Us</Link></li>
        </ul>
        <div className="flex items-center gap-4">
          <div className="text-sm">
            <Link to="/signin" className="hover:text-green-500">Sign In</Link>
            <span className="mx-1">/</span>
            <Link to="/register" className="hover:text-green-500">Register</Link>
          </div>
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">
            Request a Quote
          </button>
        </div>
      </div>
    </nav>
  );
}
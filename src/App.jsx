// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";
import Testimonial from "./pages/Testimonial";
import Destinations from "./pages/Destinations"; // Import Destinations
import SingleDestination from "./pages/SingleDestination";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destination/:id" element={<SingleDestination />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/signin" element={<div>Sign In Page</div>} />
          <Route path="/register" element={<div>Register Page</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

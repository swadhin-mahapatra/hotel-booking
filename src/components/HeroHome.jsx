// src/components/HeroHome.jsx
import React from "react";
import Slider from "react-slick";
import { FaMapMarkerAlt, FaCalendarAlt, FaUserFriends, FaBed } from "react-icons/fa";
// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hotelResort from "../assets/resort.jpg";
import hotelPool from "../assets/pool.jpg";
import luxurySuite from "../assets/suite.jpg";
import hotelLobby from "../assets/lobby.jpg";

export default function HeroHome() {
  // Array of background images for the slider
  const backgroundImages = [
    hotelResort,
    hotelPool,
    luxurySuite,
    hotelLobby,
  ];

  // Settings for the slider component
  const settings = {
    dots: true,       // Show dot indicators at the bottom
    infinite: true,   // Loop the slider
    speed: 500,       // Transition speed in ms
    fade: true,       // Use a fade effect instead of slide
    cssEase: 'linear',
    slidesToShow: 1,    // Show one slide at a time
    slidesToScroll: 1,  // Scroll one slide at a time
    autoplay: true,     // Automatically change slides
    autoplaySpeed: 5000, // Time between slides in ms
    arrows: true        // Show the left/right arrows
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {backgroundImages.map((imgUrl, index) => (
          <div key={index}>
            <div
              className="relative h-[600px] bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${imgUrl})` }}
            >
              {/* This is the dark overlay */}
              <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Booking form and text positioned on top of the slider */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
        <div className="text-center text-white p-4">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">A BEST PLACE FOR YOUR VACATION</h1>
          <div className="bg-white rounded-lg shadow-xl p-6 mt-8 w-full max-w-5xl mx-auto">
            <form className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
              <div className="text-left">
                <label className="text-gray-600 font-semibold text-sm flex items-center gap-2 mb-2">
                  <FaMapMarkerAlt className="text-green-500" /> Search City
                </label>
                <input type="text" placeholder="Search City" className="w-full border p-3 rounded-md text-gray-800" />
              </div>
              <div className="text-left">
                <label className="text-gray-600 font-semibold text-sm flex items-center gap-2 mb-2">
                  <FaCalendarAlt className="text-green-500" /> Check In
                </label>
                <input type="date" className="w-full border p-3 rounded-md text-gray-800" />
              </div>
              <div className="text-left">
                <label className="text-gray-600 font-semibold text-sm flex items-center gap-2 mb-2">
                  <FaUserFriends className="text-green-500" /> Adults
                </label>
                <select className="w-full border p-3 rounded-md text-gray-800">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
              <div className="text-left">
                <label className="text-gray-600 font-semibold text-sm flex items-center gap-2 mb-2">
                  <FaBed className="text-green-500" /> Rooms
                </label>
                <select className="w-full border p-3 rounded-md text-gray-800">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white font-bold p-3 rounded-md hover:bg-green-600 transition duration-300"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
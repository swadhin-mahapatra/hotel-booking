// src/components/PopularHotels.jsx
import React from "react";
import Slider from "react-slick";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

// Import local images (add the two new ones)
import hotel1 from "../assets/Hotels/hotel-1.jpg";
import hotel2 from "../assets/Hotels/hotel-2.jpg";
import hotel3 from "../assets/Hotels/hotel-3.jpg";
import hotel4 from "../assets/Hotels/hotel-4.jpg";
import hotel5 from "../assets/Hotels/hotel-5.jpg"; // New
import hotel6 from "../assets/Hotels/hotel-6.jpg"; // New

// Helper component for star ratings (no changes here)
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FaStar
        key={i}
        className={i < rating ? "text-yellow-400" : "text-gray-300"}
      />
    );
  }
  return <div className="flex">{stars}</div>;
};

export default function PopularHotels() {
  // Add two more hotel objects to the array
  const hotelData = [
    {
      img: hotel1,
      location: "Italy",
      name: "Valle",
      rating: 4,
      price: "250.00",
    },
    {
      img: hotel2,
      location: "United States",
      name: "Hotel Las Trojes",
      rating: 5,
      price: "400.00",
    },
    {
      img: hotel3,
      location: "Canada",
      name: "Rosen Shingle Creek",
      rating: 4,
      price: "500.00",
    },
    {
      img: hotel4,
      location: "Thailand",
      name: "Ansan Hotel",
      rating: 5,
      price: "100.00",
    },
    { // New Hotel
      img: hotel5,
      location: "Spain",
      name: "The Madrid",
      rating: 5,
      price: "350.00",
    },
    { // New Hotel
      img: hotel6,
      location: "Australia",
      name: "Sydney Harbour Inn",
      rating: 4,
      price: "280.00",
    },
  ];

  // Slider settings (no changes needed, it will adapt)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Most Popular Hotel
        </h2>
        <Slider {...settings}>
          {hotelData.map((hotel, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <img src={hotel.img} alt={hotel.name} className="w-full h-56 object-cover" />
                  <div className="absolute top-4 left-4 bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                    <FaMapMarkerAlt className="text-green-500" />
                    {hotel.location}
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <StarRating rating={hotel.rating} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{hotel.name}</h3>
                  <p className="text-lg text-gray-600 font-semibold">
                    ${hotel.price} / <span className="font-normal text-sm">Per night</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
import React from "react";
import Slider from "react-slick";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

import hotel1 from "../assets/Hotels/hotel-1.jpg";
import hotel2 from "../assets/Hotels/hotel-2.jpg";
import hotel3 from "../assets/Hotels/hotel-3.jpg";
import hotel4 from "../assets/Hotels/hotel-4.jpg";
import hotel5 from "../assets/Hotels/hotel-5.jpg";
import hotel6 from "../assets/Hotels/hotel-6.jpg";

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
  const hotelData = [
    {
      img: hotel1,
      location: "Mumbai",
      name: "The Taj Palace",
      rating: 5,
      price: "15,000",
    },
    {
      img: hotel2,
      location: "Delhi",
      name: "The Oberoi",
      rating: 5,
      price: "12,500",
    },
    {
      img: hotel3,
      location: "Goa",
      name: "Leela Palace",
      rating: 4,
      price: "9,000",
    },
    {
      img: hotel4,
      location: "Jaipur",
      name: "Rambagh Palace",
      rating: 5,
      price: "20,000",
    },
    {
      img: hotel5,
      location: "Bengaluru",
      name: "ITC Gardenia",
      rating: 4,
      price: "10,000",
    },
    {
      img: hotel6,
      location: "Udaipur",
      name: "The Oberoi Udaivilas",
      rating: 5,
      price: "25,000",
    },
  ];

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
                    ₹{hotel.price} / <span className="font-normal text-sm">Per night</span>
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

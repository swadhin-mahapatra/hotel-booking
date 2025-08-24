import React from "react";
import { FaStar, FaWifi, FaTv, FaUtensils, FaMugHot } from "react-icons/fa";

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
  return <div className="flex items-center gap-1">{stars}</div>;
};

export default function RoomCard({ img, title, price, rating, features }) {
  const featureIcons = {
    wifi: <FaWifi title="Free Wifi" />,
    tv: <FaTv title="Flat Screen TV" />,
    restaurant: <FaUtensils title="Restaurant Access" />,
    breakfast: <FaMugHot title="Free Breakfast" />,
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      <img src={img} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-2">
          <StarRating rating={rating} />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <div className="flex items-center text-gray-500 gap-4 mb-4">
          {features.map((feature) => (
            <span key={feature}>{featureIcons[feature]}</span>
          ))}
        </div>
        <div className="mt-auto">
          <div className="flex justify-between items-center">
            <p className="text-xl text-gray-800 font-semibold">
              Rs {price} / <span className="font-normal text-sm">Per night</span>
            </p>
            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

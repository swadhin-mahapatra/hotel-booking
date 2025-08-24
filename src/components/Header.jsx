// src/components/Header.jsx
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

export default function Header() {
  return (
    <div className="bg-gray-800 text-white py-2 px-6">
      <div className="container mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FaClock className="text-green-400" />
            <span>Working Hours: 9:00 AM - 5:00 PM</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-green-400" />
            <span>Call Us: +1 234 567 890</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-green-400" />
            <span>Mail Us: contact@hotelparadise.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
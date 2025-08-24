// src/pages/SingleDestination.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { destinationsData } from "../data";
import { FaArrowLeft, FaEnvelope } from "react-icons/fa";

export default function SingleDestination() {
  const { id } = useParams();
  const navigate = useNavigate();

  const destination = destinationsData.find(d => d.id === parseInt(id));

  if (!destination) {
    return (
      <div className="container mx-auto p-12 text-center">
        <h2 className="text-3xl font-bold">Destination not found!</h2>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto p-12">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-800 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300 flex items-center gap-2 mb-8"
        >
          <FaArrowLeft /> Go Back
        </button>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <img src={destination.img} alt={destination.name} className="w-full rounded-lg shadow-xl mb-8" />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{destination.name}</h1>
            <p className="text-lg text-gray-600 mb-6">{destination.description}</p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Flex container to stack sidebar items */}
            <div className="flex flex-col gap-8">
              {/* Box 1: How can we help you? */}
              <div className="bg-green-500 text-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">How can we help you?</h3>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="bg-white text-green-500 font-bold py-3 px-6 rounded-md hover:bg-gray-100 transition duration-300 flex items-center gap-2">
                  <FaEnvelope /> Contact Us
                </button>
              </div>

              {/* Box 2: New component from screenshot */}
              <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, quibusdam. Doloremque, quod. Quisquam, quod
                  voluptatum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

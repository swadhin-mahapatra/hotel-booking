import React, { useState, useLayoutEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { destinationsData } from "../data";
import { FaArrowLeft, FaEnvelope } from "react-icons/fa";

export default function SingleDestination() {
  const { id } = useParams();
  const navigate = useNavigate();

  const sidebarRef = useRef(null);
  const [imageHeight, setImageHeight] = useState('auto');

  const destination = destinationsData.find(d => d.id === parseInt(id));

  useLayoutEffect(() => {
    const measureHeight = () => {
      if (sidebarRef.current) {
        setImageHeight(sidebarRef.current.offsetHeight);
      }
    };
    
    measureHeight();
    window.addEventListener('resize', measureHeight); 

    return () => window.removeEventListener('resize', measureHeight);
  }, [id]);

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
          <div className="lg:w-2/3 flex flex-col">
            <img 
              src={destination.img} 
              alt={destination.name} 
              className="w-full rounded-lg shadow-xl mb-8 object-cover"
              style={{ height: imageHeight }} 
            />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{destination.name}</h1>
            <p className="text-gray-600 mb-4">
              Finding the right hotel in a bustling city like {destination.name} can often be challenging, with countless options and fluctuating prices. Our platform simplifies this process by bringing you a curated selection of top-rated hotels. We provide transparent pricing, real guest reviews, and an easy booking system, so you can secure your perfect stay with confidence and without the usual hassle.
            </p>
            <p className="text-gray-600">
              {destination.description} It's a city that promises a rich tapestry of experiences, from its iconic landmarks and cultural hotspots to its delicious culinary scene. Whether you're here for business or leisure, {destination.name} offers a memorable journey for every traveler.
            </p>
          </div>

          <div className="lg:w-1/3">
            <div ref={sidebarRef} className="flex flex-col gap-8">
              <div className="bg-green-500 text-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Ready to book your trip?</h3>
                <p className="mb-6">
                  Our team is here to help you find the best deals and answer any questions you have about booking a hotel in {destination.name}.
                </p>
                <Link to="/contact">
                  <button className="bg-white text-green-500 font-bold py-3 px-6 rounded-md hover:bg-gray-100 transition duration-300 flex items-center gap-2">
                    <FaEnvelope /> Contact Us
                  </button>
                </Link>
              </div>
              <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
                <h4 className="font-bold text-lg mb-2">Travel Tip</h4>
                <p>
                  Book your accommodations in advance, especially during peak season, to secure the best rates and availability for your trip to {destination.name}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

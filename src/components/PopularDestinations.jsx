import React from "react";
import { Link } from "react-router-dom"; 
import { FaExternalLinkAlt } from "react-icons/fa";
import { destinationsData } from "../data";

export default function PopularDestinations() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Most Popular Destination
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinationsData.map((dest) => (
            <Link to={`/destination/${dest.id}`} key={dest.id} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <img
                src={dest.img}
                alt={dest.name}
                className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-green-600 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <FaExternalLinkAlt className="text-white text-4xl" />
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-white text-2xl font-bold">{dest.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

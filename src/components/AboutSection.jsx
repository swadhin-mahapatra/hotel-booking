// src/components/AboutSection.jsx
import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

// Import the image you added to your assets folder
import aboutImage from "../assets/about-image.jpg";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Column: Text Content */}
          <div className="md:w-1/2">
            <h3 className="text-green-500 font-semibold mb-2">About Us</h3>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              We provide <span className="text-gray-500">Solution</span> to grow your
              business
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              assumenda, maiores eaque voluptatibus, quos saepe ratione
              consequatur iusto alias, enim in. Assumenda, nobis.
            </p>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              quisquam, eius, quod corporis sunt sint eveniet veritatis
              voluptates nam unde, quibusdam excepturi.
            </p>
            <div className="flex items-center gap-4">
              <button className="flex items-center justify-center w-16 h-16 border-2 border-red-500 rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300">
                <FaInstagram size={30} />
              </button>
              <button className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-all duration-300">
                <FaFacebookF size={30} />
              </button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="md:w-1/2">
            <img
              src={aboutImage}
              alt="Hotel Staff assisting guest"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
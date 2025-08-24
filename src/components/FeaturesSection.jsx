// src/components/FeaturesSection.jsx
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import featuresImage from "../assets/features-image.jpg"; // Import the image you just added

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Column: Image */}
          <div className="md:w-1/2">
            <img
              src={featuresImage}
              alt="Our Features"
              className="rounded-lg shadow-xl w-full"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our Features
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, et. Dolores, atque. Amet, suscipit! Error rerum
              ratione impedit, similique quidem delectus, eum dicta esse
              repudiandae, sapiente eos ut molestiae consectetur.
            </p>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              sunt, quos, praesentium minus eos laudantium cumque corporis
              consequatur, placeat dignissimos odio quod?
            </p>
            <button className="bg-green-500 text-white font-bold py-3 px-6 rounded-md hover:bg-green-600 transition duration-300 flex items-center gap-2">
              Explore More <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
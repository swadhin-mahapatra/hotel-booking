import React from "react";
import { FaArrowRight } from "react-icons/fa";
import featuresImage from "../assets/features-image.jpg";

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src={featuresImage}
              alt="Our Features"
              className="rounded-lg shadow-xl w-full"
            />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our Features
            </h2>
            <p className="text-gray-600 mb-4">
              We offer a powerful and intuitive search experience that allows you to filter hotels by price, rating, amenities, and more. Our platform aggregates thousands of deals, ensuring you always find the best possible price for your desired stay without needing to browse multiple websites.
            </p>
            <p className="text-gray-600 mb-8">
              From detailed room descriptions and high-quality photos to authentic guest reviews, we provide all the information you need to book with confidence. Our secure and streamlined checkout process makes confirming your reservation quick and hassle-free.
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

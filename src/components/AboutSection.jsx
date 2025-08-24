import React from "react";
import aboutImage from "../assets/about-image.jpg";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h3 className="text-green-500 font-semibold mb-2">About Us</h3>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Your Gateway to Unforgettable Stays
            </h2>
            <p className="text-gray-600 mb-4">
              At Hotel Paradise, our mission is to make travel accessible and enjoyable for everyone. We believe that finding the perfect accommodation should be a simple and seamless experience, allowing you to focus on what truly matters: creating lasting memories.
            </p>
            <p className="text-gray-600 mb-8">
              Our platform offers a vast selection of hotels, from luxury resorts to cozy boutique stays, all at competitive prices. With our user-friendly interface and powerful search tools, you can easily compare options, read reviews, and book your ideal room with confidence and ease.
            </p>
          </div>

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

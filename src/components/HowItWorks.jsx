// src/components/HowItWorks.jsx
import React from "react";
import { FaMapMarkedAlt, FaSearchDollar, FaBuilding } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaMapMarkedAlt size={50} className="text-green-500" />,
      title: "Search Multiple Destinations",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, dicta maiores. Quam, molestiae quia.",
    },
    {
      icon: <FaSearchDollar size={50} className="text-green-500" />,
      title: "Find the Lowest Hotel Prices",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, dicta maiores. Quam, molestiae quia.",
    },
    {
      icon: <FaBuilding size={50} className="text-green-500" />,
      title: "Find the Right Hotel for You",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, dicta maiores. Quam, molestiae quia.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          How it Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
            >
              <div className="mb-6 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
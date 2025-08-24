// src/components/TestimonialsSection.jsx
import React from "react";

// Import the avatar images
import avatar1 from "../assets/Avatars/avatar-1.jpg";
import avatar2 from "../assets/Avatars/avatar-2.jpg";
import avatar3 from "../assets/Avatars/avatar-3.jpg";
import avatar4 from "../assets/Avatars/avatar-4.jpg";

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit nulla eu.",
      name: "KEVIN MARTHIN",
      title: "Developer",
      avatar: avatar1,
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit nulla eu.",
      name: "JOE GABRIEL",
      title: "Designer",
      avatar: avatar2,
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit nulla eu.",
      name: "JOIN MANSOOR",
      title: "Project Manager",
      avatar: avatar3,
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit nulla eu.",
      name: "SUSAN DAY",
      title: "CEO",
      avatar: avatar4,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
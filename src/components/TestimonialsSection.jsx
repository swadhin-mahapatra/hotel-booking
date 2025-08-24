import React from "react";

import avatar1 from "../assets/Avatars/avatar-1.jpg";
import avatar2 from "../assets/Avatars/avatar-2.jpg";
import avatar3 from "../assets/Avatars/avatar-3.jpg";
import avatar4 from "../assets/Avatars/avatar-4.jpg";

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "As a developer, I appreciate a clean and efficient user experience. This site delivered just that. The search was fast, the filters were intuitive, and the booking process was seamless. A truly well-built platform.",
      name: "KEVIN MARTHIN",
      title: "Developer",
      avatar: avatar1,
    },
    {
      text: "The user interface is beautiful and incredibly easy to navigate. I loved the visual layout of the hotel listings and the high-quality images. It made choosing a place to stay a delightful experience.",
      name: "JOE GABRIEL",
      title: "Designer",
      avatar: avatar2,
    },
    {
      text: "Booking for a team can be complicated, but this website made it simple. I was able to compare multiple rooms and prices effortlessly, which saved me a significant amount of time and helped keep our project on budget.",
      name: "JOIN MANSOOR",
      title: "Project Manager",
      avatar: avatar3,
    },
    {
      text: "For business travel, reliability is key. This platform has become my go-to for its consistent quality and trustworthy reviews. I can always find a great hotel that meets my needs, no matter the city.",
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

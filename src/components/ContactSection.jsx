// src/components/ContactSection.jsx
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Column: Contact Form */}
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Contact Form
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below, we will get back you soon.
            </p>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="w-full border p-3 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="w-full border p-3 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    className="w-full border p-3 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full border p-3 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full border p-3 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Your Company
                  </label>
                  <input
                    type="text"
                    className="w-full border p-3 rounded-md"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Write Your Message *
                </label>
                <textarea
                  rows="6"
                  className="w-full border p-3 rounded-md"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-green-500 text-white font-bold py-3 px-8 rounded-md hover:bg-green-600 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Contact Info */}
          <div className="md:w-1/3">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Visit our location
            </h3>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit amet
              consectetur.
            </p>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Message us
            </h3>
            <p className="text-gray-600 mb-2">info@example.com</p>
            <p className="text-gray-600 mb-8">+01 123 456 789</p>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-green-500"><FaFacebookF size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-green-500"><FaTwitter size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-green-500"><FaLinkedinIn size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-green-500"><FaInstagram size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-green-500"><FaPinterest size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-green-500"><FaYoutube size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

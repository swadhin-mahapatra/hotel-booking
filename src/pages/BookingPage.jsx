import React, { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";

import { FaCalendarAlt, FaBed, FaUsers } from "react-icons/fa";

export default function BookingPage() {
  const { user } = useAuth();

  const [bookingDetails, setBookingDetails] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
    roomType: "standard",
    fullName: user?.username || "",
    email: user?.email || "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Submitted:", bookingDetails);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)] bg-gray-50 p-4">
        <div className="w-full max-w-2xl p-10 text-center bg-white rounded-lg shadow-xl animate-fade-in">
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            Booking Confirmed!
          </h2>
          <p className="text-gray-700 mb-2">
            Thank you,{" "}
            <span className="font-semibold">{bookingDetails.fullName}</span>.
          </p>
          <p className="text-gray-600">
            A confirmation email has been sent to{" "}
            <span className="font-semibold">{bookingDetails.email}</span>.
          </p>
          <p className="text-gray-600 mt-4">
            We look forward to welcoming you to Hotel Paradise.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-200px)] bg-gray-100 p-4 sm:p-8 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 hidden md:block">
          <img
            src="https://placehold.co/600x800/8e9aaf/ffffff?text=Your+Luxury+Stay"
            alt="Luxury hotel room"
            className="object-cover w-full h-full"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/600x800/cccccc/ffffff?text=Image+Not+Found";
            }}
          />
        </div>

        <div className="w-full md:w-1/2 p-6 sm:p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Reserve Your Room
          </h2>
          <p className="text-gray-500 mb-6">
            Fill in the details below to complete your booking.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="checkIn"
                  className="block text-sm font-medium text-gray-700"
                >
                  Check-in
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaCalendarAlt className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    name="checkIn"
                    id="checkIn"
                    value={bookingDetails.checkIn}
                    onChange={handleChange}
                    required
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="checkOut"
                  className="block text-sm font-medium text-gray-700"
                >
                  Check-out
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaCalendarAlt className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    name="checkOut"
                    id="checkOut"
                    value={bookingDetails.checkOut}
                    onChange={handleChange}
                    required
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="guests"
                  className="block text-sm font-medium text-gray-700"
                >
                  Guests
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUsers className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    name="guests"
                    id="guests"
                    min="1"
                    max="10"
                    value={bookingDetails.guests}
                    onChange={handleChange}
                    required
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="roomType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Room Type
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaBed className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    id="roomType"
                    name="roomType"
                    value={bookingDetails.roomType}
                    onChange={handleChange}
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  >
                    <option value="standard">Standard</option>
                    <option value="deluxe">Deluxe</option>
                    <option value="suite">Suite</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                Personal Information
              </h3>
              <div className="mt-4 space-y-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={bookingDetails.fullName}
                    onChange={handleChange}
                    required
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={bookingDetails.email}
                    onChange={handleChange}
                    required
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

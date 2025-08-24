import React from "react";
import PageHeader from "../components/PageHeader";
import RoomCard from "../components/RoomCard";

import room1 from "../assets/Rooms/room-1.jpg";
import room2 from "../assets/Rooms/room-2.jpg";
import room3 from "../assets/Rooms/room-3.jpg";
import room4 from "../assets/Rooms/room-4.jpg";
import room5 from "../assets/Rooms/room-5.jpg";
import room6 from "../assets/Rooms/room-6.jpg";

export default function Rooms() {
  const allRooms = [
  { id: 1, title: "Deluxe Room", price: "7,500", rating: 4, features: ["wifi", "tv"], img: room1 },
  { id: 2, title: "Executive Suite", price: "15,000", rating: 5, features: ["wifi", "tv", "breakfast"], img: room2 },
  { id: 3, title: "Luxury Penthouse", price: "40,000", rating: 5, features: ["wifi", "tv", "restaurant", "breakfast"], img: room3 },
  { id: 4, title: "Family Room", price: "10,000", rating: 4, features: ["wifi", "tv"], img: room4 },
  { id: 5, title: "Standard Single", price: "4,500", rating: 3, features: ["wifi", "tv"], img: room5 },
  { id: 6, title: "Ocean View Suite", price: "22,000", rating: 5, features: ["wifi", "tv", "breakfast"], img: room6 },
];

  return (
    <>
      <PageHeader title="Our Rooms" />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allRooms.map((room) => (
              <RoomCard key={room.id} {...room} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

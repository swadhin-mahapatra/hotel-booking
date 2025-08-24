import React from "react";

export default function Hero({ title, subtitle }) {
  return (
    <div className="bg-[url('https://source.unsplash.com/1600x600/?hotel,resort')] bg-cover bg-center h-[400px] flex flex-col justify-center items-center text-white text-center">
      <h2 className="text-4xl font-bold drop-shadow-lg">{title}</h2>
      <p className="mt-2 text-lg drop-shadow-md">{subtitle}</p>
    </div>
  );
}

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white text-center p-4">
      <p>© {new Date().getFullYear()} Hotel Paradise. All rights reserved.</p>
    </footer>
  );
}

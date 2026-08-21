import React from "react";
import '../components/Compoenent.css'
import { useState } from "react";
import {
  HiOutlineLocationMarker,
  HiOutlineChevronDown,
  HiOutlineCalendar,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
<header className="sticky top-0 z-50 bg-white">
      <nav className="flex items-center justify-between px-4 py-4 md:px-8 lg:px-10">

        <div>
          <Link to="/">
            <h1 className="text-3xl font-semibold md:text-4xl">
              Earls
            </h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-6 lg:flex">
          <Link to="/">
            <li className="cursor-pointer hover:text-gray-500">Home</li>
          </Link>

          <Link to="/about">
            <li className="cursor-pointer hover:text-gray-500">About</li>
          </Link>

          <Link to="/blogs">
            <li className="cursor-pointer hover:text-gray-500">Blogs</li>
          </Link>

          <Link to="/carrer">
            <li className="cursor-pointer hover:text-gray-500">Careers</li>
          </Link>

          <Link to="/contact">
            <li className="cursor-pointer hover:text-gray-500">Contact</li>
          </Link>
        </ul>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-3 lg:flex">

          <div className="cursor-pointer px-2">
            Set Your Location
          </div>

          <button className="rounded-md border border-black px-4 py-2">
            Order Pickup
          </button>

          <button className="rounded-md border border-black px-4 py-2">
            Get Delivery
          </button>

          <button className="rounded-md bg-black px-4 py-2 text-white">
            Book a Table
          </button>

        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-3xl lg:hidden"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="border-t bg-white px-6 py-5 lg:hidden">

          <ul className="flex flex-col gap-5">

            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
            >
              <li>Home</li>
            </Link>

            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
            >
              <li>About</li>
            </Link>

            <Link
              to="/blogs"
              onClick={() => setIsMenuOpen(false)}
            >
              <li>Blogs</li>
            </Link>

            <Link
              to="/carrer"
              onClick={() => setIsMenuOpen(false)}
            >
              <li>Careers</li>
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
            >
              <li>Contact</li>
            </Link>

            {/* Mobile Buttons */}
            <li className="border-t pt-5">
              Set Your Location
            </li>

            <button className="rounded-md border border-black px-4 py-2">
              Order Pickup
            </button>

            <button className="rounded-md border border-black px-4 py-2">
              Get Delivery
            </button>

            <button className="rounded-md bg-black px-4 py-2 text-white">
              Book a Table
            </button>

          </ul>

        </div>
      )}
    </header>
  );
};

export default Navbar;
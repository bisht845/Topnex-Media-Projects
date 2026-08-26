import React, { useState } from "react";
import "../components/Compoenent.css";

import logoImg from "../assets/logo.jpeg";

import {
  HiOutlineLocationMarker,
  HiOutlineCalendar,
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "Menu",
      path: "/menu",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#071412]/10 bg-[#F5F0E6]">

      <nav className="mx-auto flex h-[88px] max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* ================= LOGO ================= */}

        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="flex shrink-0 items-center"
        >
          <h2 className="font-serif text-3xl tracking-widest text-[#071412]">
              NACHO-G
            </h2>
        </Link>


        {/* ================= DESKTOP MENU ================= */}

        <ul className="hidden items-center gap-8 lg:flex">

          {navLinks.map((link) => (
            <li key={link.name}>

              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative block py-3 text-[15px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 ${
                    isActive
                      ? "text-[#D7AE4D]"
                      : "text-[#071412] hover:text-[#D7AE4D]"
                  }`
                }
              >

                {({ isActive }) => (
                  <>
                    {link.name}

                    {/* Active underline */}

                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#D7AE4D] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />

                  </>
                )}

              </NavLink>

            </li>
          ))}

        </ul>


        {/* ================= RIGHT SIDE ================= */}

        <div className="hidden items-center gap-3 xl:flex">

          {/* Location */}

          <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-[#071412] transition hover:text-[#D7AE4D]">

            <HiOutlineLocationMarker className="text-xl text-[#D7AE4D]" />

            <span>
              Set Your Location
            </span>

          </button>


          {/* Pickup */}

          <button className="border border-[#071412] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#071412] transition-all duration-300 hover:border-[#D7AE4D] hover:bg-[#D7AE4D]">

            Order Pickup

          </button>


          {/* Delivery */}

          <button className="border border-[#071412] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#071412] transition-all duration-300 hover:border-[#D7AE4D] hover:bg-[#D7AE4D]">

            Get Delivery

          </button>


          {/* Book Table */}

          <button className="flex items-center gap-2 bg-[#071412] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#D7AE4D] hover:text-[#071412]">

            <HiOutlineCalendar className="text-base" />

            Book a Table

          </button>

        </div>


        {/* ================= MOBILE MENU BUTTON ================= */}

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-11 w-11 items-center justify-center border border-[#071412] text-2xl text-[#071412] transition-all duration-300 hover:bg-[#D7AE4D] lg:hidden"
        >

          {isMenuOpen ? (
            <HiOutlineX />
          ) : (
            <HiOutlineMenuAlt3 />
          )}

        </button>

      </nav>


      {/* ================= MOBILE MENU ================= */}

      {isMenuOpen && (

        <div className="border-t border-[#071412]/10 bg-[#F5F0E6] lg:hidden">

          <div className="px-5 py-5 sm:px-8">

            <ul>

              {navLinks.map((link) => (

                <li key={link.name}>

                  <NavLink
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `block border-b border-[#071412]/10 py-4 text-sm font-bold uppercase tracking-[0.12em] transition ${
                        isActive
                          ? "text-[#D7AE4D]"
                          : "text-[#071412] hover:text-[#D7AE4D]"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>

                </li>

              ))}

            </ul>


            {/* Location */}

            <button className="mt-3 flex w-full items-center gap-3 border-b border-[#071412]/10 py-4 text-sm font-medium text-[#071412]">

              <HiOutlineLocationMarker className="text-xl text-[#D7AE4D]" />

              Set Your Location

            </button>


            {/* Mobile Buttons */}

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">

              <button className="border border-[#071412] px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#071412] transition hover:bg-[#D7AE4D]">

                Order Pickup

              </button>

              <button className="border border-[#071412] px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#071412] transition hover:bg-[#D7AE4D]">

                Get Delivery

              </button>

              <button className="flex items-center justify-center gap-2 bg-[#071412] px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#D7AE4D] hover:text-[#071412]">

                <HiOutlineCalendar />

                Book a Table

              </button>

            </div>

          </div>

        </div>

      )}

    </header>
  );
};

export default Navbar;
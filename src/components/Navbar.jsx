import React from "react";
import '../components/Compoenent.css'
import {
  HiOutlineLocationMarker,
  HiOutlineChevronDown,
  HiOutlineCalendar,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0">
      <nav className="navbar">

        <div className="logo">
          <figure>
            <Link to="/"><h1 className="text-4xl font-semibold">Earls</h1></Link>
          </figure>
        </div>

        <ul className="menu">
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/blogs"><li>Blogs</li></Link>
          <Link to="/carrer"><li>Careers</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>

        <div className="right-side">

          <div className="location">
            Set Your Location
          </div>

          <button className="pickup">
            Order Pickup
          </button>

          <button className="delivery">
            Get Delivery
          </button>

          <button className="book-btn">
            Book a Table
          </button>

        </div>
        {/* Mobile hamburger  */}
        <div className="menu-btn">
          ☰
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
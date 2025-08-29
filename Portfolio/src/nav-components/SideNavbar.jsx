import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section>
      {/* Top bar */}
      <div className="bg-white p-3 max-sm:flex hidden justify-end">
        <button onClick={() => setMenuOpen(true)} className="mr-4">
          <FaBars size={24} />
        </button>
      </div>

      {/* Side menu with animation */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-red-300 text-white z-50 transform transition-transform duration-500 ease-in-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4"
        >
          <FaTimes size={24} className="text-black"/>
        </button>

        {/* Menu items */}
        <div className="flex flex-col gap-4 mt-16 items-center">
          <Link to={"/"}  className="cursor-pointer font-semibold text-lg rounded-md hover:bg-red-400 p-4 w-56 hover:text-black">
            Home
          </Link>
          <Link to={"/about"}  className="cursor-pointer font-semibold text-lg rounded-md hover:bg-red-400 p-4 w-56 hover:text-black">
            About
          </Link>
          <Link to={"/project"} className="cursor-pointer font-semibold text-lg rounded-md hover:bg-red-400 p-4 w-56 hover:text-black">
            Projects
          </Link>
          {/* <Link to="/blog" smooth={true} duration={500} className="cursor-pointer font-semibold text-lg rounded-md hover:bg-red-400 p-4 w-56 hover:text-black">
            Blog
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default SideNavbar;

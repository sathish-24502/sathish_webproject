import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const SideNavbar = () => {
  const [nav, setNav] = useState(false);

  function handleToggle() {
    setNav(!nav);
  }

  return (
    <section className="max-w-sm">
      {/* Top Right Menu Icon */}
      <div className="bg-black text-white  max-sm:flex p-2 hidden justify-end items-end bg-opacity-80">
        <div onClick={handleToggle} className="cursor-pointer z-50">
          {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Sidebar Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-44 bg-black bg-opacity-90 text-white transition-transform duration-300 z-40 ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col p-4 space-y-4">
          {[
            "Home",
            "About",
            "Contact",
            "Education",
            "Technologies",
            "Links",
            "Projects",
          ].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-yellow-400 underline"
                className="cursor-pointer block py-1 px-2 font-medium rounded-xl hover:bg-white hover:text-black transition"
                onClick={() => setNav(false)} // close sidebar after click
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Optional dark overlay */}
      {nav && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30"
          onClick={handleToggle}
        ></div>
      )}
    </section>
  );
};

export default SideNavbar;


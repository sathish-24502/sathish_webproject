import { Link } from "react-scroll";
import React from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  return (
    <section className="flex justify-center sticky top-0 z-10 max-sm:hidden">
      <div className="w-1/2 rounded-xl bg-black bg-opacity-80 text-white shadow-md shadow-black h-auto max-sm:w-full max-sm:rounded-none max-md:w-3/4 max-lg:w-3/4">
        <div>
          <ul id="nav" className="flex justify-around items-center p-2 ">
            {[
              "Home",
              "About",
              "Contact",
              "Education",
              "Technologies",
              "Coures",
              "Projects",
            ].map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-yellow-400 underline"
                  className="cursor-pointer py-1 px-2 font-medium rounded-xl hover:bg-white hover:text-black transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

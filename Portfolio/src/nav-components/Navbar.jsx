import { Link } from "react-router-dom";
import React from "react";
import { FaBars } from "react-icons/fa";
// import Sidebar from "./Sidebar";

// import About from "../pages/About";

export default function Navbar() {
  return (
    <section id="Navbar" className="max-sm:hidden" >
      <div className="flex justify-center sticky top-0 z-20 ">
        <div className="w-full bg-[#000000c6] text-white shadow shadow-black h-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl text-white font-mono  font-bold ml-4 "><span className="text-4xl">S</span><span className=" border-t-2 border-orange-300">ATHISH</span>.<span className="flex justify-end items-end text-sm font-semibold">PortFolio</span></h1>
            <div className="flex gap-4 items-center m-4 max-sm:hidden">
              <Link
                to={"/"}
                className="font-semibold shadow shadow-[#ff7b00] hover:bg-[#ff7b00b5] hover:scale-110 hover:text-white p-2 rounded-xl items-center"
              >
                Home
              </Link>
              <Link
                to={"/about"}
                className="font-semibold shadow shadow-[#ff7b00] hover:bg-[#ff7b00b5] hover:scale-110 hover: p-2 rounded-xl items-center" 
              >
                About
              </Link>
               {/* <Link
                to={"/project"}
                className="font-semibold shadow shadow-[#ff7b00] hover:bg-[#ff7b00b5] hover:scale-110 hover: p-2 rounded-xl items-center"
              >
                Project
              </Link> */}
              {/* <Link
                to={"/contact"}
                className="font-semibold shadow shadow-[#ff7b00] hover:bg-[#ff7b003a] hover:scale-110 hover: p-2 rounded-xl items-center"
              >
                Contact
              </Link> */}
              {/* <Link
                to={"/blog"}
                className="font-semibold shadow shadow-[#ff7b00] hover:bg-[#ff7b00b5] hover:scale-110 hover: p-2 rounded-xl items-center"
              >
                Blog
              </Link> */}
             
            </div>
            {/* <ul id="nav" className=" flex justify-end items-center p-2">
            {[
              "Home",
              "About",
              "Contact",
              // "Education",
              // "Technologies",
              // "Coures",
              // "Projects",
            ].map((item) => (
              <li key={item}>
                <Link to=
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
          </ul> */}
          </div>
        </div>
      </div>

      {/* <div className="flex justify-end">
                          <Sidebar/>
                        </div> */}
    </section>
  );
}

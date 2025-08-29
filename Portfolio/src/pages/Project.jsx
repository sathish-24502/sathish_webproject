import React from "react";
import UdemyClone from "../projects/UdemyClone";
import TripAdvisorClone from "../projects/TripAdvisorClone";
import Greenden from "../projects/Greenden";
import Navbar from "../nav-components/Navbar";
import Footer from "../nav-components/Footer";

const Project = () => {
  return (
    <section id="project" className=" text-black">
      {/* <nav className="sticky top-0">
        <Navbar />
      </nav> */}
      <div>
        <div className="text-lg bg-[#0e0f030b] flex flex-col max-sm:text-sm max-md:text-sm max-lg:text-sm p-5 mb-4 gap-10">
          <div className=" ">
            <UdemyClone />
          </div>
          <div className="">
            <TripAdvisorClone />
          </div>
          <div className="">
            <Greenden />
          </div>
        </div>
      </div>
      {/* <footer>
        <Footer />
      </footer> */}
    </section>
  );
};

export default Project;

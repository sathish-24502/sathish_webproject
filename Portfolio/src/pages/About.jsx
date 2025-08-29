import React from "react";
import BioSum from "../about-components/BioSum";
import Certification from "../about-components/Certification";
import Education from "../about-components/Education";
import Technologies from "../about-components/Technologies";
import Footer from "../nav-components/Footer";
import Navbar from "../nav-components/Navbar";
import SideNavbar from "../nav-components/SideNavbar";
import Skills from "../about-components/Skills";
import ContactForm from "../contact-componants/ContactForm"
import Project from "./Project";
// import Resume from "../about-components/Resume";

const About = () => {
  return (
    <section className="">
      {/* <Resume/> */}
      <div className="sticky top-0 z-20">
        <Navbar />
        {/* <SideNavbar /> */}
      </div>
      
      <div className="flex  font-medium">
        <div className="">
          <BioSum />
          <div className="flex max-sm:p-1 p-4 max-[320px]:p-0 max-[320px]:w-screen max-[480px]:w-screen">
            <div>
              <div className="">
                <Education />
              </div>
              <Certification className="" />
             
            </div>
            <div className="flex max-[320px]:hidden mx-6 p-4 max-sm:p-0 max-sm:mx-2 border-l-2">
              {/* <Skills /> */}
              <Technologies />
            </div>
          </div>
        </div>
      </div>
      <div className="my-4">
        <b className="text-2xl max-sm:text-xl max-sm:flex justify-center items-center my-4 m-4">Sample Projects</b>
        <Project/>
      </div>
      <div>
        <ContactForm />
      </div>
      

      <Footer />
    </section>
  );
};

export default About;

import React from "react";
// import App from "./App.jsx";
import Navbar from "../nav-components/Navbar";
import SideNavbar from "../nav-components/SideNavbar";
import Footer from "../nav-components/Footer";
import Sidebar from "../nav-components/Sidebar";
import {useState , useEffect } from "react";

const Home = () => {
  const title = [
    { id: 1, name: "Junoir Full Stack Developer" },
    // { id: 2, name: "Code Driven" },
  ];


  // const [homeData, setHomeData] = useState("");

  fetch

  return (
    <section id="home" className="max-[320px]:w-screen">
      
      <div className="">
        <div className="bg-[url('https://wallpaperaccess.com/full/11779.jpg')] bg-cover bg-center h-screen w-full">
          <div>
            <div className="flex justify-end items-end">
              {/* <Sidebar /> */}
            </div>
            <div className="max-sm:hidden">
              <Navbar />
              
            </div>
            {/* <div className=" max-lg:hidden max-xl:hidden hidden">
              <SideNavbar />
            </div> */}

            <div className="text-white flex-col my-36 max-sm:my-56 gap-6 max-sm:gap-4 max-md:gap-4 flex items-center justify-center p-2 bg-white bg-opacity-0 w-full h-full">
              {/* <span className="text-3xl font-serif items-center max-sm:mt-6 max-sm:text-lg max-md:text-xl max-lg:text-2xl">
                Welcome To My-Page,
              </span> */}
              <div className="text-4xl font-serif font-bold flex gap-2 max-sm:text-xl max-md:text-2xl max-lg:text-3xl">
                Hello !
                {/* <div className="flex gap-1">
                  <p className="ml-4">S</p>
                  <p>A</p>
                  <p>T</p>
                  <p>H</p>
                  <p>I</p>
                  <p>S</p>
                  <p>H</p>
                  <p>W</p>
                  <p>A</p>
                  <p>R</p>
                  <p>A</p>
                  <p>N</p>.<p>S</p>
                </div> */}
              </div>
              <div>
                {title.map((title) => (
                  <span
                    key={title.id}
                    className="text-5xl max-[320px]:flex flex-col justify-center items-center shadow-current max-[320px]:shadow-none  p-4 max-[320px]:p-0 shadow animate-pulse max-[320px]:animate-none font-semibold max-sm:text-xl font-serif max-md:text-2xl max-lg:text-4xl "
                  >
                    <span>I'm a</span> {title.name}
                  </span>
                ))}

                <span></span>
              </div>
              

               <div className="flex justify-end">
                          <Sidebar/>
                        </div>

              <h1 className="bg-white mb-12 text-black font-medium text-xl p-1 rounded-lg max-[320px]:text-sm">Explore More Info <span className="animate-pulse ">👆🏻</span></h1>
           <p className="text-xl font-sans p-4 font-medium max-sm:hidden">
                "Open to working with diverse teams at any location and highly
                motivated to consistently learn and adapt to new technologies,
                tools, and industry trends".
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* <footer>
        <Footer />
      </footer> */}
    </section>
  );
};

export default Home;

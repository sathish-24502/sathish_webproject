import React from "react";
import About from "../components/about";
import Education from "../components/Education";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Coures from "../components/Coures";

const Home = () => {
  return (
    <section id="home">
      <div>
        <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXs4Esh8FpOLYazSHxZ9hjKhDw8-IkSRe6d_ZGk6-v-wwxEaRuPUNsQfA&s')] bg-cover bg-center h-screen w-full">
         
          <div>
          
 <div className="flex justify-end items-end">
   <Sidebar/>
 </div>

           <div className="text-white flex-col my-32 gap-6 max-sm:gap-4 max-md:gap-4 flex items-center justify-center p-2 bg-white bg-opacity-0 w-full h-full">
             <span className="text-3xl font-serif items-center max-sm:mt-6 max-sm:text-lg max-md:text-xl max-lg:text-2xl">
              Welcome To My-Page,
            </span>
            <span className="text-4xl font-mono font-semibold flex gap-2 max-sm:text-xl max-md:text-2xl max-lg:text-3xl">
              Hi👋 ,I'm
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
              <p>N.</p>
              <p>S</p>
            </span>
            <span className="text-5xl font-semibold max-sm:text-xl font-serif max-md:text-2xl max-lg:text-4xl">
              I'm a Junoir Full Stack Developer
            </span>
            <p className="text-lg font-sans p-4 font-medium">
              "Open to working with diverse teams at any location and highly
              motivated to consistently learn and adapt to new technologies,
              tools, and industry trends."
            </p>
            
           </div>
          </div>
        </div>
      </div>
      <div>
        <About />
        <Education />   
        <Technologies />
        <Coures/>
        <Projects />
        <Footer />
      </div>
    </section>
  );
};

export default Home;

import React from "react";


const Footer = () => {
  return (
    <section className="p-4 text-white  max-[320px]:text-sm  max-[320px]:p-2 bg-[#111205d0] shadow-xl shadow-black  max-[320px]:w-screen">
      <div className="flex flex-col gap-2 ">
        {/* <h1 className="text-3xl font-serif max-sm:text-2xl max-md:text-2xl">PortFolio</h1> */}
        {/* <h2 className="max-sm:text-lg max-md:text-lg font-semibold text-2xl ml-8 font-serif flex justify-between">
          Junior Full Stack Developer
          
        </h2> */}
          
        <div className="flex justify-center">
          <p className="font-medium">Copyrights&copy;2025</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

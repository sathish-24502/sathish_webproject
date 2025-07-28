import React from "react";


const Footer = () => {
  return (
    <section className="max-w-sm p-4 text-black bg-gray-100 shadow-xl shadow-black ">
      <div className="flex flex-col m-2 gap-2 ">
        <h1 className="text-3xl font-serif max-sm:text-2xl max-md:text-2xl">PortFolio</h1>
        <h2 className="max-sm:text-lg max-md:text-lg font-semibold text-2xl ml-8 font-serif flex justify-between">
          Junior Full Stack Developer
          
        </h2>

        <div className="flex justify-end">
          <p className="font-serif">CopyRights &copy; 2025</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

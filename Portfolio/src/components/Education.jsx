import React from "react";

const Education = () => {
  return (
    <section id="education" className="text-black m-6 max-sm:m-4 max-md:m-4">
      <h1 className=" text-2xl font-bold flex justify-center font-serif max-sm:mb-1 max-sm:text-xl max-md:text-xl">Education</h1>
      <div className="m-4 p-2 font-serif">
        <h1 className="text-xl flex mb-1 justify-between max-sm:text-sm  max-md:text-sm">
          SMS COLLEGE OF ARTS & SCIENCE,
          <span className="text-gray-400 ">SEP-2022</span>
        </h1>
        <p className="flex justify-between text-lg max-sm:text-sm mb-1 max-md:text-sm">BSC-Computer Science, <span className="text-gray-400">GPA : 80%</span></p>
         <p className=" text-lg max-sm:text-sm mt-1 max-md:text-sm">Coimbatore.</p>
      </div>
    </section>
  );
};

export default Education;

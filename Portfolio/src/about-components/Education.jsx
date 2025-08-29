import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="bg-[#ff009536] rounded-lg text-black p-4 max-[320px]:p-0 max-[320px]:m-0  max-sm:p-1 max-sm:m-0 max-md:m-4  max-[320px]:w-screen max-[480px]:m-0 max-[480px]:w-96 "
    >
      <h1 className=" text-2xl font-bold flex justify-center my-2 font-serif max-[320px]:p-1  max-[320px]:my-1 max-sm:mb-1 max-sm:text-sm max-md:text-xl">
        Education
      </h1>
      <div className="m-4 p-2 font-serif max-sm:m-2 max-sm:p-1 max-[320px]:w-screen  max-[320px]:p-2  max-[320px]:m-0">
        <h1 className="text-xl flex mb-1 justify-between max-[320px]:gap-2  max-[320px]:justify-center  max-[480px]:items-center  max-[480px]:justify-center  max-[480px]:gap-4 max-sm:text-xs  max-md:text-sm">
          SMS COLLEGE OF ARTS & SCIENCE,
          <span className="text-gray-400">SEP-2022</span>
        </h1>
        <p className="flex  justify-between text-lg  max-[320px]:gap-2  max-[320px]:justify-center max-[480px]:items-center  max-[480px]:justify-center  max-[480px]:gap-4  max-sm:text-xs mb-1 max-md:text-sm">
          BSC-Computer Science, <span className="text-gray-400">GPA : 80%</span>
        </p>
        <p className="max-[320px]:items-center max-[320px]:flex  max-[320px]:justify-center max-[480px]:flex max-[480px]:items-center max-[480px]:justify-center text-lg max-sm:text-xs mt-1 max-md:text-sm">
          Coimbatore.
        </p>
      </div>
    </section>
  );
};

export default Education;

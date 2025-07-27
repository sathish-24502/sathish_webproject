import React from "react";
import coursesImg from "../assets/courses.png";

const Certification = () => {
  return (
    <section id="coures" className="bg-black bg-opacity-85 text-white flex justify-center items-center">
      <div>
        <h1 className=" text-2xl p-4 underline font-bold font-serif flex justify-center items-center max-sm:mb-1 max-sm:text-xl max-md:text-xl">
          Course
        </h1>
        <div className="flex justify-evenly gap-2 max-sm:flex-col m-10">
          <div className="">
            <div className=" w-2/5 max-md:w-80 max-lg:w-80 max-sm:hover:w-full">
              <img
                className="flex justify-center shadow-xl rounded-md items-center"
                src={coursesImg}
                alt="Coures completion certificate"
              />
            </div>
          </div>
          <div className=" font-serif rounded-md bg-white bg-opacity-40 shadow-xl max-md:w-80">
            <h2 className="text-lg font-semibold p-6">
              Mern Stack Development.
            </h2>
            <p className="text-lg p-4 ml-4 border-l">
              Fundamentals of Web Development Program , Course Completion
              Certificate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;

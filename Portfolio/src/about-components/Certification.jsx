import React from "react";
import coursesImg from "../assets/Certificate/courses.png";

const Certification = () => {
  return (
    <section
      id="coures"
      className="flex justify-center bg-[#48833524] mt-5 rounded-xl max-sm:mt-1 h-screen max-sm:h-auto max-[320px]:h-auto  max-[320px]:w-screen mb-1X max-[480px]:w-96 max-[480px]:h-auto"
    >
      <div className="text-lg max-sm:text-xs max-[320px]:justify-center">
        <h1 className=" my-2 text-2xl p-4 underline font-bold font-serif flex justify-center items-center max-sm:mb-1 max-sm:p-1 max-sm:text-sm max-md:text-xl">
          Certification
        </h1>
        <p className="m-4 flex justify-center items-center ml-6 max-sm:m-2 max-sm:ml-2 max-[320px]:mx-10 max-[320px]:p-4 max-[480px]:mx-8">
          My skills now include MongoDB, Express.js, React.js, and Node.js, with
          proficiency in both frontend and backend development. I am confident
          in creating dynamic, responsive, and scalable web solutions from start
          to deployment.As a fresher, I am excited and ready to collaborate with
          new team members, contribute my skills, and learn from real-world
          projects.
        </p>
         <div className="font-serif max-[320px]:font-sans m-6  max-[320px]:mx-10  max-[320px]:p-4  max-[320px]:-my-4 max-[320px]:flex  max-[320px]:flex-col  max-[320px]:justify-center  max-[320px]:items-center max-md:w-80 ">
            <h2 className="text-lg font-semibold underline mb-3 max-sm:text-sm ">
              Mern Stack Development.
            </h2>
            <p className="text-lg max-sm:text-xs">
              Fundamentals of Web Development Program , Course Completion
              Certificate.
            </p>
          </div>
        <div className=" gap-2 max-sm:flex  max-[320px]:justify-center m-10  max-[320px]:items-center  max-[320px]:m-0">
          <div className="">
            <div className=" w-2/5 max-md:w-80 max-lg:w-80  max-[320px]:w-60 max-[320px]:p-2">
              <img
                className="shadow-xl rounded-md"
                src={coursesImg}
                alt="Coures completion certificate"
              />
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Certification;

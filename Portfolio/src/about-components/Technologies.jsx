import React from "react";

const Technologies = () => {
  // Dynamically import all images in Logos folder
  const images = import.meta.glob("../assets/Logos/*.png", {
    eager: true,
    import: "default",
  });

  //  function(){
    
  //  title =
  //   (" Bootstrap",
  //   "CSS",
  //   " Express.Js",
  //   " FireBase",
  //   " HTML",
  //   "JavaScript",
  //   " MongoDB",
  //   " Node.Js",
  //   " React.Js",
  //   " TailwindCss",
  //   " Vite");
  //   } 
  const logos = Object.values(images); // extract URLs

  return (
    <section
      id="technologies"
      className="  font-serif m-6 text-black max-sm:m-0 max-md:m-4 max-sm:size-16"
    >
      <p className="text-2xl font-bold flex justify-center mb-6 max-sm:text-xs max-sm:m-1  max-md:text-xl p-2 max-sm:hidden">
        TECHNOLOGIES
      </p>
      <div className="flex justify-center items-center">
        <div className="flex flex-col flex-wrap gap-6 justify-around w-3/4 items-center border rounded-xl shadow-md shadow-black p-6 max-sm:p-2">
          {/* {title((Name , index) => (
              <h1 key={index} src={Name} alt={`title ${index + 1}`}></h1>
           ))} */}
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-20 max-sm:w-8 max-md:w-12 max-lg:w-16 rounded-3xl hover:bg-black p-1 h-auto object-contain shadow-xl  transition-transform hover:scale-110 duration-300 "
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;

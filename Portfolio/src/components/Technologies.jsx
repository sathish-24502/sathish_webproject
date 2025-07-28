import React from 'react';

const Technologies = () => {
  // Dynamically import all images in Logos folder
  const images = import.meta.glob('../assets/Logos/*.png', {
    eager: true,
    import: 'default',
  });

  const logos = Object.values(images); // extract URLs

  return (
    <section id="technologies" className=" bg-white font-serif m-6 text-black max-sm:m-4 max-md:m-4">
      <p className="text-2xl font-bold flex justify-center mb-4 max-sm:text-xl max-md:text-xl">
        Technologies
      </p>
      <div className="flex justify-center items-center">
        <div className="flex flex-wrap gap-6 justify-around w-3/4 items-center border rounded-xl shadow-md shadow-black p-6">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-20 max-sm:w-14 max-md:w-16 max-lg:w-16 rounded-3xl hover:bg-black p-1 h-auto object-contain shadow-xl transition-transform hover:scale-110 duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies
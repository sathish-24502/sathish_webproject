import React from "react";
import { FaEnvelope, FaPhone, FaLocationArrow } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="flex justify-self-end m-2">
      <div>
        <div>
          <h1 className="text-lg underline text-yellow-500">Contact :</h1>
        </div>
        <div className="flex flex-col text-white m-2 p-2">
          <p className="flex mb-2 items-center gap-1 text-lg max-sm:text-sm max-md:text-sm max-lg:text-sm">
            <FaEnvelope className="text-orange-400" />
            sathisheswari24@gmail.com
          </p>
          <p className="flex mb-2 items-center gap-1 text-lg max-sm:text-sm max-md:text-sm max-lg:text-sm">
            <FaPhone className="text-green-400 rotate-90" />
            6383366707
          </p>
          <p className="flex items-center gap-1 text-lg max-sm:text-sm max-md:text-sm max-lg:text-sm">
            <FaLocationArrow className="text-rose-400" />
            Chennai.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

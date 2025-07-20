import React from "react";
import {FaLinkedin, FaGithub, FaInstagram, FaFacebook} from 'react-icons/fa';


const Footer = () => {
  return (
    <section className="bg-gray-800 p-4 text-white">
      <div className="flex flex-col m-2 gap-2 ">
        <h1 className="text-white text-5xl font-serif">Portfolio</h1>
        <div className="text-3xl ml-8 text-white font-serif flex justify-between">
          Junior Full Stack Developer
          <ul className="flex gap-4">
            <a href="https://www.linkedin.com/in/sathish-se2405/"><FaLinkedin/></a>
            <a href="https://github.com/sathish-24502"><FaGithub/></a>
            <a href="https://www.instagram.com/sathish_se_24/"><FaInstagram/></a>
             <a href="https://www.facebook.com/profile.php?id=100026111359451"><FaFacebook/></a>
          </ul>
        </div>

        <div className="flex justify-end">
          <p className="font-serif">CopyRights &copy; 2025</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

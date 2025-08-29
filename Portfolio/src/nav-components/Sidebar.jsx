import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const Sidebar = () => {
     
       
  return (
    <section className=" mb-4 mt-4 ">
         {/* <div>
          <ul className="text-lg bg-black text-white p-2">
           <li className="flex items-center gap-2" >
            <label type="text" id="linkedIn" className="bg-gray-100 bg-opacity-45 p-1 rounded-md "><span className="hidden hover:flex">{linkedIn}</span></label>
             <a value="linkedIn" id="linkedIn" type="text" className=" item-center bg-[#2e81c9] p-1 rounded-md" href=""><FaLinkedin onClick={handleClick} className="text-white size-6"/></a>
              
           </li>
          </ul>
         </div> */}







      <ul className=" flex justify-center gap-4 max-[320px]:w-screen max-[320px]:gap-3">
        <a className="flex gap-1 hover:text-white justify-center hover:scale-125  items-center flex-col" href="https://www.linkedin.com/in/sathish-se2405/">
          <FaLinkedin className="bg-blue-500  text-white size-8 max-[320px]:size-6  p-1 rounded-lg" />
          <b className="text-xs
          ">LinkedIn </b>
        </a>
        <a className="flex gap-1 justify-center hover:scale-125 items-center flex-col" href="https://github.com/sathish-24502">
          <FaGithub  className="size-8 max-[320px]:size-6 bg-[#003780] text-white p-1 rounded-lg"/>
        <b className="text-xs ">GitHub</b>
        </a>
        <a className="flex gap-1 justify-center hover:scale-125 items-center flex-col" href="https://www.instagram.com/sathish_se_24/">
          <FaInstagram className="bg-[#ff0000c7] text-white p-1 size-8 max-[320px]:size-6 rounded-lg" />
        <b className="text-xs">Instagram</b>
         </a>
        <a className="flex gap-1 justify-center hover:scale-125 p-1 items-center flex-col" href="https://www.facebook.com/profile.php?id=100026111359451">
          <FaFacebook className="bg-blue-500 text-white p-1 size-8 max-[320px]:size-6 rounded-lg"  />
        <b className="text-xs">FaceBook</b>
        </a>
      </ul>
    </section>
  );
};

export default Sidebar;

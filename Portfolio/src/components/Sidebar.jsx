import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className='fixed top-10 max-w-sm'>
        <ul className=" max-w-sm flex-col flex gap-2 text-white bg-black bg-opacity-20 rounded-3xl p-2 ">
            <a href="https://www.linkedin.com/in/sathish-se2405/">
              <FaLinkedin  className='size-8 p-1 rounded-xl hover:bg-white hover:text-black animate-bounce hover:scale-150 duration-300 hover:animate-none'/>
            </a>
            <a href="https://github.com/sathish-24502">
              <FaGithub   className='size-8 p-1 rounded-xl hover:bg-white hover:text-black animate-bounce hover:scale-150  duration-300 hover:animate-none' />
            </a>
            <a href="https://www.instagram.com/sathish_se_24/">
              <FaInstagram    className='size-8 p-1 rounded-xl hover:bg-white hover:text-black animate-bounce hover:scale-150 duration-300 hover:animate-none'/>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100026111359451">
              <FaFacebook    className='size-8 p-1 rounded-xl hover:bg-white hover:text-black animate-bounce hover:scale-150  duration-300 hover:animate-none' />
            </a>
          </ul>
    </div>
  )
}

export default Sidebar
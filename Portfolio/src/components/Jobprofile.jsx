import React from "react";
// import {FaLinkedin , FaNa} from 'react-icons/fa'

const Jobprofile = () => {
  return (
    <section className="bg-gray-900 p-2 text-white font-serif">
      <div>
        <p className="text-4xl p-3">Links </p>
      </div>
      <div className="flex justify-around">
        <div className="rounded-xl flex flex-col lg:w-96 h-auto gap-3 p-3 bg-gray-700 text-lg">
          <span className="bg-gray-950 p-3 rounded-lg">Job Portals</span>
          <a href="https://www.linkedin.com/in/sathish-se2405/">LinkedIn </a>
          <a href="https://www.naukri.com/mnjuser/profile">MyNaukri</a>
        </div>
        <div className="rounded-xl flex flex-col lg:w-96 h-auto gap-3 p-3 bg-gray-700 text-lg">
          <span className="bg-gray-950 p-3 rounded-lg">DeployPages</span>
          <a href="https://github.com/sathish-24502">Git & GitHub</a>
          <a href="https://vercel.com/sathish-24502s-projects">Vercel</a>
        </div>
        <div>
          <div className="rounded-xl lg:w-96 h-auto flex flex-col gap-3 p-3 text-lg bg-gray-700">
            <span className="bg-gray-950 p-3 rounded-lg">SocialMedia</span>
            <a href="https://www.instagram.com/sathish_se_24/">Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=100026111359451">Facebook</a>
            <a href=""></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobprofile;

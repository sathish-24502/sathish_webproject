import React from "react";
import { FaEnvelope, FaPhone, FaLocationArrow } from "react-icons/fa";

const Header = () => {
  return (
    <section className="bg-gray-900 w-full h-auto">
      <div>
        <h1 className="text-white text-4xl p-3  font-serif mb-3">Profile</h1>
      </div>
     <div className=" flex justify-around">
       <div className="text-white p-8 flex-col flex gap-2 w-2/5 bg-slate-300 rounded-xl bg-opacity-10">
        <h1 className="text-3xl font-serif">Junior Full Stack Developer</h1>
        <ul className="flex-col flex gap-2">
          <li className="text-2xl font-serif">SATHISHWARAN S</li>
          <li className="text-lg flex font-sans items-center gap-1">
            <FaEnvelope />
            sathisheswari24@gmail.com
          </li>
          <li className="text-lg flex font-sans items-center gap-1">
            <FaPhone />
            6383366707
          </li>
          <li className="text-lg flex font-sans items-center gap-1">
            <FaLocationArrow />
            Chennai
          </li>
        </ul>
      </div>

      <div className="w-1/2 rounded-xl bg-gray-700 text-white p-3">
      <thead className="text-3xl font-serif">About</thead>
        <p className="font-sans p-3 mt-2 rounded-md bg-gray-900 bg-opacity-30 text-md">
          I am a 2022 B.Sc. Computer Science graduate. I have a strong interest
          in web development and full-stack technologies. After graduation, I
          focused on improving my technical skills. I have completed
          certification courses in full-stack development. The MERN Stack
          (MongoDB, Express.js, React.js, Node.js). I have hands-on experience
          in building small projects using React and Node. I enjoy creating
          responsive, user-friendly web applications. I’m confident in using
          HTML, CSS, JavaScript, and modern ES6 features. I have worked with
          RESTful APIs and JSON data formats. I use Git and GitHub for version
          control and code sharing. I understand basic database operations using
          MongoDB. I follow a clean coding style and reusable component
          structure. I stay updated with tech trends through YouTube and online
          communities. I completed several online assignments and mini-projects.
          I am a quick learner and passionate about solving problems through
          code. I am self-motivated and enjoy working both independently and in
          teams. I believe in continuous learning and self-improvement. I’m
          looking for an opportunity to start my career as a web developer. I
          want to apply my skills and grow in a real-time project environment.
          Ready to work hard and prove myself as a MERN stack developer.
        </p>
      </div>
     </div>
    </section>
  );
};

export default Header;

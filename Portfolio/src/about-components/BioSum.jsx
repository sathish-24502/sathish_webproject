import React from 'react'
import Contact from './Contact'

const BioSum = () => {
  return (
      <section id="about" className="w-full h-auto max-sm:w-screen max-md:w-screen bg-[#1487a4] max-[320px]:w-screen ">
      <div className="flex justify-center items-center">
        <div className="text-white p-4 ">
          <h1 className="flex justify-center border-b-2 text-3xl font-bold mb-2 font-serif max-sm:text-xl">
            About
          </h1>
          <p className="max-sm:text-sm max-md:text-md max-lg:text-md text-lg p-4">
            I am a 2022 B.Sc. Computer Science graduate. I have a strong
            interest in web development and full-stack technologies. After
            graduation, I focused on improving my technical skills. I have
            completed certification courses in full-stack development. The MERN
            Stack (MongoDB, Express.js, React.js, Node.js). I have hands-on
            experience in building small projects using React and Node. I enjoy
            creating responsive, user-friendly web applications. I’m confident
            in using HTML, CSS, JavaScript, and modern ES6 features. I have
            worked with RESTful APIs and JSON data formats. I use Git and GitHub
            for version control and code sharing. I understand basic database
            operations using MongoDB. I follow a clean coding style and reusable
            component structure. I stay updated with tech trends through YouTube
            and online communities. I completed several online assignments and
            mini-projects. I am a quick learner and passionate about solving
            problems through code. I am self-motivated and enjoy working both
            independently and in teams. I believe in continuous learning and
            self-improvement. I’m looking for an opportunity to start my career
            as a web developer. I want to apply my skills and grow in a
            real-time project environment. Ready to work hard and prove myself
            as a MERN stack developer.
          </p>
         <div>
            
          <Contact />
       
         </div>
        </div>
      </div>
  
    </section>
  )
}

export default BioSum
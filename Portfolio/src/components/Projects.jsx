import React from "react";

const Projects = () => {
  return (
    <section className="bg-gray-900 text-white p-2 font-serif">
      <div>
        <p className="text-4xl font-serif p-3 mb-3">Projects </p>

        <div className="flex flex-col ml-4 border text-lg bg-gray-700 p-5 gap-4 rounded-lg">
          <a className="flex justify-between items-center" href="https://sathish-24502.github.io/udemy-clone-page2-github/">
            <span className="">Udamy-Clone-Project</span><span className="border p-1 rounded-lg text-lg bg-opacity-30 shadow-2xl bg-rose-400">ClickMe</span>
          </a>
          <a className="flex justify-between items-center" href="https://sathish-24502.github.io/Tripadvisor-clone-website/"><span>Tripadvisor-Clone-Project</span><span className="border p-1 rounded-lg text-lg bg-opacity-30 shadow-2xl bg-rose-400">ClickMe</span></a>
         
         <a className="flex justify-between items-center" href="https://sathish-24502.github.io/Tailwind-greeden-clone/"><span>Greeden-Clone-Project</span><span className="border p-1 rounded-lg text-lg bg-opacity-30 shadow-2xl bg-rose-400">ClickMe</span></a>
         
         
          {/* <p>
            I created a simple Udemy clone using basic HTML and CSS. The layout
            includes a homepage, course cards, and navigation bar. I implemented
            responsiveness using media queries for mobile and desktop views.
            This project showcases fundamental web design skills with a clean
            UI.
          </p>
          <p>
            Technologies : <span>Html , External Css </span>
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
